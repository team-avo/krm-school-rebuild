import type { CSSProperties } from "react";

type Props = {
  size?: number;
  className?: string;
  style?: CSSProperties;
  color?: string;
  accent?: string;
  strokeColor?: string;
};

export function Butterfly({
  size = 48,
  className = "",
  style,
  color = "#F5C76B",
  accent = "#D8ECFF",
  strokeColor = "#071B3A",
}: Props) {
  return (
    <svg
      viewBox="0 0 120 100"
      width={size}
      height={(size * 100) / 120}
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`bf-${color}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.85" />
        </linearGradient>
      </defs>
      {/* Left wings */}
      <path
        d="M60 50 C 30 10, 5 18, 8 42 C 10 62, 32 64, 60 50 Z"
        fill={`url(#bf-${color})`}
        stroke={strokeColor}
        strokeWidth="1.2"
        opacity="0.95"
      />
      <path
        d="M60 50 C 36 70, 14 76, 14 92 C 32 96, 50 80, 60 60 Z"
        fill={`url(#bf-${color})`}
        stroke={strokeColor}
        strokeWidth="1.2"
        opacity="0.85"
      />
      {/* Right wings */}
      <path
        d="M60 50 C 90 10, 115 18, 112 42 C 110 62, 88 64, 60 50 Z"
        fill={`url(#bf-${color})`}
        stroke={strokeColor}
        strokeWidth="1.2"
        opacity="0.95"
      />
      <path
        d="M60 50 C 84 70, 106 76, 106 92 C 88 96, 70 80, 60 60 Z"
        fill={`url(#bf-${color})`}
        stroke={strokeColor}
        strokeWidth="1.2"
        opacity="0.85"
      />
      {/* Body */}
      <ellipse cx="60" cy="52" rx="2.6" ry="22" fill={strokeColor} />
      {/* Antennae */}
      <path d="M60 32 C 55 22, 50 18, 46 16" stroke={strokeColor} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M60 32 C 65 22, 70 18, 74 16" stroke={strokeColor} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="46" cy="16" r="1.8" fill={color} />
      <circle cx="74" cy="16" r="1.8" fill={color} />
      {/* Wing dots */}
      <circle cx="28" cy="34" r="3" fill={accent} opacity="0.9" />
      <circle cx="92" cy="34" r="3" fill={accent} opacity="0.9" />
      <circle cx="28" cy="80" r="2" fill={accent} opacity="0.8" />
      <circle cx="92" cy="80" r="2" fill={accent} opacity="0.8" />
    </svg>
  );
}

export function ButterflyDivider() {
  return (
    <div className="relative flex items-center justify-center py-10" aria-hidden="true">
      <div className="h-px w-24 md:w-40 bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
      <Butterfly size={36} className="mx-4 animate-flutter" />
      <div className="h-px w-24 md:w-40 bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />
    </div>
  );
}

export function Sparkle({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path
        d="M12 2 L13.5 9 L20 10.5 L13.5 12 L12 19 L10.5 12 L4 10.5 L10.5 9 Z"
        fill="#F5C76B"
        opacity="0.85"
      />
    </svg>
  );
}
