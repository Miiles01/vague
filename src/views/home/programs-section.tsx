"use client";

import { useRef } from "react";
import Link from "next/link";

import { Inview } from "@/components/animation/springs/in-view";
import { Hover } from "@/components/animation/springs/hover";
import { Eyebrow } from "@/components/ui/eyebrow";
import { StackedLines } from "@/components/ui/stacked-lines";
import type { Program, ProgramsContent } from "@/data/mocks/home";

export interface ProgramsSectionProps {
  programs: ProgramsContent;
}

export const ProgramsSection = ({ programs }: ProgramsSectionProps) => (
  <section
    id="programs"
    aria-labelledby="programs-title"
    className="bg-surface px-6 py-24 md:py-32 lg:py-40 sm:px-10 md:px-20 lg:px-32 xl:px-48"
  >
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <Eyebrow>{programs.eyebrow}</Eyebrow>
        <StackedLines
          tag="h2"
          id="programs-title"
          lines={programs.titleLines}
          className="mt-4 text-5xl font-medium leading-[0.95] tracking-tight"
        />
      </div>
    </div>

    <ul className="mt-14">
      {programs.programs.map((program, i) => (
        <ProgramRow key={program.index} program={program} index={i} />
      ))}
    </ul>
  </section>
);

const ProgramRow = ({ program, index }: { program: Program; index: number }) => {
  return (
    <li className="block border-t border-hairline last:border-b">
      <Inview
        tag="div"
        mode="once"
        from={{ opacity: 0, y: 26 }}
        to={{ opacity: 1, y: 0 }}
        delayIn={index * 90}
        config={{ tension: 190, friction: 26 }}
        className="flex items-center gap-6 py-7"
      >
        <span className="w-10 text-sm font-medium text-ink-soft">
          {program.index}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-2xl font-medium tracking-tight sm:text-3xl">
            {program.name}
          </span>
          <span className="mt-1 block text-sm text-ink-soft">
            {program.description}
          </span>
        </span>
      </Inview>
    </li>
  );
};
