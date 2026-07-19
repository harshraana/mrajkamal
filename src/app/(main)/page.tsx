/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import SmartImage from "@/components/media/SmartImage";
import Reveal from "@/components/animations/Reveal";
import RevealGroup from "@/components/animations/RevealGroup";
import RevealItem from "@/components/animations/RevealItem";
import FeaturedProducts from "@/components/featured-products/FeaturedProducts";
import InstagramReels from "@/components/instagram-reel/InstagramReels";
import CustomerReviews from "@/components/customer-reviews-slider/CustomerReviews";
import Clients from "@/components/clients/Clients";
import { serviceIcon } from "@/components/icons/service-icon-map";
import { getSiteContent } from "@/lib/site-content";
import type { FeatureSectionDTO } from "@/types";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSiteContent();
  return {
    // `absolute` bypasses the root layout's "%s | M Rajkamal" template. Without
    // it the home page renders "M Rajkamal – Premium Furniture Store… | M Rajkamal",
    // branding itself twice in one title.
    title: { absolute: seo.title },
    description: seo.description,
    alternates: { canonical: "/" },
  };
}

/** The mirrored Materials / Experience blocks — same structure, opposite sides. */
function FeatureBlock({
  section,
  flip,
}: {
  section: FeatureSectionDTO;
  flip?: boolean;
}) {
  return (
    <Section>
      <Container className='text-center'>
        <RevealGroup
          className={`flex flex-col gap-8 md:items-center ${
            flip ? "md:flex-row-reverse" : "md:flex-row"
          }`}
          stagger={0.2}
        >
          <RevealItem
            className='w-full md:flex-1'
            from={flip ? "right" : "left"}
          >
            <SmartImage
              image={section.image}
              alt={section.image?.alt || section.heading}
              width={600}
              height={450}
              sizes='(max-width: 768px) 100vw, 50vw'
              className='h-auto w-full rounded-2xl'
            />
          </RevealItem>

          <RevealItem
            className={`w-full space-y-4 text-left md:flex-1 ${flip ? "md:pr-10" : "md:pl-10"}`}
            from={flip ? "left" : "right"}
          >
            <p className='font-bold tracking-widest text-destructive uppercase'>
              {section.eyebrow}
            </p>
            <SectionHeading as='h2'>{section.heading}</SectionHeading>
            <p className='text-base leading-8 font-light text-gray-600 sm:text-[18px]'>
              {section.body}
            </p>
          </RevealItem>
        </RevealGroup>
      </Container>
    </Section>
  );
}

