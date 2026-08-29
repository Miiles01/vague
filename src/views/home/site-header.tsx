"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import { Spring } from "@/components/animation/springs/spring";
import { Hover } from "@/components/animation/springs/hover";
import { BrandMark } from "@/components/ui/brand-mark";
import { PillButton } from "@/components/ui/pill-button";
import { useScroll as useLenisScroll } from "@/hooks/smooth-scroll/use-scroll";
import { useContactModal } from "@/hooks/use-contact-modal";
import { anchorScroll } from "@/utils/anchor-scroll";
import type { NavLink } from "@/data/mocks/home";

export interface SiteHeaderProps {
  brand: string;
  navLeft: NavLink[];
  cta: string;
}

const MENU_LINKS: NavLink[] = [
  { label: "Programs", href: "#programs" },
  { label: "Facilities", href: "#facilities" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SiteHeader = ({ brand, navLeft, cta }: SiteHeaderProps) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const stop = useLenisScroll((s) => s.stop);
  const start = useLenisScroll((s) => s.start);
  const openContact = useContactModal((s) => s.open);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) stop();
    else start();
    return () => start();
  }, [open, stop, start]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const { scrollY } = useScroll();
  // On mobile we might want a slightly wider pill (96%) than desktop (92%), but 92% is generally fine.
  // Using a CSS clamp or simple percentage is fine. Let's stick to 94% to be safe on all screens.
  const width = useTransform(scrollY, [0, 150], ["100%", "94%"]);
  const y = useTransform(scrollY, [0, 150], ["0px", "32px"]);
  const borderRadius = useTransform(scrollY, [0, 150], ["0px", "50px"]);
  const backgroundColor = useTransform(scrollY, [0, 150], ["rgba(15, 47, 99, 0)", "rgba(15, 47, 99, 0.8)"]);
  const backdropFilter = useTransform(scrollY, [0, 150], ["blur(0px)", "blur(12px)"]);
  const border = useTransform(scrollY, [0, 150], ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.1)"]);
  const paddingY = useTransform(scrollY, [0, 150], ["1.5rem", "0.75rem"]);

  return (
    <div className="fixed inset-x-0 top-0 z-[999] flex justify-center pointer-events-none">
    <motion.header 
      style={{ width, y, borderRadius, backgroundColor, backdropFilter, border, paddingTop: paddingY, paddingBottom: paddingY }}
      className="pointer-events-auto flex items-center justify-between gap-4 px-6 text-xs sm:px-10 text-on-brand"
    >
      <nav aria-label="Primary" className="hidden flex-1 gap-8 lg:flex items-center">
        {navLeft.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={anchorScroll(link.href)}
            className="whitespace-nowrap leading-tight opacity-90 outline-none hover:opacity-100 focus-visible:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/"
        aria-label="Vague Bleue home"
        className="flex items-center gap-2 text-base font-medium tracking-[0.2em] uppercase outline-none focus-visible:underline lg:flex-1 lg:justify-center"
      >
        <img src="/assets/vague-bleue-logo-v2.svg" className="h-7 w-auto shrink-0" alt="Vague Bleue logo" />
        <div className="flex flex-col"><span className="leading-none">{brand}</span><span className="text-[10px] tracking-widest opacity-60 leading-none mt-1">TAEKWONDO</span></div>
      </Link>

      <div className="flex flex-1 items-center justify-end gap-4 sm:gap-5">
        <button
          type="button"
          onClick={openContact}
          className="hidden cursor-pointer uppercase tracking-wide underline-offset-4 outline-none hover:underline focus-visible:underline sm:inline"
        >
          {cta}
        </button>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="grid size-10 cursor-pointer place-items-center rounded-pill bg-on-brand/15 outline-none hover:bg-on-brand/25 focus-visible:ring-2 focus-visible:ring-on-brand"
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block h-px w-4 bg-on-brand" />
            <span className="block h-px w-4 bg-on-brand" />
          </span>
        </button>
      </div>

      {mounted &&
        createPortal(
          <MenuOverlay
            open={open}
            brand={brand}
            cta={cta}
            onClose={() => setOpen(false)}
          />,
          document.body,
        )}
    </motion.header>
    </div>
  );
};

const MenuOverlay = ({
  open,
  brand,
  cta,
  onClose,
}: {
  open: boolean;
  brand: string;
  cta: string;
  onClose: () => void;
}) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const openContact = useContactModal((s) => s.open);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[1000] flex flex-col ${open ? "" : "pointer-events-none"}`}
    >
      <Spring
        tag="div"
        enabled={open}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ tension: 260, friction: 30 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <Spring
        tag="div"
        enabled={open}
        from={{ x: "100%" }}
        to={{ x: "0%" }}
        config={{ tension: 220, friction: 28 }}
        className="absolute inset-y-0 right-0 flex w-full md:w-1/2 h-full flex-col p-2 text-on-brand sm:p-3 bg-brand-deep shadow-2xl"
      >
        <div className="flex h-full flex-col px-6 pt-6 pb-6 sm:px-10 sm:pb-8 sm:pt-8">
        <div className="flex items-center justify-end">
          <button
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="grid size-10 cursor-pointer place-items-center rounded-pill bg-on-brand/15 outline-none hover:bg-on-brand/25 focus-visible:ring-2 focus-visible:ring-on-brand"
          >
            <Hover
              tag="span"
              trigger={closeRef}
              from={{ rotate: 0 }}
              to={{ rotate: 90 }}
              config={{ tension: 300, friction: 18 }}
              className="grid place-items-center"
            >
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </Hover>
          </button>
        </div>

        <nav
          aria-label="Menu"
          className="flex flex-1 flex-col justify-center gap-2"
        >
          {MENU_LINKS.map((link, i) => (
            <Spring
              key={link.href}
              tag="div"
              enabled={open}
              from={{ opacity: 0, y: 28 }}
              to={{ opacity: 1, y: 0 }}
              delayIn={120 + i * 70}
              config={{ tension: 200, friction: 26 }}
            >
              <Link
                href={link.href}
                onClick={anchorScroll(link.href, onClose)}
                className="block w-fit text-5xl font-medium tracking-tight outline-none hover:text-brand-light focus-visible:text-brand-light sm:text-7xl"
              >
                {link.label}
              </Link>
            </Spring>
          ))}
        </nav>

        <div className="flex flex-col gap-6 border-t border-on-brand/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <PillButton
            variant="light"
            onClick={() => {
              onClose();
              openContact();
            }}
          >
            {cta}
          </PillButton>
          <nav aria-label="Social" className="flex gap-5 text-sm text-on-brand/70">
            {["Instagram", "X", "YouTube", "LinkedIn"].map((s) => (
              <Link
                key={s}
                href="#"
                className="outline-none hover:text-on-brand focus-visible:text-on-brand"
              >
                {s}
              </Link>
            ))}
          </nav>
        </div>
        </div>
      </Spring>
    </div>
  );
};
