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
            <p className="leading-relaxed opacity-95">"To create an inclusion, empowering, and nurturing learning environment where every child with special needs is valued, supported, and given the opportunity to reach their full potential – academically, socially and emotionally. We envision a school where differences are celebrated, learning is personalized, and every child is prepared to lead a fulfilling, independent, and dignified life."</p>
          </div>
          <div className="bg-[var(--brand-red)] text-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-black mb-4 border-b-2 border-[var(--brand-gold)] pb-3 inline-block">Our Mission</h2>
            <p className="leading-relaxed opacity-95">"Our mission is to provide a safe, inclusive, and stimulating educational environment that meets the diverse needs of children with special needs. We are committed to delivering individualized instruction, therapeutic support, and life skills training that promote academic achievement, independence, social development, and emotional well being. Through collaboration with families, professionals, and the community, we strive to empower every student to thrive and participate fully in society."</p>
          </div>
        </div>
      </section>
    </Layout>
  ),
});
