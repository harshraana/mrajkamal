import { SITE_URL, formatINR } from "@/lib/site-url";
import type { ProductCardDTO } from "@/types";

/**
 * WhatsApp "Click to Chat" links.
 *
 * THE KEY CONSTRAINT: `wa.me` supports exactly ONE parameter, `?text=`. There is
 * no attachment, no media, no image parameter in the spec.
 *
 * So the product PHOTO reaches the chat only because WhatsApp's crawler fetches
 * the URL in the message body and renders a link preview from that page's
 * OpenGraph tags. WhatsApp's crawler does not run JavaScript — and `WhatsApp` is
 * in Next's default `htmlLimitedBots` list, so Next block-renders metadata into
 * <head> for it rather than streaming it into <body>. That is the mechanism, and
 * it means `/products/[slug]/opengraph-image.tsx` is the feature, not decoration.
 *
 * WhatsApp previews only the FIRST url in a message, so the text carries exactly
 * one.
 */

/** wa.me wants digits only: full international form, no '+', no spaces. */
const NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

export function whatsappUrl(text: string): string {
  // encodeURIComponent turns the newlines into %0A, which WhatsApp renders as
  // real line breaks.
  return `https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * The product inquiry message.
 *
 *   Hi! I'd like to know more about this product.
 *
 *   *Slimline 3-Door Steel Wardrobe*
 *   ₹18,499 (M.R.P. ₹24,000)
 *
 *   https://mrajkamalfurniture.com/products/slimline-3-door-steel-wardrobe
 *
 * The blank line before the URL keeps it on its own line so WhatsApp linkifies
 * and previews it cleanly. `*bold*` is WhatsApp's own markdown.
 */
export function productInquiryText(product: ProductCardDTO): string {
  const url = `${SITE_URL}/products/${product.slug}`;

  const intro =
    product.whatsappMessage?.trim() || "Hi! I'd like to know more about this product.";

  const price =
    product.hasDiscount && product.mrp !== null
      ? `₹${formatINR(product.price)} (M.R.P. ₹${formatINR(product.mrp)})`
      : `₹${formatINR(product.price)}`;

  return [intro, "", `*${product.name}*`, price, "", url].join("\n");
}

export function productInquiryUrl(product: ProductCardDTO): string {
  return whatsappUrl(productInquiryText(product));
}

/** The generic "talk to us" link used by the header/footer call-to-action. */
export function storeInquiryUrl(subject = "your furniture"): string {
  return whatsappUrl(`Hi! I'd like to inquire about ${subject}.`);
}
