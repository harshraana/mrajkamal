import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import MRajKamalLogo from "@/assets/svg/main-m-rajkamal-logo.svg";
import { telHref } from "@/lib/contact";
import type { SiteContentDTO } from "@/types";

/**
 * Every string here used to be hardcoded. It all comes from the CMS now.
 *
 * The `tel:` link is built with `telHref()` rather than interpolated: the footer
 * used `href="tel:+91 983 353 3076"` — spaces are not valid in a tel: URI (RFC
 * 3966 allows only `-`, `.`, `(`, `)` as visual separators), and the About page
 * had it right while the footer didn't. Now both derive from one function.
 */
export default function Footer({ content }: { content: SiteContentDTO }) {
  const f = content.footer;

  return (
    <footer className='p-4 sm:p-6'>
      <div className='rounded-b-4xl bg-gradient-to-t from-orange-200/60 to-transparent px-6 pt-6'>
        <div className='mx-auto max-w-[1200px]'>
          <div className='flex flex-col flex-wrap gap-4 sm:flex-row'>
            <div className='flex-2'>
              <MRajKamalLogo className='mx-auto my-6 sm:my-0 sm:w-full' />
            </div>

            <div className='flex flex-3 gap-4'>
              <div className='flex-1'>
                <h2 className='mb-4 font-heading text-xl uppercase'>{f.quickLinksHeading}</h2>
                <ul className='space-y-2'>
                  {f.quickLinks.map((link) => (
                    <li key={`${link.href}-${link.label}`}>
                      <Link className='font-light' href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='flex-1'>
                <h2 className='mb-4 font-heading text-xl uppercase'>{f.findUsOnHeading}</h2>
                <ul className='space-y-2'>
                  {f.findUsOn.map((link) => (
                    <li key={`${link.href}-${link.label}`}>
                      <a
                        className='font-light underline'
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mb-6 flex-1 sm:mb-0'>
              <h2 className='mb-4 font-heading text-xl uppercase'>{f.contactHeading}</h2>
              <ul className='space-y-2'>
                {f.contact.phone && (
                  <li className='flex items-center gap-x-2'>
                    <Phone size={16} className='shrink-0' />
                    <a
                      className='font-light whitespace-nowrap'
                      href={telHref(f.contact.phone)}
                    >
                      {f.contact.phone}
                    </a>
                  </li>
                )}
                {f.contact.email && (
                  <li className='flex items-center gap-x-2'>
                    <Mail size={16} className='shrink-0' />
                    <a
                      className='font-light break-all'
                      href={`mailto:${f.contact.email}`}
                    >
                      {f.contact.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className='flex-2'>
              <h2 className='mb-2 font-heading text-xl uppercase'>{f.addressHeading}</h2>
              <address className='mb-4 leading-6 font-light not-italic'>{f.address}</address>
              <p className='font-light italic'>{f.openingHours}</p>
            </div>
          </div>
        </div>

        <div className='py-6 text-center'>
          <p className='my-0 text-sm font-light text-orange-700 italic'>{f.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
