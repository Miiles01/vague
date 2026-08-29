"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inview } from "@/components/animation/springs/in-view";
import { PillButton } from "@/components/ui/pill-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { StackedLines } from "@/components/ui/stacked-lines";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-background px-6 py-16 sm:px-10 md:px-20 lg:px-32 xl:px-48 sm:py-20 md:py-32 lg:py-40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
        <div>
          <Eyebrow>Training</Eyebrow>
          <StackedLines
            tag="h2"
            lines={["Start Your", "Training"]}
            className="mt-4 text-5xl font-medium leading-[0.95] tracking-tight"
          />
        </div>
        <PillButton
          variant="solid"
          href="https://www.youtube.com/@fightknowledge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más
        </PillButton>
      </div>

      <Inview
        tag="div"
        mode="once"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        config={{ tension: 180, friction: 26 }}
        className="relative mx-auto aspect-video w-full max-w-7xl overflow-hidden rounded-card-lg bg-surface shadow-2xl"
      >
        {!isPlaying ? (
          <div className="group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden bg-ink" onClick={() => setIsPlaying(true)}>
            <Image
              src="https://img.youtube.com/vi/WKNWZBUZi8I/maxresdefault.jpg"
              alt="Video Thumbnail"
              fill
              className="object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-40"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
            {/* Play Button Overlay */}
            <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-brand-red text-on-brand shadow-lg transition-transform duration-300 group-hover:scale-110 sm:size-24">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-8 sm:size-10">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </div>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WKNWZBUZi8I?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        )}
      </Inview>
    </section>
  );
};
