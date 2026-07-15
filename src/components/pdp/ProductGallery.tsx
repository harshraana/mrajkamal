"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageRefDTO } from "@/types";

/**
 * The only client island on the product page.
 *
 * Keyed by slug at the call site, so `activeIndex` can never survive a
 * navigation from one product to another — under Cache Components, React
 * `<Activity>` keeps the previous route mounted, and without the key the second
 * product could open on the first product's selected image.
 */
export default function ProductGallery({
  images,
  name,
}: {
  images: ImageRefDTO[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  if (!current) return null;

  return (
    <div className='space-y-3'>
      <div className='relative aspect-square overflow-hidden rounded-2xl bg-muted'>
        <Image
          src={current.url}
          alt={current.alt || name}
          fill
          sizes='(max-width: 1024px) 100vw, 50vw'
          className='object-cover'
          // The LCP image on this page. `priority` is deprecated in Next 16.
          loading='eager'
          fetchPriority='high'
        />
      </div>

      {images.length > 1 && (
        <ul className='flex flex-wrap gap-2'>
          {images.map((image, i) => (
            <li key={image.fileId || image.url}>
              <button
                type='button'
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1} of ${images.length}`}
                aria-current={i === active}
                className={cn(
                  "relative h-16 w-16 overflow-hidden rounded-lg border-2 transition sm:h-20 sm:w-20",
                  i === active
                    ? "border-primary"
                    : "border-transparent hover:border-border",
                )}
              >
                <Image
                  src={image.url}
                  alt=''
                  fill
                  sizes='80px'
                  className='object-cover'
                  loading='lazy'
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
