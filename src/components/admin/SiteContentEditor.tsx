"use client";

import { useActionState, useState } from "react";
import dynamic from "next/dynamic";
import {
  saveAboutContent,
  saveFooterContent,
  saveHomeContent,
  saveSeoContent,
} from "@/app/actions/site-content";
import { fieldErrors, idleState, type ActionState } from "@/lib/action-state";
import { SERVICE_ICON_NAMES } from "@/lib/constants/service-icons";
import { serviceIcon } from "@/components/icons/service-icon-map";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldError, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageUploader from "@/components/admin/ImageUploader";
import RepeatableList from "@/components/admin/RepeatableList";
import type {
  ClientDTO,
  HeroBlockDTO,
  HoursRowDTO,
  ImageRefDTO,
  LinkDTO,
  ServiceDTO,
  SiteContentDTO,
  FeatureSectionDTO,
} from "@/types";

const RichTextEditor = dynamic(() => import("@/components/admin/RichTextEditor"), {
  ssr: false,
  loading: () => <div className='h-[380px] animate-pulse rounded-lg border bg-muted' />,
});

const EMPTY_IMAGE: ImageRefDTO = { url: "", fileId: "", alt: "", width: 0, height: 0 };

/** Shared save row: status message + submit button. */
function SaveBar({ state, pending }: { state: ActionState; pending: boolean }) {
  return (
    <div className='sticky bottom-0 -mx-1 flex items-center gap-3 border-t border-border bg-muted/30 px-1 py-3 backdrop-blur'>
      <Button type='submit' disabled={pending}>
        {pending ? "Saving…" : "Save"}
      </Button>
      {state.status === "success" && (
        <p className='text-sm text-primary'>{state.message}</p>
      )}
      {state.status === "error" && (
        <p role='alert' className='text-sm text-destructive'>
          {state.message}
        </p>
      )}
    </div>
  );
}

/**
 * One image field. The hidden input that carries the value is rendered by the
 * parent form (next to its other hidden inputs), so this component owns the UI
 * and nothing else.
 */
function SingleImage({
  label,
  value,
  onChange,
}: {
  label: string;
  value: ImageRefDTO;
  onChange: (image: ImageRefDTO) => void;
}) {
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <ImageUploader
        value={value.url ? [value] : []}
        onChange={(images) => onChange(images[0] ?? EMPTY_IMAGE)}
        target={{ scope: "site" }}
        single
      />
    </Field>
  );
}

export default function SiteContentEditor({ content }: { content: SiteContentDTO }) {
  return (
    <Tabs defaultValue='home'>
      <TabsList className='mb-6'>
        <TabsTrigger value='home'>Home</TabsTrigger>
        <TabsTrigger value='about'>About</TabsTrigger>
        <TabsTrigger value='footer'>Nav &amp; footer</TabsTrigger>
        <TabsTrigger value='seo'>SEO &amp; business</TabsTrigger>
      </TabsList>

      {/* Four independent forms, four independent actions. Each writes only its
          own subtree with a scoped dotted $set, so saving one tab physically
          cannot clobber a field on another. */}
      <TabsContent value='home'>
        <HomeTab content={content} />
      </TabsContent>
      <TabsContent value='about'>
        <AboutTab content={content} />
      </TabsContent>
      <TabsContent value='footer'>
        <FooterTab content={content} />
      </TabsContent>
      <TabsContent value='seo'>
        <SeoTab content={content} />
      </TabsContent>
    </Tabs>
  );
}

