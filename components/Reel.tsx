"use client";

import { useState } from "react";

export type ReelVideo = {
  id: string;
  title: string;
  caption: string;
};

export function Reel({ videos }: { videos: ReelVideo[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {videos.map((v, i) => (
        <ReelCard key={`${v.id}-${i}`} video={v} />
      ))}
    </div>
  );
}

function ReelCard({ video }: { video: ReelVideo }) {
  const [playing, setPlaying] = useState(false);
  const [thumbOk, setThumbOk] = useState(true);

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition hover:border-white/25">
      <div className="relative aspect-video overflow-hidden bg-black">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 block"
          >
            {thumbOk ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                onError={() => setThumbOk(false)}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0a0c12] to-[#12151d] font-mono text-[11px] uppercase tracking-widest text-white/40">
                Video preview unavailable
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300/95 text-[#05060a] shadow-[0_12px_40px_-10px_rgba(34,211,238,0.85)] transition group-hover:scale-110 sm:h-16 sm:w-16">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-md">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
              </svg>
              YouTube
            </div>
          </button>
        )}
      </div>
      <div className="p-5">
        <h4 className="text-sm font-medium text-white">{video.title}</h4>
        <p className="mt-1.5 text-xs leading-relaxed text-white/55">{video.caption}</p>
      </div>
    </div>
  );
}
