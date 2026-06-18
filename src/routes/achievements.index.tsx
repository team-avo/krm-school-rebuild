import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Trophy, ArrowRight } from "lucide-react";

const YEARS = ["2024-25", "2023-24", "2022-23", "2021-22", "2020-21", "2019-20"];

export const Route = createFileRoute("/achievements/")({
  head: () => ({
    meta: [
      { title: "Achievements, KRM Special School" },
      { name: "description", content: "Celebrating the achievements of our students at KRM Special School across the years." },
    ],
  }),
  component: AchievementsIndex,
});

function AchievementsIndex() {
  return (
    <Layout>
      <PageHero
        title="Achievements"
        subtitle="Every milestone is a celebration, explore our students' journey through the years."
      />
      <section className="py-20 bg-[var(--cream)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {YEARS.map((year) => (
              <Link
                key={year}
                to="/achievements/$year"
                params={{ year }}
                className="group relative bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(15,42,80,0.2)] hover:shadow-[0_20px_60px_-15px_rgba(15,42,80,0.35)] transition-all hover:-translate-y-1 border border-[var(--navy)]/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--gold)]/15 flex items-center justify-center text-[var(--gold)]">
                    <Trophy size={26} />
                  </div>
                  <ArrowRight className="text-[var(--navy)]/40 group-hover:text-[var(--gold)] group-hover:translate-x-1 transition-all" size={22} />
                </div>
                <h3 className="font-display text-2xl text-[var(--navy)] mb-1">Academic Year {year}</h3>
                <p className="text-sm text-[var(--navy)]/60">View highlights, photos & milestones</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
