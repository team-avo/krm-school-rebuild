import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Butterfly } from "@/components/Butterfly";
import { Sparkles, Phone } from "lucide-react";
import nios1 from "@/assets/krm/nios/nios.jpg.asset.json";
import nios2 from "@/assets/krm/nios/nios-1.jpg.asset.json";

export const Route = createFileRoute("/nios")({
  head: () => ({
    meta: [
      { title: "NIOS (X & XII), KRM Special School" },
      {
        name: "description",
        content:
          "KRM is an accredited NIOS centre offering flexible, recognized Class X and XII open schooling with vocational and life-enrichment courses.",
      },
    ],
  }),
  component: NiosPage,
});

const TOP = [
  {
    title: "Flexibility & Access",
    desc: "Enables learners to choose subjects, learn at their own pace, and appear for exams when prepared (including on-demand exams), catering to school dropouts, working individuals, and those seeking flexible education.",
  },
  {
    title: "Equivalence",
    desc: "NIOS certificates for Secondary (Class 10) and Senior Secondary (Class 12) are recognized by all major boards, universities, and employers, equivalent to formal school boards like CBSE or CISCE.",
  },
];

const BOTTOM = [
  {
    title: "Open Basic Education (OBE)",
    desc: "Provides education equivalent to elementary school (Levels A, B, and C, corresponding to classes III, V, and VIII) for learners aged 14+ and adults.",
  },
  {
    title: "Vocational & Life Enrichment",
    desc: "Beyond academic subjects, NIOS offers vocational and community-oriented courses to enhance employability.",
  },
  {
    title: "Largest Open Schooling System",
    desc: "Recognized as the world's largest open schooling system, with over 4.13 million learners over the past five years.",
  },
];

function Block({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--gold)]/20 text-[var(--navy)] flex items-center justify-center">
        <Sparkles size={18} />
      </span>
      <div>
        <h3 className="font-display text-xl text-[var(--navy)] mb-1">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function NiosPage() {
  return (
    <Layout>
      <PageHero
        title="NIOS (X & XII)"
        subtitle="An accredited open schooling pathway, flexible, recognized and tailored to each learner's pace."
      />

      {/* Section 1: photo left, text right */}
      <section className="py-20 relative overflow-hidden">
        <Butterfly size={56} className="absolute top-12 right-10 opacity-20 animate-flutter" />
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-[var(--sky)]/50 rounded-3xl -z-10 -rotate-1" />
            <img
              src={nios1.url}
              alt="NIOS classroom session at KRM Special School"
              className="rounded-3xl shadow-2xl w-full object-cover max-h-[500px]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">
              Open Schooling
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--navy)] mb-8">
              NIOS (X & XII)
            </h2>
            <div className="space-y-6">
              {TOP.map((b) => (
                <Block key={b.title} {...b} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: text left, photo right, sky background */}
      <section className="py-20 bg-[var(--sky)]/40 relative overflow-hidden">
        <Butterfly size={44} className="absolute bottom-10 left-10 opacity-25 animate-float" />
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-6">
            {BOTTOM.map((b) => (
              <Block key={b.title} {...b} />
            ))}
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-white/60 rounded-3xl -z-10 rotate-1" />
            <img
              src={nios2.url}
              alt="Students learning at the KRM NIOS centre"
              className="rounded-3xl shadow-2xl w-full object-cover max-h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 navy-gradient text-white text-center relative overflow-hidden">
        <Butterfly size={80} className="absolute top-8 left-12 opacity-20 animate-flutter" />
        <Butterfly size={110} className="absolute -bottom-4 right-8 opacity-15 animate-float" />
        <div className="container mx-auto px-4 max-w-3xl relative">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Explore the NIOS Pathway with KRM
          </h2>
          <p className="text-white/80 mb-8">
            Talk to our team to learn how NIOS can give your child a flexible, recognized route to
            Class X and XII certification.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--navy)] font-bold px-7 py-3 rounded-full hover:shadow-[0_10px_30px_-10px_rgba(245,199,107,0.7)] transition-all"
            >
              <Phone size={16} strokeWidth={2.5} /> Contact Us
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3 rounded-full transition-all"
            >
              All Programs
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
