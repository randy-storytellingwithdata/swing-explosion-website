"use client";

import { useState } from "react";

type YouTubeFacadeProps = {
  videoId: string;
  title: string;
  className?: string;
  priority?: boolean;
};

export default function YouTubeFacade({
  videoId,
  title,
  className = "",
  priority = false,
}: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div
        className={`relative aspect-video overflow-hidden rounded-md bg-black ${className}`}
      >
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-bright ${className}`}
      aria-label={`Play video: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- external
          CDN thumbnail already sized/optimized by YouTube; no benefit
          from Next's image proxy, and avoids an extra server hop. */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-60"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-1 h-7 w-7 text-ink sm:h-9 sm:w-9"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <span className="absolute bottom-3 left-3 right-3 text-left text-sm font-semibold text-cream drop-shadow sm:text-base">
        {title}
      </span>
    </button>
  );
}