function HomeTab({ content }: { content: SiteContentDTO }) {
  const [state, action, pending] = useActionState(saveHomeContent, idleState);
  const h = content.home;

  const [blocks, setBlocks] = useState<HeroBlockDTO[]>(h.blocks);
  const [badge, setBadge] = useState<ImageRefDTO>(h.partner.logoBadge ?? EMPTY_IMAGE);
  const [materials, setMaterials] = useState<FeatureSectionDTO>(h.materials);
  const [experience, setExperience] = useState<FeatureSectionDTO>(h.experience);
  const [services, setServices] = useState<ServiceDTO[]>(h.services);
  const [clients, setClients] = useState<ClientDTO[]>(h.clients);

  return (
    <form action={action} className='space-y-8'>
      <input type='hidden' name='blocks' value={JSON.stringify(blocks)} />
      <input type='hidden' name='materials' value={JSON.stringify(materials)} />
      <input type='hidden' name='experience' value={JSON.stringify(experience)} />
      <input type='hidden' name='partnerLogoBadge' value={JSON.stringify(badge)} />

      <Field>
        <FieldLabel htmlFor='heroH1'>Headline</FieldLabel>
        <Input id='heroH1' name='heroH1' defaultValue={h.heroH1} />
        <FieldError errors={fieldErrors(state, "heroH1")} />
      </Field>

      <section>
        <h2 className='mb-3 font-heading text-lg italic'>The two hero panels</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          {blocks.map((block, i) => (
            <div key={i} className='space-y-3 rounded-lg border border-border bg-card p-4'>
              <Input
                value={block.heading}
                onChange={(e) => {
                  const next = [...blocks];
                  next[i] = { ...block, heading: e.target.value };
                  setBlocks(next);
                }}
                placeholder='Heading'
              />
              <Textarea
                rows={4}
                value={block.body}
                onChange={(e) => {
                  const next = [...blocks];
                  next[i] = { ...block, body: e.target.value };
                  setBlocks(next);
                }}
                placeholder='Body'
              />
              <ImageUploader
                value={block.image?.url ? [block.image] : []}
                onChange={(images) => {
                  const next = [...blocks];
                  next[i] = { ...block, image: images[0] ?? EMPTY_IMAGE };
                  setBlocks(next);
                }}
                target={{ scope: "site" }}
                single
              />
            </div>
          ))}
        </div>
      </section>

      <section className='space-y-4'>
        <h2 className='font-heading text-lg italic'>Authorised partner</h2>
        <Field>
          <FieldLabel htmlFor='partnerHeading'>Heading</FieldLabel>
          <Input id='partnerHeading' name='partnerHeading' defaultValue={h.partner.heading} />
        </Field>
        <div className='grid gap-4 sm:grid-cols-2'>
          <Field>
            <FieldLabel htmlFor='partnerCtaLabel'>Button label</FieldLabel>
            <Input
              id='partnerCtaLabel'
              name='partnerCtaLabel'
              defaultValue={h.partner.ctaLabel}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='partnerCtaHref'>Button link</FieldLabel>
            <Input id='partnerCtaHref' name='partnerCtaHref' defaultValue={h.partner.ctaHref} />
          </Field>
        </div>
        <SingleImage
          label='Partner badge'
          value={badge}
          onChange={setBadge}
        />
      </section>

      <Field>
        <FieldLabel htmlFor='featuredHeading'>Featured products heading</FieldLabel>
        <Input
          id='featuredHeading'
          name='featuredHeading'
          defaultValue={h.featuredHeading}
        />
      </Field>

      {(
        [
          ["Materials section", materials, setMaterials],
          ["Experience section", experience, setExperience],
        ] as const
      ).map(([title, value, setter]) => (
        <section key={title} className='space-y-3'>
          <h2 className='font-heading text-lg italic'>{title}</h2>
          <div className='space-y-3 rounded-lg border border-border bg-card p-4'>
            <Input
              value={value.eyebrow}
              onChange={(e) => setter({ ...value, eyebrow: e.target.value })}
              placeholder='Eyebrow (small caps above the heading)'
            />
            <Input
              value={value.heading}
              onChange={(e) => setter({ ...value, heading: e.target.value })}
              placeholder='Heading'
            />
            <Textarea
              rows={4}
              value={value.body}
              onChange={(e) => setter({ ...value, body: e.target.value })}
              placeholder='Body'
            />
            <ImageUploader
              value={value.image?.url ? [value.image] : []}
              onChange={(images) => setter({ ...value, image: images[0] ?? EMPTY_IMAGE })}
              target={{ scope: "site" }}
              single
            />
          </div>
        </section>
      ))}

      <section>
        <h2 className='mb-1 font-heading text-lg italic'>Services</h2>
        <Field className='mb-3'>
          <FieldLabel htmlFor='servicesHeading'>Section heading</FieldLabel>
          <Input
            id='servicesHeading'
            name='servicesHeading'
            defaultValue={h.servicesHeading}
          />
        </Field>

        <RepeatableList
          name='services'
          items={services}
          onChange={setServices}
          blank={(): ServiceDTO => ({ icon: "Truck", title: "", desc: "" })}
          addLabel='Add a service'
          max={12}
          renderItem={(service, update) => (
            <div className='space-y-2'>
              <div className='flex flex-wrap gap-1'>
                {SERVICE_ICON_NAMES.map((iconName) => {
                  const Icon = serviceIcon(iconName);
                  const selected = service.icon === iconName;
                  return (
                    <button
                      key={iconName}
                      type='button'
                      aria-label={iconName}
                      aria-pressed={selected}
                      onClick={() => update({ icon: iconName })}
                      className={cn(
                        "rounded-md border p-1.5 transition",
                        selected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-primary",
                      )}
                    >
                      <Icon size={15} />
                    </button>
                  );
                })}
              </div>
              <Input
                value={service.title}
                onChange={(e) => update({ title: e.target.value })}
                placeholder='Title'
              />
              <Textarea
                rows={2}
                value={service.desc}
                onChange={(e) => update({ desc: e.target.value })}
                placeholder='Description'
              />
            </div>
          )}
        />
        <FieldError errors={fieldErrors(state, "services")} />
      </section>

      <section>
        <h2 className='mb-1 font-heading text-lg italic'>Clients</h2>
        <Field className='mb-3'>
          <FieldLabel htmlFor='clientsHeading'>Section heading</FieldLabel>
          <Input id='clientsHeading' name='clientsHeading' defaultValue={h.clientsHeading} />
        </Field>
        <RepeatableList
          name='clients'
          items={clients}
          onChange={setClients}
          blank={() => ({ name: "", logo: EMPTY_IMAGE })}
          addLabel='Add a client'
          renderItem={(client, update) => (
            <Input
              value={client.name}
              onChange={(e) => update({ name: e.target.value })}
              placeholder='Client name'
            />
          )}
        />
      </section>

      <section className='space-y-3'>
        <h2 className='font-heading text-lg italic'>Instagram</h2>
        <div className='grid gap-4 sm:grid-cols-2'>
          <Field>
            <FieldLabel htmlFor='instagramHeading'>Heading</FieldLabel>
            <Input
              id='instagramHeading'
              name='instagramHeading'
              defaultValue={h.instagram.heading}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='instagramHandle'>Handle</FieldLabel>
            <Input
              id='instagramHandle'
              name='instagramHandle'
              defaultValue={h.instagram.handle}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='instagramUrl'>Profile URL</FieldLabel>
            <Input id='instagramUrl' name='instagramUrl' defaultValue={h.instagram.url} />
          </Field>
          <Field>
            <FieldLabel htmlFor='instagramCtaLabel'>Button label</FieldLabel>
            <Input
              id='instagramCtaLabel'
              name='instagramCtaLabel'
              defaultValue={h.instagram.ctaLabel}
            />
          </Field>
        </div>
      </section>

      <Field>
        <FieldLabel htmlFor='reviewsHeading'>Customer reviews heading</FieldLabel>
        <Input id='reviewsHeading' name='reviewsHeading' defaultValue={h.reviewsHeading} />
      </Field>

      <SaveBar state={state} pending={pending} />
    </form>
  );
}

