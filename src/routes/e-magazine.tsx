import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { FileText, Download } from "lucide-react";

const issues = [
  "January2026", "December2025", "November2025", "October2025",
  "September2025", "August2025", "July2025",
];

export const Route = createFileRoute("/e-magazine")({
  head: () => ({ meta: [{ title: "E-Magazine, KRM Special School" }] }),
  component: () => (
    <Layout>
      <PageHero title="E-Magazine" subtitle="Monthly stories from our school" />
      <section className="py-16">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
          {issues.map((m) => (
            <a key={m} href={`http://krmspecialschool.com/emagazine/Emagazine-${m}.pdf`} target="_blank" rel="noreferrer" className="bg-white border rounded-2xl p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all text-center">
              <FileText size={48} className="mx-auto text-[var(--brand-red)] mb-3" />
              <p className="font-bold text-[var(--brand-blue)] mb-2">{m.replace(/(\d{4})/, " $1")}</p>
              <span className="inline-flex items-center gap-1 text-sm text-[var(--brand-red)]"><Download size={14} /> Download PDF</span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  ),
});
