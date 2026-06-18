import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { Butterfly, ButterflyDivider } from "@/components/Butterfly";
import {
  PaperCloud,
  MiniStar,
  CrayonUnderline,
  RainbowArc,
  Handprint,
  WaveDivider,
  Kite,
  PaperPlane,
} from "@/components/Doodles";
import { galleryPhotos, eventPhotos, pic } from "@/lib/photos";
import { ArrowRight, X, Camera } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | KRM Special School, Moments of Joy" },
      { name: "description", content: "A memory wall of celebrations, learning, art and friendship from life at KRM Special School in Perambur, Chennai." },
      { property: "og:title", content: "Our Memory Wall | KRM Special School" },
      { property: "og:description", content: "Real photos from our classrooms, festivals and creative days." },
      { property: "og:image", content: pic("banner-1.jpeg") },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const TABS = ["All", "Activities", "Celebrations", "Learning", "Events"] as const;
type Tab = (typeof TABS)[number];

// Caption + category mapping by index, keeps memory-wall feel
const CAPTIONS = [
  { c: "Curious minds", t: "Learning" },
  { c: "Little artists", t: "Activities" },
  { c: "Joyful play", t: "Activities" },
  { c: "Festive smiles", t: "Celebrations" },
  { c: "Together we grow", t: "Learning" },
  { c: "Discoveries", t: "Learning" },
  { c: "Proud moments", t: "Celebrations" },
  { c: "Caring hands", t: "Activities" },
];

function GalleryPage() {
  const [tab, setTab] = useState<Tab>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = useMemo(() => {
    const main = galleryPhotos.map((src, i) => ({
      src,
      caption: CAPTIONS[i % CAPTIONS.length].c,
      tag: CAPTIONS[i % CAPTIONS.length].t as Tab,
    }));
    const events = eventPhotos.map((src, i) => ({
      src,
      caption: `Event highlight ${i + 1}`,
      tag: "Events" as Tab,
    }));
    const all = [...main, ...events];
    return tab === "All" ? all : all.filter((x) => x.tag === tab);
  }, [tab]);

  return (
    <Layout>
      {/* ---------- HERO ---------- */}
      <section className="relative -mt-[88px] pt-[88px] navy-gradient text-white overflow-hidden">
        <PaperCloud size={110} className="absolute top-28 left-[12%] opacity-30 animate-float" />
        <Butterfly size={64} className="absolute top-32 right-[8%] opacity-70 animate-flutter" />
        <Butterfly size={42} className="absolute bottom-24 left-[10%] opacity-60 animate-float" />
        <Kite size={36} className="absolute top-1/3 right-[12%] opacity-70 animate-bob" />
        <PaperPlane size={28} className="absolute bottom-32 right-[18%] opacity-70 animate-bob" />
        <MiniStar size={14} className="absolute top-40 right-1/3 animate-sparkle" />

        <div className="container mx-auto px-4 py-24 md:py-28 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 mb-6">
            <Camera size={14} />
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)]">Memory Wall</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-3 max-w-3xl mx-auto">
            Tiny moments. <span className="gradient-text">Beautiful</span> milestones.
          </h1>
          <CrayonUnderline className="w-56 h-3 mx-auto mb-6 mt-2" />
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            A scrapbook of smiles, learning and celebration from every corner of our school.
          </p>
        </div>
        <div className="relative">
          <svg viewBox="0 0 1440 80" className="block w-full h-16 md:h-24" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,40 C320,100 720,0 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ---------- FILTER TABS ---------- */}
      <section className="py-10 bg-white sticky top-[88px] z-30 border-b border-[var(--sky)]/60 backdrop-blur-md bg-white/85">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                tab === t
                  ? "bg-[var(--navy)] text-white border-[var(--navy)] shadow-md"
                  : "bg-white text-[var(--navy)] border-[var(--sky)] hover:border-[var(--gold)]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* ---------- MEMORY WALL ---------- */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-b from-white via-[var(--sky)]/30 to-white">
        <RainbowArc size={400} className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-30" />
        <Butterfly size={60} className="absolute top-20 right-12 opacity-25 animate-float" />
        <Handprint size={60} className="absolute bottom-10 left-8 opacity-25" />
        <MiniStar size={12} className="absolute top-32 left-20 animate-sparkle" />

        <div className="container mx-auto px-4 columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-6xl">
          {items.map((it, i) => (
            <button
              key={it.src + i}
              onClick={() => setLightbox(it.src)}
              className="mb-5 break-inside-avoid relative bg-white rounded-2xl shadow-[0_18px_40px_-22px_rgba(11,22,53,0.45)] p-2 block w-full text-left transition-transform duration-500 hover:-translate-y-1"
              style={{ transform: `rotate(${(i % 3) - 1}deg)` }}
            >
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[var(--gold)]/50 rounded-sm rotate-[-2deg] shadow" />
              {i % 5 === 2 && <Butterfly size={22} className="absolute -top-3 -right-3 z-10 animate-flutter" />}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  className={`w-full ${i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-56" : "h-64"} object-cover transition-transform duration-700 hover:scale-110`}
                />
              </div>
              <div className="flex items-center justify-between px-2 py-3">
                <p className="text-sm font-medium text-[var(--navy)]">{it.caption}</p>
                <span className="text-[10px] uppercase tracking-widest text-[var(--royal)]/70">{it.tag}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <ButterflyDivider />

      {/* ---------- CTA ---------- */}
      <section className="py-24 navy-gradient text-white relative overflow-hidden">
        <Butterfly size={80} className="absolute top-10 left-12 opacity-20 animate-flutter" />
        <Butterfly size={60} className="absolute bottom-10 right-10 opacity-20 animate-float" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-[var(--gold)]/10 blur-3xl animate-glow-pulse" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl mb-4">See it in person.</h2>
          <p className="text-white/80 mb-8">Photos tell part of the story, come visit and feel the rest.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="btn-gold btn-shimmer">Plan a Visit <ArrowRight size={16} /></Link>
            <Link to="/events" className="btn-ghost-light">Upcoming Events</Link>
          </div>
        </div>
        <WaveDivider className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* ---------- LIGHTBOX ---------- */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-[var(--navy)]/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <img src={lightbox} alt="Gallery view" className="max-w-full max-h-[88vh] rounded-2xl shadow-2xl" />
        </div>
      )}
    </Layout>
  );
}