function AboutTab({ content }: { content: SiteContentDTO }) {
  const [state, action, pending] = useActionState(saveAboutContent, idleState);
  const a = content.about;

  const [image, setImage] = useState<ImageRefDTO>(a.image ?? EMPTY_IMAGE);
  const [hours, setHours] = useState<HoursRowDTO[]>(a.storeHours);

  return (
    <form action={action} className='space-y-6'>
      <input type='hidden' name='image' value={JSON.stringify(image)} />

      <Field>
        <FieldLabel htmlFor='heading'>Page heading</FieldLabel>
        <Input id='heading' name='heading' defaultValue={a.heading} />
      </Field>

      <Field>
        <FieldLabel htmlFor='subheading'>Subheading</FieldLabel>
        <Input id='subheading' name='subheading' defaultValue={a.subheading} />
      </Field>

      <Field>
        <FieldLabel>Story</FieldLabel>
        <RichTextEditor name='bodyHtml' defaultValue={a.bodyHtml} />
      </Field>

      <SingleImage label='Store photo' value={image} onChange={setImage} />

      <Field>
        <FieldLabel htmlFor='mapEmbedUrl'>Google Maps embed URL</FieldLabel>
        <Input id='mapEmbedUrl' name='mapEmbedUrl' defaultValue={a.mapEmbedUrl} />
        <FieldDescription>
          In Google Maps: Share → Embed a map → copy the <code>src</code> from the iframe.
          Only the URL — the page builds its own iframe.
        </FieldDescription>
        <FieldError errors={fieldErrors(state, "mapEmbedUrl")} />
      </Field>

      <div className='grid gap-4 sm:grid-cols-2'>
        <Field>
          <FieldLabel htmlFor='storeHeading'>&ldquo;Visit our store&rdquo; heading</FieldLabel>
          <Input id='storeHeading' name='storeHeading' defaultValue={a.storeHeading} />
        </Field>
        <Field>
          <FieldLabel htmlFor='contactHeading'>Contact heading</FieldLabel>
          <Input id='contactHeading' name='contactHeading' defaultValue={a.contactHeading} />
        </Field>
      </div>

      <Field>
        <FieldLabel htmlFor='addressText'>Address</FieldLabel>
        <Textarea id='addressText' name='addressText' rows={2} defaultValue={a.addressText} />
      </Field>

      <div>
        <FieldLabel className='mb-2 block'>Opening hours</FieldLabel>
        <RepeatableList
          name='storeHours'
          items={hours}
          onChange={setHours}
          blank={() => ({ label: "", value: "" })}
          addLabel='Add a row'
          renderItem={(row, update) => (
            <div className='grid gap-2 sm:grid-cols-[140px_1fr]'>
              <Input
                value={row.label}
                onChange={(e) => update({ label: e.target.value })}
                placeholder='Opens:'
              />
              <Input
                value={row.value}
                onChange={(e) => update({ value: e.target.value })}
                placeholder='10am - 8pm (Tuesday to Sunday)'
              />
            </div>
          )}
        />
      </div>

      <SaveBar state={state} pending={pending} />
    </form>
  );
}

