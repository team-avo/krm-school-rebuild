import type { CSSProperties } from "react";

type P = { size?: number; className?: string; style?: CSSProperties; color?: string };

export function Star({ size = 18, className = "", style, color = "#F5C76B" }: P) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} style={style} aria-hidden="true">
      <path d="M12 2 L13.8 9 L21 10.5 L13.8 12 L12 19 L10.2 12 L3 10.5 L10.2 9 Z" fill={color} />
    </svg>
  );
}

export function MiniStar({ size = 10, className = "", style, color = "#F5C76B" }: P) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} style={style} aria-hidden="true">
      <path d="M12 4 L13.6 10.4 L20 12 L13.6 13.6 L12 20 L10.4 13.6 L4 12 L10.4 10.4 Z" fill={color} opacity="0.9" />
    </svg>
  );
}

export function PaperCloud({ size = 90, className = "", style, color = "#FFFFFF" }: P) {
  return (
    <svg viewBox="0 0 120 60" width={size} height={(size * 60) / 120} className={className} style={style} aria-hidden="true">
      <path
        d="M20 45 C8 45 5 30 17 28 C18 18 32 14 38 22 C42 12 60 12 64 22 C74 14 92 20 92 32 C104 33 106 46 95 47 Z"
        fill={color}
        opacity="0.9"
        stroke="#0B2A5B"
        strokeOpacity="0.15"
        strokeWidth="1"
      />
    </svg>
  );
}

