import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SmartImage from "@/components/media/SmartImage";
import RevealGroup from "@/components/animations/RevealGroup";
import RevealItem from "@/components/animations/RevealItem";
import { getSiteContent } from "@/lib/site-content";
import { telHref } from "@/lib/contact";

export async function generateMetadata(): Promise<Metadata> {
  const { about, seo } = await getSiteContent();
  return {
    title: about.heading || "About",
    description: seo.description,
    alternates: { canonical: "/about" },
  };
}

export default async function AboutPage() {
  const content = await getSiteContent();
  const { about, footer } = content;

  return (
    <div className='mt-20'>
      <Container>
        <Section spacing='tight'>
          <RevealGroup
            className='flex flex-col-reverse gap-8 md:flex-row md:items-center md:gap-4'
            stagger={0.18}
          >
            <RevealItem className='w-full md:flex-2' from='left'>
              <div className='max-w-[600px]'>
                <h1 className='mb-6 font-heading text-3xl leading-snug italic sm:text-4xl lg:leading-14'>
                  {about.heading}
                </h1>
                <h2 className='mb-6 font-heading text-xl sm:text-2xl'>{about.subheading}</h2>

                {/*
                  Sanitized on write AND again in the DTO serializer on read, so
                  this is safe. `prose-*` classes give the CMS-authored HTML the
                  same rhythm the hardcoded <p className="mb-6"> paragraphs had.
                */}
                <div
                  className='space-y-6 text-base leading-7 text-gray-700'
                  dangerouslySetInnerHTML={{ __html: about.bodyHtml }}
                />
              </div>
            </RevealItem>

            <RevealItem className='w-full md:flex-1' from='right'>
              <div className='mx-auto max-w-[280px] rounded-full border-3 border-primary p-2 shadow-2xl sm:max-w-[360px] md:max-w-none'>
                <SmartImage
                  image={about.image}
                  alt={about.image?.alt || "M Rajkamal furniture store"}
                  width={520}
                  height={520}
                  sizes='(max-width: 768px) 80vw, 33vw'
                  className='aspect-square w-full rounded-full object-cover sm:aspect-auto'
                />
              </div>
            </RevealItem>
          </RevealGroup>
        </Section>

        <Section spacing='tight' id='contactUs'>
          <RevealGroup
            className='flex flex-col gap-8 md:flex-row md:items-center md:gap-4'
            stagger={0.18}
          >
            <RevealItem className='w-full md:flex-2 md:pr-6' from='left'>
              {about.mapEmbedUrl && (
                /*
                 * The page builds its OWN iframe around a validated URL. The CMS
                 * stores a URL, not an HTML blob — Zod enforces the
                 * google.com/maps/embed origin — so the admin form can never
                 * become an arbitrary-HTML injection point.
                 */
                <iframe
                  src={about.mapEmbedUrl}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='M Rajkamal Furniture store location'
                  className='h-[320px] w-full rounded-2xl shadow-2xl md:h-[450px] lg:h-[500px]'
                />
              )}
            </RevealItem>

            <RevealItem className='w-full md:flex-1' from='right'>
              <div className='md:pl-4'>
                <h2 className='mb-6 font-heading text-2xl italic sm:text-3xl'>
                  {about.storeHeading}
                </h2>

                <address className='mb-6 text-base leading-7 not-italic'>
                  {about.addressText}
                </address>

                {about.storeHours.map((row) => (
                  <p key={row.label} className='mb-3 text-base font-semibold'>
                    {row.label}
                    <span className='ml-2 font-normal italic'>{row.value}</span>
                  </p>
                ))}

                <hr className='my-6' />

                <h2 className='mb-6 font-heading text-xl sm:text-2xl'>
                  {about.contactHeading}
                </h2>

                {footer.contact.phone && (
                  <p className='mb-3 text-base font-semibold'>
                    Phone:
                    <a
                      className='ml-2 font-normal italic'
                      href={telHref(footer.contact.phone)}
                    >
                      {footer.contact.phone}
                    </a>
                  </p>
                )}

                {footer.contact.email && (
                  <p className='mb-6 text-base font-semibold'>
                    Email:
                    <a
                      className='ml-2 font-normal break-all italic'
                      href={`mailto:${footer.contact.email}`}
                    >
                      {footer.contact.email}
                    </a>
                  </p>
                )}
              </div>
            </RevealItem>
          </RevealGroup>
        </Section>
      </Container>
    </div>
  );
}
