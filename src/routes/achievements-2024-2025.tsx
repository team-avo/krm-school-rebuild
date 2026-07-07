import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/Layout";
import { Expand } from "lucide-react";
import { Lightbox } from "@/components/Lightbox";
import p1 from "@/assets/krm/achievements-2024-25/Picture1.jpg.asset.json";
import p2 from "@/assets/krm/achievements-2024-25/Picture2.jpg.asset.json";
import p3 from "@/assets/krm/achievements-2024-25/Picture3.jpg.asset.json";
import p4 from "@/assets/krm/achievements-2024-25/Picture4.jpg.asset.json";
import p5 from "@/assets/krm/achievements-2024-25/Picture5.jpg.asset.json";
import p6 from "@/assets/krm/achievements-2024-25/Picture6.jpg.asset.json";

export const Route = createFileRoute("/achievements-2024-2025")({
  head: () => ({
    meta: [
      { title: "Achievements 2024-2025, KRM Special School" },
      {
        name: "description",
        content:
          "Celebrating the academic, sports and cultural achievements of KRM Special School students for 2024-2025.",
      },
    ],
  }),
  component: AchievementsYear,
});

type Category = "all" | "academics" | "sports" | "cultural";

type Item = { src: string; alt: string; category: Exclude<Category, "all"> };

const ITEMS: Item[] = [
  { src: p6.url, alt: "Higher Secondary Achievers 2024-2025", category: "academics" },
  { src: p1.url, alt: "Grade X and XI Toppers 2024-2025", category: "academics" },
  { src: p2.url, alt: "Annual Sports Meet", category: "sports" },
  { src: p3.url, alt: "Sports pyramid flag performance", category: "sports" },
  { src: p4.url, alt: "Stage dance performance", category: "cultural" },
  { src: p5.url, alt: "Yoga and acrobatic stage performance", category: "cultural" },
];

const FILTERS: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "academics", label: "Academics" },
  { id: "sports", label: "Sports" },
  { id: "cultural", label: "Cultural" },
];

function AchievementsYear() {
  const [filter, setFilter] = useState<Category>("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const visible = filter === "all" ? ITEMS : ITEMS.filter((i) => i.category === filter);

  return (
    <Layout>
      <PageHero title="Achievements 2024-2025" subtitle="Celebrating our students' academic, sporting and cultural milestones" />

      <section className="py-16 bg-[var(--sky)]/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-[0.2em] transition-all border-2 ${
                    active
                      ? "bg-[var(--navy)] text-white border-[var(--navy)] shadow-lg"
                      : "bg-white text-[var(--navy)] border-[var(--gold)] hover:bg-[var(--gold)]/15"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((item, i) => (
              <button
                key={item.src}
                onClick={() => setLightboxIdx(i)}
                className="group relative rounded-2xl overflow-hidden shadow-lg bg-white ring-1 ring-black/5 hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--navy)]/0 group-hover:bg-[var(--navy)]/40 transition-colors flex items-center justify-center">
                  <Expand className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={visible.map((i) => ({ src: i.src, alt: i.alt, caption: i.alt }))}
        index={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onIndexChange={setLightboxIdx}
      />
    </Layout>
  );
}
