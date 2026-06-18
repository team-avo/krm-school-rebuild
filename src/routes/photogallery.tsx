import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { galleryPhotos } from "@/lib/photos";

const captions = [
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
  component: () => (
    <Layout>
      <PageHero title="Photo Gallery" subtitle="Life at KRM" />
      <section className="py-16">
        <div className="container mx-auto px-4 columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl">
          {galleryPhotos.map((src, i) => (
            <div key={src} className="mb-4 break-inside-avoid rounded-2xl overflow-hidden shadow-lg bg-white relative">
              <img
                src={src}
                alt={captions[i % captions.length]}
                loading="lazy"
                className={`w-full ${i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-56" : "h-64"} object-cover`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--navy)]/85 to-transparent text-white px-4 py-3 text-sm font-medium">
                {captions[i % captions.length]}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  ),
});
