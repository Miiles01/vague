"use client";

import Image from "next/image";

import { useRef } from "react";

import { Inview } from "@/components/animation/springs/in-view";
import { Hover } from "@/components/animation/springs/hover";
import { Eyebrow } from "@/components/ui/eyebrow";
import { StackedLines } from "@/components/ui/stacked-lines";
import type { Testimonial, TestimonialsContent } from "@/data/mocks/home";

export interface TestimonialsSectionProps {
  testimonials: TestimonialsContent;
}

export const TestimonialsSection = ({
  testimonials,
}: TestimonialsSectionProps) => (
  <section
    id="testimonials"
    aria-labelledby="testimonials-title"
    className="bg-brand-cyan text-ink px-6 py-20 sm:px-10 md:px-20 lg:px-32 xl:px-48 sm:py-24 md:py-32 lg:py-40"
  >
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <Eyebrow>{testimonials.eyebrow}</Eyebrow>
        <StackedLines
          tag="h2"
          id="testimonials-title"
          lines={testimonials.titleLines}
          className="mt-4 text-5xl font-medium leading-[0.95] tracking-tight"
        />
      </div>
    </div>

    <ul className="mt-14 grid gap-5 md:grid-cols-3">
      {testimonials.testimonials.map((item, i) => (
        <TestimonialCard key={item.name} item={item} index={i} />
      ))}
    </ul>
  </section>
);

const TestimonialCard = ({
  item,
  index,
}: {
  item: Testimonial;
  index: number;
}) => {
  const cardRef = useRef<HTMLElement>(null);
  return (
    <li className="contents">
      <Inview
        ref={cardRef}
        tag="figure"
        mode="once"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        delayIn={index * 120}
        config={{ tension: 180, friction: 26 }}
        className="h-full"
      >
        <Hover
          tag="div"
          trigger={cardRef}
          from={{ y: 0 }}
          to={{ y: -8 }}
          config={{ tension: 300, friction: 22 }}
          className="flex h-full flex-col justify-between rounded-card bg-surface p-7"
        >
          <span
            className="text-4xl leading-none text-brand"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink">
            {item.quote}
          </blockquote>
          
          <figcaption className="mt-6 border-t border-hairline pt-4 flex items-center gap-4">
            {item.avatar && (
              <Image 
                src={item.avatar} 
                alt={`${item.name} avatar`} 
                width={48} 
                height={48} 
                className="size-12 rounded-full object-cover shrink-0 bg-ink/5" 
              />
            )}
            <div>
              <span className="block font-medium">{item.name}</span>
              <span className="block text-sm text-ink-soft">{item.role}</span>
            </div>
          </figcaption>

        </Hover>
      </Inview>
    </li>
  );
};
