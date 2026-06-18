import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({ meta: [{ title: "Vision & Mission, KRM Special School" }] }),
  component: () => (
    <Layout>
      <PageHero title="Vision & Mission" subtitle="What drives us forward" />
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-5xl">
          <div className="bg-[var(--brand-blue)] text-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-black mb-4 border-b-2 border-[var(--brand-gold)] pb-3 inline-block">Our Vision</h2>
            <p className="leading-relaxed opacity-95">To create an inclusive environment where every child with special needs is empowered to discover their potential, grow with dignity, and become an independent and contributing member of society.</p>
          </div>
          <div className="bg-[var(--brand-red)] text-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-black mb-4 border-b-2 border-[var(--brand-gold)] pb-3 inline-block">Our Mission</h2>
            <p className="leading-relaxed opacity-95">To provide individualised education, therapy and life-skill training delivered by trained special educators, in a safe, nurturing and joyful setting that celebrates each child's uniqueness.</p>
          </div>
        </div>
      </section>
    </Layout>
  ),
});
