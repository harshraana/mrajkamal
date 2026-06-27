/* eslint-disable @next/next/no-img-element */
import { Play } from "lucide-react";
import type { Reel } from "@/lib/instagram";

const ReelThumbnail = ({ reel }: { reel: Reel }) => {
  return (
    <a
      href={reel.permalink}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Watch this reel on Instagram'
      style={{ backgroundColor: reel.bgColor }}
      className='group relative block aspect-9/16 overflow-hidden rounded-2xl border hover:no-underline'
    >
      <img
        src={reel.thumbnailUrl}
        alt={reel.caption ? reel.caption.slice(0, 80) : "Instagram reel"}
        loading='lazy'
        width={reel.width}
        height={reel.height}
        className='h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
      />
      {/* darken the bottom for caption legibility */}
      <span className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
      {/* play affordance */}
      <span className='absolute inset-0 flex items-center justify-center'>
        <span className='flex h-12 w-12 items-center justify-center rounded-full bg-black/35 backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-black/55'>
          <Play size={20} fill='white' className='ml-0.5 text-white' />
        </span>
      </span>
      {reel.caption && (
        <p className='absolute inset-x-0 bottom-0 line-clamp-2 px-3 pb-3 text-left text-xs font-light leading-snug text-white'>
          {reel.caption}
        </p>
      )}
    </a>
  );
};

export default ReelThumbnail;
