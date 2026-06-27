"use client";
/* eslint-disable @next/next/no-img-element */
import { Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";
import type { Reel } from "@/lib/instagram";

const ReelThumbnail = ({ reel }: { reel: Reel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const handleEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    // Hover preview always starts muted (muted autoplay is always allowed).
    video.muted = true;
    setMuted(true);
    video
      .play()
      .then(() => setPlaying(true))
      .catch(() => {});
  };

  const handleLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    video.muted = true;
    setMuted(true);
    setPlaying(false);
  };

  const toggleMute = (e: MouseEvent<HTMLButtonElement>) => {
    // Toggle sound without following the reel's link.
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <a
      href={reel.permalink}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Watch this reel on Instagram'
      style={{ backgroundColor: reel.bgColor }}
      className='group relative block aspect-9/16 overflow-hidden rounded-md md:rounded-2xl border hover:no-underline'
      onMouseEnter={reel.videoUrl ? handleEnter : undefined}
      onMouseLeave={reel.videoUrl ? handleLeave : undefined}
    >
      <img
        src={reel.thumbnailUrl}
        alt={reel.caption ? reel.caption.slice(0, 80) : "Instagram reel"}
        loading='lazy'
        width={reel.width}
        height={reel.height}
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
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* mute / unmute toggle — shown while the reel is playing */}
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

      {/* darken the bottom for caption legibility */}
      <span className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
      {/* play affordance — hidden while the video is playing */}
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
        <p className='absolute inset-x-0 bottom-0 line-clamp-2 px-3 pb-3 text-left text-xs font-light leading-snug text-white'>
          {reel.caption}
        </p>
      )}
    </a>
  );
};

export default ReelThumbnail;