function LinkFields({
  link,
  update,
}: {
  link: LinkDTO;
  update: (patch: Partial<LinkDTO>) => void;
}) {
  return (
    <div className='space-y-2'>
      <div className='grid gap-2 sm:grid-cols-2'>
        <Input
          value={link.label}
          onChange={(e) => update({ label: e.target.value })}
          placeholder='Label'
        />
        <Input
          value={link.href}
          onChange={(e) => update({ href: e.target.value })}
          placeholder='/products?category=locker  or  https://…'
        />
      </div>
      <label className='flex items-center gap-2 text-xs text-muted-foreground'>
        <input
          type='checkbox'
          checked={link.external}
          onChange={(e) => update({ external: e.target.checked })}
          className='size-3.5'
        />
        Opens in a new tab
      </label>
    </div>
  );
}

function FooterTab({ content }: { content: SiteContentDTO }) {
  const [state, action, pending] = useActionState(saveFooterContent, idleState);
  const f = content.footer;

  const [nav, setNav] = useState<LinkDTO[]>(content.nav);
  const [quickLinks, setQuickLinks] = useState<LinkDTO[]>(f.quickLinks);
  const [findUsOn, setFindUsOn] = useState<LinkDTO[]>(f.findUsOn);

  const blankLink = (): LinkDTO => ({ label: "", href: "", external: false });

  return (
    <form action={action} className='space-y-8'>
      <section>
        <h2 className='mb-1 font-heading text-lg italic'>Main navigation</h2>
        <p className='mb-3 text-sm text-muted-foreground'>
          Used by both the desktop header and the mobile menu.
        </p>
        <RepeatableList
          name='nav'
          items={nav}
          onChange={setNav}
          blank={blankLink}
          addLabel='Add a link'
          renderItem={(link, update) => <LinkFields link={link} update={update} />}
        />
        <FieldError errors={fieldErrors(state, "nav")} />
      </section>

      <section>
        <h2 className='mb-1 font-heading text-lg italic'>Footer — quick links</h2>
        <Field className='mb-3'>
          <FieldLabel htmlFor='quickLinksHeading'>Column heading</FieldLabel>
          <Input
            id='quickLinksHeading'
            name='quickLinksHeading'
            defaultValue={f.quickLinksHeading}
          />
        </Field>
        <RepeatableList
          name='quickLinks'
          items={quickLinks}
          onChange={setQuickLinks}
          blank={blankLink}
          addLabel='Add a link'
          renderItem={(link, update) => <LinkFields link={link} update={update} />}
        />
      </section>

      <section>
        <h2 className='mb-1 font-heading text-lg italic'>Footer — find us on</h2>
        <Field className='mb-3'>
          <FieldLabel htmlFor='findUsOnHeading'>Column heading</FieldLabel>
          <Input id='findUsOnHeading' name='findUsOnHeading' defaultValue={f.findUsOnHeading} />
        </Field>
        <RepeatableList
          name='findUsOn'
          items={findUsOn}
          onChange={setFindUsOn}
          blank={() => ({ label: "", href: "", external: true })}
          addLabel='Add a link'
          renderItem={(link, update) => <LinkFields link={link} update={update} />}
        />
      </section>

      <section className='space-y-4'>
        <h2 className='font-heading text-lg italic'>Contact &amp; address</h2>
        <div className='grid gap-4 sm:grid-cols-2'>
          <Field>
            <FieldLabel htmlFor='contactHeading'>Contact heading</FieldLabel>
            <Input id='contactHeading' name='contactHeading' defaultValue={f.contactHeading} />
          </Field>
          <Field>
            <FieldLabel htmlFor='contactPhone'>Phone</FieldLabel>
            <Input id='contactPhone' name='contactPhone' defaultValue={f.contact.phone} />
            <FieldDescription>Displayed as typed; the tel: link is built from the digits.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor='contactEmail'>Email</FieldLabel>
            <Input id='contactEmail' name='contactEmail' defaultValue={f.contact.email} />
            <FieldError errors={fieldErrors(state, "contactEmail")} />
          </Field>
          <Field>
            <FieldLabel htmlFor='addressHeading'>Address heading</FieldLabel>
            <Input id='addressHeading' name='addressHeading' defaultValue={f.addressHeading} />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor='address'>Address</FieldLabel>
          <Textarea id='address' name='address' rows={2} defaultValue={f.address} />
        </Field>

        <Field>
          <FieldLabel htmlFor='openingHours'>Opening hours line</FieldLabel>
          <Input id='openingHours' name='openingHours' defaultValue={f.openingHours} />
        </Field>

        <Field>
          <FieldLabel htmlFor='copyright'>Copyright</FieldLabel>
          <Input id='copyright' name='copyright' defaultValue={f.copyright} />
        </Field>
      </section>

      <SaveBar state={state} pending={pending} />
    </form>
  );
}

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function SeoTab({ content }: { content: SiteContentDTO }) {
  const [state, action, pending] = useActionState(saveSeoContent, idleState);
  const { seo, business } = content;

  const [ogImage, setOgImage] = useState<ImageRefDTO>(seo.ogImage ?? EMPTY_IMAGE);
  const [openDays, setOpenDays] = useState<string[]>(business.openDays);

  return (
    <form action={action} className='space-y-6'>
      <input type='hidden' name='ogImage' value={JSON.stringify(ogImage)} />
      <input type='hidden' name='openDays' value={JSON.stringify(openDays)} />

      <section className='space-y-4'>
        <h2 className='font-heading text-lg italic'>Search &amp; sharing</h2>
        <Field>
          <FieldLabel htmlFor='title'>Default page title</FieldLabel>
          <Input id='title' name='title' defaultValue={seo.title} />
        </Field>
        <Field>
          <FieldLabel htmlFor='description'>Default description</FieldLabel>
          <Textarea id='description' name='description' rows={3} defaultValue={seo.description} />
          <FieldDescription>Aim for 150–160 characters.</FieldDescription>
        </Field>
        <SingleImage
          label='Social sharing image'
          value={ogImage}
          onChange={setOgImage}
        />
      </section>

      <section className='space-y-4'>
        <h2 className='font-heading text-lg italic'>Business details</h2>
        <p className='text-sm text-muted-foreground'>
          These feed the structured data Google reads to show your store in local
          search and Maps. Getting the address and coordinates right matters.
        </p>

        <Field>
          <FieldLabel htmlFor='businessName'>Business name</FieldLabel>
          <Input id='businessName' name='businessName' defaultValue={business.name} />
        </Field>

        <Field>
          <FieldLabel htmlFor='streetAddress'>Street address</FieldLabel>
          <Input id='streetAddress' name='streetAddress' defaultValue={business.streetAddress} />
        </Field>

        <div className='grid gap-4 sm:grid-cols-3'>
          <Field>
            <FieldLabel htmlFor='addressLocality'>Locality</FieldLabel>
            <Input
              id='addressLocality'
              name='addressLocality'
              defaultValue={business.addressLocality}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='addressRegion'>State</FieldLabel>
            <Input
              id='addressRegion'
              name='addressRegion'
              defaultValue={business.addressRegion}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='postalCode'>PIN code</FieldLabel>
            <Input id='postalCode' name='postalCode' defaultValue={business.postalCode} />
          </Field>
        </div>

        <div className='grid gap-4 sm:grid-cols-3'>
          <Field>
            <FieldLabel htmlFor='latitude'>Latitude</FieldLabel>
            <Input
              id='latitude'
              name='latitude'
              type='number'
              step='any'
              defaultValue={business.latitude}
            />
            <FieldError errors={fieldErrors(state, "latitude")} />
          </Field>
          <Field>
            <FieldLabel htmlFor='longitude'>Longitude</FieldLabel>
            <Input
              id='longitude'
              name='longitude'
              type='number'
              step='any'
              defaultValue={business.longitude}
            />
            <FieldError errors={fieldErrors(state, "longitude")} />
          </Field>
          <Field>
            <FieldLabel htmlFor='foundingDate'>Established</FieldLabel>
            <Input id='foundingDate' name='foundingDate' defaultValue={business.foundingDate} />
          </Field>
        </div>

        <div className='grid gap-4 sm:grid-cols-2'>
          <Field>
            <FieldLabel htmlFor='opensAt'>Opens at</FieldLabel>
            <Input id='opensAt' name='opensAt' type='time' defaultValue={business.opensAt} />
          </Field>
          <Field>
            <FieldLabel htmlFor='closesAt'>Closes at</FieldLabel>
            <Input id='closesAt' name='closesAt' type='time' defaultValue={business.closesAt} />
          </Field>
        </div>

        <div>
          <FieldLabel className='mb-2 block'>Open on</FieldLabel>
          <div className='flex flex-wrap gap-2'>
            {DAYS.map((day) => {
              const on = openDays.includes(day);
              return (
                <button
                  key={day}
                  type='button'
                  aria-pressed={on}
                  onClick={() =>
                    setOpenDays(
                      on ? openDays.filter((d) => d !== day) : [...openDays, day],
                    )
                  }
                  className={cn(
                    "rounded-full border px-3 py-1 text-sm transition",
                    on
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary",
                  )}
                >
                  {day.slice(0, 3)}
                </button>
              );
            })}
          </div>
          <FieldDescription className='mt-2'>
            Days left off are advertised as closed.
          </FieldDescription>
        </div>
      </section>

      <SaveBar state={state} pending={pending} />
    </form>
  );
}