export function RainbowArc({ size = 200, className = "", style }: P) {
  return (
    <svg viewBox="0 0 200 100" width={size} height={(size * 100) / 200} className={className} style={style} aria-hidden="true" fill="none">
      <path d="M10 90 A90 90 0 0 1 190 90" stroke="#F5C76B" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 90 A80 80 0 0 1 180 90" stroke="#D8ECFF" strokeOpacity="0.9" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 90 A70 70 0 0 1 170 90" stroke="#F5C76B" strokeOpacity="0.3" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function CrayonUnderline({ className = "", color = "#F5C76B" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 220 14" className={className} aria-hidden="true" fill="none">
      <path
        d="M4 8 C 40 2, 90 12, 130 6 S 200 10, 216 6"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

export function PuzzlePiece({ size = 28, className = "", style, color = "#D8ECFF" }: P) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={className} style={style} aria-hidden="true">
      <path
        d="M6 6 H16 A3 3 0 1 1 22 6 H34 V18 A3 3 0 1 0 34 24 V34 H22 A3 3 0 1 1 16 34 H6 V24 A3 3 0 1 0 6 18 Z"
        fill={color}
        stroke="#0B2A5B"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function OpenBook({ size = 32, className = "", style, color = "#F5C76B" }: P) {
  return (
    <svg viewBox="0 0 48 40" width={size} height={(size * 40) / 48} className={className} style={style} aria-hidden="true" fill="none">
      <path d="M4 8 C 14 6, 22 8, 24 12 C 26 8, 34 6, 44 8 V34 C 34 32, 26 34, 24 38 C 22 34, 14 32, 4 34 Z"
        fill="#fff" stroke="#0B2A5B" strokeWidth="1.4" />
      <path d="M24 12 V38" stroke="#0B2A5B" strokeWidth="1.2" />
      <path d="M9 14 H19 M9 19 H19 M9 24 H17" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M29 14 H39 M29 19 H39 M29 24 H37" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function PaperPlane({ size = 24, className = "", style, color = "#F5C76B" }: P) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} style={style} aria-hidden="true" fill="none">
      <path d="M3 12 L21 3 L14 21 L11 13 Z" fill={color} stroke="#0B2A5B" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M11 13 L21 3" stroke="#0B2A5B" strokeWidth="1.2" />
    </svg>
  );
}

export function Kite({ size = 30, className = "", style, color = "#D8ECFF" }: P) {
  return (
    <svg viewBox="0 0 40 50" width={size} height={(size * 50) / 40} className={className} style={style} aria-hidden="true" fill="none">
      <path d="M20 2 L36 18 L20 34 L4 18 Z" fill={color} stroke="#0B2A5B" strokeWidth="1.2" />
      <path d="M20 2 V34 M4 18 H36" stroke="#0B2A5B" strokeWidth="0.8" />
      <path d="M20 34 Q22 40 18 44 Q22 46 20 50" stroke="#F5C76B" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Handprint({ size = 60, className = "", style, color = "#D8ECFF" }: P) {
  return (
    <svg viewBox="0 0 60 70" width={size} height={(size * 70) / 60} className={className} style={style} aria-hidden="true">
      <path
        d="M14 40 C 12 22, 18 22, 19 32 V18 C 19 12, 26 12, 26 18 V30 C 26 14, 33 14, 33 20 V32 C 33 18, 40 18, 40 26 V36 C 40 28, 47 28, 47 36 V46 C 47 60, 36 66, 28 66 C 18 66, 12 56, 14 40 Z"
        fill={color}
        opacity="0.7"
      />
    </svg>
  );
}

export function NotebookLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 80" className={className} preserveAspectRatio="none" aria-hidden="true" fill="none">
      <line x1="0" y1="20" x2="1440" y2="20" stroke="#D8ECFF" strokeWidth="1.2" strokeDasharray="6 8" />
      <line x1="0" y1="40" x2="1440" y2="40" stroke="#D8ECFF" strokeWidth="1.2" strokeDasharray="6 8" />
      <line x1="0" y1="60" x2="1440" y2="60" stroke="#D8ECFF" strokeWidth="1.2" strokeDasharray="6 8" />
    </svg>
  );
}

export function DottedPath({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 220" className={className} aria-hidden="true" fill="none" preserveAspectRatio="none">
      <path
        d="M40 170 C 200 40, 360 40, 460 140 S 720 240, 840 100 S 1080 40, 1160 160"
        stroke="#F5C76B"
        strokeOpacity="0.7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 14"
      />
    </svg>
  );
}

export function Blob({ className = "", color = "#D8ECFF" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill={color}
        d="M44.8,-66.5C57.4,-58.1,66.4,-44.2,71.7,-29.2C77,-14.3,78.5,1.6,73.6,15.5C68.7,29.4,57.4,41.4,44.5,51.6C31.5,61.8,16.8,70.3,0.8,69.2C-15.2,68.1,-30.4,57.5,-43.7,46.4C-57,35.3,-68.4,23.7,-71.9,9.7C-75.4,-4.3,-71.1,-20.6,-62.2,-33.2C-53.3,-45.8,-39.8,-54.7,-26,-61.7C-12.2,-68.6,1.9,-73.7,16.2,-73.2C30.5,-72.7,45,-66.6,44.8,-66.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function CrescentMoon({ size = 28, className = "", style, color = "#F5C76B" }: P) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={className} style={style} aria-hidden="true">
      <path d="M30 8 A14 14 0 1 0 30 32 A11 11 0 1 1 30 8 Z" fill={color} opacity="0.9" />
    </svg>
  );
}

export function AlphabetBlock({ size = 38, className = "", style, letter = "A", color = "#F5C76B" }: P & { letter?: string }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} style={style} aria-hidden="true">
      <rect x="4" y="4" width="40" height="40" rx="8" fill="#fff" stroke="#0B2A5B" strokeWidth="1.4" />
      <rect x="4" y="4" width="40" height="40" rx="8" fill={color} opacity="0.15" />
      <text x="24" y="32" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="700" fontSize="22" fill="#0B2A5B">{letter}</text>
    </svg>
  );
}

export function Pencil({ size = 36, className = "", style }: P) {
  return (
    <svg viewBox="0 0 64 16" width={size} height={(size * 16) / 64} className={className} style={style} aria-hidden="true">
      <rect x="10" y="3" width="40" height="10" rx="1.5" fill="#F5C76B" stroke="#0B2A5B" strokeWidth="1" />
      <rect x="42" y="3" width="8" height="10" fill="#fff" stroke="#0B2A5B" strokeWidth="1" />
      <path d="M50 3 L60 8 L50 13 Z" fill="#0B2A5B" />
      <rect x="10" y="3" width="6" height="10" fill="#D8ECFF" stroke="#0B2A5B" strokeWidth="1" />
    </svg>
  );
}

export function Crayon({ size = 36, className = "", style, color = "#D8ECFF" }: P) {
  return (
    <svg viewBox="0 0 64 16" width={size} height={(size * 16) / 64} className={className} style={style} aria-hidden="true">
      <rect x="8" y="3" width="48" height="10" rx="2" fill={color} stroke="#0B2A5B" strokeWidth="1" />
      <path d="M8 3 L2 8 L8 13 Z" fill={color} stroke="#0B2A5B" strokeWidth="1" strokeLinejoin="round" />
      <rect x="20" y="3" width="2" height="10" fill="#0B2A5B" opacity="0.25" />
      <rect x="34" y="3" width="2" height="10" fill="#0B2A5B" opacity="0.25" />
    </svg>
  );
}

