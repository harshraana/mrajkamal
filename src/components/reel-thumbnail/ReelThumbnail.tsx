"use client";

import Image from "next/image";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import type { Reel } from "@/lib/instagram";

export default function ReelThumbnail({ reel }: { reel: Reel }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  /**
   * Stop playback when this is torn down or hidden.
   *
   * `cacheComponents` enables React `<Activity>`, which hides a route with
   * `display: none` instead of unmounting it — and `display: none` does NOT stop
   * a <video>. Without this, navigating away from the home page while a reel is
   * playing leaves it playing, audio and all, from a page you can no longer see.
   */
  useLayoutEffect(() => {
    const video = videoRef.current;
    return () => {
      video?.pause();
    };
  }, []);

  const startPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    // A hover preview always starts muted — muted autoplay is the only kind
    // browsers allow without a user gesture.
    video.muted = true;
    setMuted(true);
    video
      .play()
      .then(() => setPlaying(true))
      .catch(() => {});
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    video.muted = true;
    setMuted(true);
    setPlaying(false);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const hoverProps = reel.videoUrl
    ? { onMouseEnter: startPreview, onMouseLeave: stopPreview }
    : {};

  return (
    /**
     * The wrapper carries the hover behaviour, and the mute button is a SIBLING
     * of the link — not a child of it.
     *
     * It used to sit inside the <a>, which is nested interactive content and is
     * forbidden by the HTML spec: a <button> inside an <a> has no defined
     * activation behaviour, and assistive technology reports it inconsistently.
     * The old code worked around the ambiguity with preventDefault/stopPropagation,
     * which is a sign the markup was wrong rather than a fix for it.
     */
    <div
      className='group relative aspect-9/16 overflow-hidden rounded-md border border-border md:rounded-2xl'
      style={{ backgroundColor: reel.bgColor }}
      {...hoverProps}
    >
      <a
        href={reel.permalink}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={
          reel.caption
            ? `Watch on Instagram: ${reel.caption.slice(0, 60)}`
            : "Watch this reel on Instagram"
        }
        className='absolute inset-0 block hover:no-underline'
      >
        <Image
          src={reel.thumbnailUrl}
          alt=''
          width={reel.width}
          height={reel.height}
          loading='lazy'
          sizes='(max-width: 768px) 45vw, 25vw'
          className='h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
        />

        {reel.videoUrl && (
          <video
            ref={videoRef}
            src={reel.videoUrl}
            poster={reel.thumbnailUrl}
            loop
            muted
            playsInline
            preload='none'
            aria-hidden='true'
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              playing ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        <span className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

        <span
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className='flex h-12 w-12 items-center justify-center rounded-full bg-black/35 backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-black/55'>
            <Play size={20} fill='white' className='ml-0.5 text-white' />
          </span>
        </span>

        {reel.caption && (
          <p className='absolute inset-x-0 bottom-0 line-clamp-2 px-3 pb-3 text-left text-xs leading-snug font-light text-white'>
            {reel.caption}
          </p>
        )}
      </a>

      {reel.videoUrl && playing && (
        <button
          type='button'
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className='absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65'
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}
    </div>
  );
}
