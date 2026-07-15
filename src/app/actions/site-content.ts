"use server";

import { z } from "zod";
import { updateTag } from "next/cache";
import { connectDB } from "@/lib/db";
import SiteContent from "@/lib/models/SiteContent";
import { requireAdmin } from "@/lib/auth/dal";
import { sanitizeRichText } from "@/lib/sanitize";
import { tags } from "@/lib/cache-tags";
import {
  aboutTabInput,
  footerTabInput,
  homeTabInput,
  seoTabInput,
} from "@/lib/validation/site-content";
import { formDataToObject } from "@/lib/validation/form";
import { errorState, successState, type ActionState } from "@/lib/action-state";

/**
 * Each tab writes ONLY its own subtree, via a dotted `$set`.
 *
 * That is the whole point of splitting the editor into four actions: a save on
 * the Footer tab issues `{"footer.copyright": …}` and touches nothing else, so
 * it cannot overwrite a Home field it never rendered. One document, four
 * independent write scopes.
 */
async function writeScoped(
  set: Record<string, unknown>,
  successMessage: string,
): Promise<ActionState> {
  await connectDB();

  await SiteContent.updateOne(
    { key: "singleton" },
    { $set: set },
    { upsert: true, runValidators: true },
  );

  updateTag(tags.siteContent);
  return successState(successMessage);
}

function invalid(error: z.ZodError): ActionState {
  return errorState("Please fix the highlighted fields.", z.flattenError(error).fieldErrors);
}

export async function saveHomeContent(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed = homeTabInput.safeParse(formDataToObject(formData));
  if (!parsed.success) return invalid(parsed.error);
  const d = parsed.data;

  return writeScoped(
    {
      "home.heroH1": d.heroH1,
      "home.blocks": d.blocks,
      "home.partner.heading": d.partnerHeading,
      "home.partner.logoBadge": d.partnerLogoBadge,
      "home.partner.ctaLabel": d.partnerCtaLabel,
      "home.partner.ctaHref": d.partnerCtaHref,
      "home.featuredHeading": d.featuredHeading,
      "home.materials": d.materials,
      "home.experience": d.experience,
      "home.servicesHeading": d.servicesHeading,
      "home.services": d.services,
      "home.clientsHeading": d.clientsHeading,
      "home.clients": d.clients,
      "home.instagram.heading": d.instagramHeading,
      "home.instagram.handle": d.instagramHandle,
      "home.instagram.url": d.instagramUrl,
      "home.instagram.ctaLabel": d.instagramCtaLabel,
      "home.reviewsHeading": d.reviewsHeading,
    },
    "Home page saved.",
  );
}

export async function saveAboutContent(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed = aboutTabInput.safeParse(formDataToObject(formData));
  if (!parsed.success) return invalid(parsed.error);
  const d = parsed.data;

  return writeScoped(
    {
      "about.heading": d.heading,
      "about.subheading": d.subheading,
      // The other rich-text field in the system. Sanitized on write, exactly
      // like Product.descriptionHtml.
      "about.bodyHtml": sanitizeRichText(d.bodyHtml),
      "about.image": d.image,
      "about.mapEmbedUrl": d.mapEmbedUrl,
      "about.storeHeading": d.storeHeading,
      "about.addressText": d.addressText,
      "about.storeHours": d.storeHours,
      "about.contactHeading": d.contactHeading,
    },
    "About page saved.",
  );
}

export async function saveFooterContent(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed = footerTabInput.safeParse(formDataToObject(formData));
  if (!parsed.success) return invalid(parsed.error);
  const d = parsed.data;

  return writeScoped(
    {
      // One nav array, read by BOTH Header and MobileMenu — they each hardcoded
      // their own copy before.
      nav: d.nav,
      "footer.quickLinksHeading": d.quickLinksHeading,
      "footer.quickLinks": d.quickLinks,
      "footer.findUsOnHeading": d.findUsOnHeading,
      "footer.findUsOn": d.findUsOn,
      "footer.contactHeading": d.contactHeading,
      "footer.contact.phone": d.contactPhone,
      "footer.contact.email": d.contactEmail,
      "footer.addressHeading": d.addressHeading,
      "footer.address": d.address,
      "footer.openingHours": d.openingHours,
      "footer.copyright": d.copyright,
    },
    "Navigation & footer saved.",
  );
}

export async function saveSeoContent(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed = seoTabInput.safeParse(formDataToObject(formData));
  if (!parsed.success) return invalid(parsed.error);
  const d = parsed.data;

  return writeScoped(
    {
      "seo.title": d.title,
      "seo.description": d.description,
      "seo.ogImage": d.ogImage,
      "business.name": d.businessName,
      "business.streetAddress": d.streetAddress,
      "business.addressLocality": d.addressLocality,
      "business.addressRegion": d.addressRegion,
      "business.postalCode": d.postalCode,
      "business.latitude": d.latitude,
      "business.longitude": d.longitude,
      "business.foundingDate": d.foundingDate,
      "business.opensAt": d.opensAt,
      "business.closesAt": d.closesAt,
      "business.openDays": d.openDays,
    },
    "SEO & business details saved.",
  );
}
