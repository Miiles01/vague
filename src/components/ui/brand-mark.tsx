import type { CSSProperties } from "react";

export interface BrandMarkProps {
  className?: string;
  style?: CSSProperties;
  title?: string;
}

/**
 * Vague Bleue mark — an abstract blue wave.
 */
export const BrandMark = ({ className, style, title }: BrandMarkProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    role="img"
    aria-label={title}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12c3.33-4 6.67-4 10 0s6.67 4 10 0" />
    <path d="M2 18c3.33-4 6.67-4 10 0s6.67 4 10 0" />
  </svg>
);