export function PaintSplash({ size = 80, className = "", style, color = "#F5C76B" }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={style} aria-hidden="true">
      <path d="M50 10 C 70 18, 78 28, 85 45 C 92 60, 80 78, 62 82 C 48 85, 32 90, 22 78 C 12 66, 10 50, 18 38 C 25 24, 35 14, 50 10 Z"
        fill={color} opacity="0.35" />
      <circle cx="86" cy="20" r="3" fill={color} opacity="0.5" />
      <circle cx="14" cy="80" r="2.5" fill={color} opacity="0.5" />
    </svg>
  );
}

export function SmilingSun({ size = 52, className = "", style }: P) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} className={className} style={style} aria-hidden="true">
      <g stroke="#F5C76B" strokeWidth="2" strokeLinecap="round">
        <line x1="30" y1="4" x2="30" y2="12" />
        <line x1="30" y1="48" x2="30" y2="56" />
        <line x1="4" y1="30" x2="12" y2="30" />
        <line x1="48" y1="30" x2="56" y2="30" />
        <line x1="11" y1="11" x2="17" y2="17" />
        <line x1="43" y1="43" x2="49" y2="49" />
        <line x1="49" y1="11" x2="43" y2="17" />
        <line x1="17" y1="43" x2="11" y2="49" />
      </g>
      <circle cx="30" cy="30" r="13" fill="#F5C76B" stroke="#0B2A5B" strokeWidth="1.2" />
      <circle cx="26" cy="28" r="1.4" fill="#0B2A5B" />
      <circle cx="34" cy="28" r="1.4" fill="#0B2A5B" />
      <path d="M25 33 Q30 38 35 33" stroke="#0B2A5B" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function TinyHeart({ size = 16, className = "", style, color = "#F5C76B" }: P) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} style={style} aria-hidden="true">
      <path d="M12 21 C 6 16, 2 12, 2 8 A4 4 0 0 1 12 6 A4 4 0 0 1 22 8 C 22 12, 18 16, 12 21 Z" fill={color} />
    </svg>
  );
}

export function FloralDoodle({ size = 32, className = "", style, color = "#D8ECFF" }: P) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={className} style={style} aria-hidden="true">
      <g fill={color} stroke="#0B2A5B" strokeWidth="0.8" opacity="0.85">
        <circle cx="20" cy="10" r="5" />
        <circle cx="30" cy="20" r="5" />
        <circle cx="20" cy="30" r="5" />
        <circle cx="10" cy="20" r="5" />
      </g>
      <circle cx="20" cy="20" r="3" fill="#F5C76B" />
    </svg>
  );
}

export function QuoteMark({ size = 60, className = "", style, color = "#F5C76B" }: P) {
  return (
    <svg viewBox="0 0 60 50" width={size} height={(size * 50) / 60} className={className} style={style} aria-hidden="true">
      <path d="M5 35 C 5 20, 15 10, 25 8 L 25 16 C 18 18, 14 24, 14 30 L 22 30 L 22 44 L 5 44 Z" fill={color} opacity="0.85" />
      <path d="M33 35 C 33 20, 43 10, 53 8 L 53 16 C 46 18, 42 24, 42 30 L 50 30 L 50 44 L 33 44 Z" fill={color} opacity="0.85" />
    </svg>
  );
}

export function WaveDivider({ className = "", color = "#fff", flip = false }: { className?: string; color?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 90" className={className} preserveAspectRatio="none" aria-hidden="true" style={{ transform: flip ? "scaleY(-1)" : undefined }}>
      <path d="M0,50 C240,90 480,10 720,40 C960,70 1200,20 1440,50 L1440,90 L0,90 Z" fill={color} />
    </svg>
  );
}

export function TornPaperDivider({ className = "", color = "#fff" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 1440 40" className={className} preserveAspectRatio="none" aria-hidden="true">
      <path d="M0,20 L40,12 L90,24 L150,8 L220,22 L300,10 L380,26 L460,12 L540,24 L620,10 L720,22 L820,12 L920,26 L1020,10 L1120,22 L1220,12 L1320,24 L1400,12 L1440,20 L1440,40 L0,40 Z" fill={color} />
    </svg>
  );
}
