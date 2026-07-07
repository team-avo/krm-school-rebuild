import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Layout, PageHero } from "@/components/Layout";
import { Lightbox } from "@/components/Lightbox";
import { galleryEntries, galleryMetaFor } from "@/lib/photos";

const fallbackCaptions = [
  "Curious minds",
  "Little artists",
  "Joyful play",
  "Festive smiles",
  "Together we grow",
  "Discoveries",
  "Proud moments",
  "Caring hands",
];

export const Route = createFileRoute("/photogallery")({
  head: () => ({ meta: [{ title: "Photo Gallery, KRM Special School" }] }),
  component: PhotoGallery,
});

function PhotoGallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const items = useMemo(
    () =>
      galleryEntries.map((entry, i) => {
        const meta = galleryMetaFor(entry.key);
        const isKnown = meta.alt !== "KRM Special School gallery photo";
        const caption = isKnown ? meta.alt : fallbackCaptions[i % fallbackCaptions.length];
        const alt = isKnown ? meta.alt : `KRM Special School ${fallbackCaptions[i % fallbackCaptions.length].toLowerCase()}`;
        return { src: entry.url, caption, alt };
      }),
    [],
  );
  return (
    <Layout>
      <PageHero title="Photo Gallery" subtitle="Life at KRM" />
      <section className="py-16">
        <div className="container mx-auto px-4 columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl">
          {items.map((it, i) => (
            <button
              type="button"
              key={it.src}
              onClick={() => setIdx(i)}
              className="mb-4 break-inside-avoid rounded-2xl overflow-hidden shadow-lg bg-white relative block w-full text-left group focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
              aria-label={`Open ${it.caption}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className={`w-full ${i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-56" : "h-64"} object-cover transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--navy)]/85 to-transparent text-white px-4 py-3 text-sm font-medium line-clamp-2">
                {it.caption}
              </div>
            </button>
          ))}
        </div>
      </section>
      <Lightbox
        images={items}
        index={idx}
        onClose={() => setIdx(null)}
        onIndexChange={setIdx}
      />
    </Layout>
  );
}