export default async function HomePage() {
  const content = await getSiteContent();
  const { home } = content;

  return (
    <div className='main-page'>
      {/* Above the fold. The <h1> animates in with a CSS-only entrance rather
          than a scroll reveal — that keeps the LCP text out of the JS hydration
          path, so it is visible even if the bundle never arrives. */}
      <section className='flex min-h-[100svh] flex-col md:h-[100svh]'>
        <h1 className='mt-24 animate-in fade-in slide-in-from-top-3 fill-mode-backwards bg-orange-100 py-6 text-center font-heading text-2xl italic duration-700 ease-out motion-reduce:animate-none sm:py-8 sm:text-3xl md:mt-[140px] lg:text-4xl'>
          {home.heroH1}
        </h1>

        <div className='flex flex-1 items-center'>
          <Container>
            <div className='flex flex-col gap-10 py-10 md:flex-row md:gap-12 md:py-0'>
              {home.blocks.map((block, i) => (
                <div
                  key={block.heading || i}
                  className={`flex flex-1 flex-col gap-y-6 animate-in fade-in fill-mode-backwards duration-700 ease-out motion-reduce:animate-none ${
                    i === 0
                      ? "slide-in-from-left-6"
                      : "slide-in-from-right-6 md:flex-col-reverse md:text-right"
                  }`}
                  style={{ animationDelay: i === 0 ? "0.15s" : "0.3s" }}
                >
                  <div className='space-y-6'>
                    <h2 className='font-heading text-3xl font-medium italic sm:text-4xl lg:text-5xl'>
                      {block.heading}
                    </h2>
                    <p className='text-base leading-7 font-light text-gray-600 sm:text-lg'>
                      {block.body}
                    </p>
                  </div>

                  <div className='aspect-15/12 overflow-hidden rounded-2xl'>
                    <SmartImage
                      image={block.image}
                      alt={block.image?.alt || block.heading}
                      width={600}
                      height={480}
                      sizes='(max-width: 768px) 100vw, 50vw'
                      // The LCP images. `priority` is deprecated in Next 16 —
                      // eager + fetchpriority=high is the documented replacement.
                      eager
                      className='h-full w-full object-cover object-top'
                    />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* Authorised partner */}
      <RevealGroup
        as='section'
        className='bg-orange-100 py-14 md:py-20 lg:py-[90px]'
        stagger={0.15}
      >
        <Container className='text-center'>
          <div className='flex flex-col gap-6'>
            <RevealItem>
              <SectionHeading as='h2'>{home.partner.heading}</SectionHeading>
            </RevealItem>

            <RevealItem className='flex flex-wrap items-center justify-center gap-4'>
              {/* <GodrejInterioLogo className='h-auto w-40 mix-blend-darken sm:w-52 lg:w-60' /> */}
              <img
                src='/images/godrej-interio.png'
                className='h-auto w-40 sm:w-52 lg:w-60'
                alt='GodrejInterioLogo'
              />
              <SmartImage
                image={home.partner.logoBadge}
                alt={home.partner.logoBadge?.alt || "Authorised partner"}
                width={160}
                height={80}
                className='h-14 w-auto sm:h-16 lg:h-20'
              />
            </RevealItem>

            {home.partner.ctaHref && (
              <RevealItem className='text-center'>
                <a
                  href={home.partner.ctaHref}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mx-auto inline-flex w-fit items-center gap-x-1 rounded-full bg-primary px-4 py-2 font-semibold text-background hover:no-underline'
                >
                  {home.partner.ctaLabel} <ArrowRight size={16} />
                </a>
              </RevealItem>
            )}
          </div>
        </Container>
      </RevealGroup>

      {/* Featured products — this whole section was commented out. It renders
          nothing at all when no product is marked featured. */}
      <Reveal className='my-20 md:my-28 lg:my-[145px]'>
        <Container className='text-center'>
          <FeaturedProducts heading={home.featuredHeading} />
        </Container>
      </Reveal>

      <FeatureBlock section={home.materials} flip />

      {/* Services */}
      <Section>
        <Container className='text-center'>
          <div className='flex flex-col gap-10'>
            <Reveal as='div'>
              <SectionHeading as='h2'>{home.servicesHeading}</SectionHeading>
            </Reveal>

            <RevealGroup
              as='ul'
              className='mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-y-[80px]'
              stagger={0.1}
            >
              {home.services.map((service) => {
                const Icon = serviceIcon(service.icon);
                return (
                  <RevealItem as='li' key={service.title} className='space-y-3'>
                    <div className='mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary/10 text-primary'>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className='text-lg font-semibold'>{service.title}</h3>
                    <p className='font-light text-gray-600'>{service.desc}</p>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </Container>
      </Section>

      <FeatureBlock section={home.experience} />

      {/* Clients */}
      <Reveal className='my-20 md:my-28 lg:my-[145px]'>
        <div className='text-center'>
          <div className='flex flex-col gap-10'>
            <SectionHeading as='h2'>{home.clientsHeading}</SectionHeading>
            <Clients clients={home.clients} />
          </div>
        </div>
      </Reveal>

      {/* Instagram */}
      <Reveal className='my-20 md:my-28 lg:my-[145px]'>
        <Container>
          <div className='flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between'>
            <div>
              <SectionHeading as='h2' size='sm'>
                {home.instagram.heading}
              </SectionHeading>
              <p className='inline-block bg-gradient-to-r from-[#fd1d1d] to-[#833ab4] bg-clip-text font-heading text-3xl text-transparent sm:text-4xl lg:text-[42px]'>
                {home.instagram.handle}
              </p>
            </div>

            {home.instagram.url && (
              <a
                href={home.instagram.url}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex w-fit items-center gap-x-2 rounded-full bg-gradient-to-r from-[#fd1d1d] to-[#833ab4] px-8 pt-2 pb-2.5 font-heading text-lg font-semibold text-background transition hover:no-underline hover:shadow-2xl'
              >
                {home.instagram.ctaLabel}
                <ArrowRight size={16} strokeWidth={3} className='mt-1' />
              </a>
            )}
          </div>

          <div className='my-8'>
            <InstagramReels />
          </div>
        </Container>
      </Reveal>

      {/* Google reviews (store-wide, from Featurable — not the per-product ones) */}
      <Reveal className='my-20 md:my-28 lg:my-[145px]'>
        <Container>
          <SectionHeading as='h2' className='text-center'>
            {home.reviewsHeading}
          </SectionHeading>
          <div className='my-8'>
            <CustomerReviews />
          </div>
        </Container>
      </Reveal>
    </div>
  );
}
