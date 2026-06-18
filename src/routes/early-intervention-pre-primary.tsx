import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/Layout";
import { Butterfly } from "@/components/Butterfly";
import { Check, Expand, X, Phone } from "lucide-react";
import hero from "@/assets/krm/early-intervention/early-intervention.jpg.asset.json";
import g1 from "@/assets/krm/early-intervention/early-intervention-1.jpg.asset.json";
import g2 from "@/assets/krm/early-intervention/early-intervention-2.jpg.asset.json";
import g3 from "@/assets/krm/early-intervention/early-intervention-3.jpg.asset.json";

export const Route = createFileRoute("/early-intervention-pre-primary")({
  head: () => ({
    meta: [
      { title: "Early Intervention & Pre Primary, KRM Special School" },
      {
        name: "description",
        content:
          "Supporting every child's early growth through care, communication, movement, learning and social development at KRM Special School.",
      },
    ],
  }),
  component: EarlyInterventionPage,
});

const FOCUS = [
  { title: "Cognitive Skills", desc: "Learning, thinking, and problem-solving." },
  { title: "Physical Skills", desc: "Gross and fine motor skills like crawling, walking, or drawing." },
  { title: "Communication Skills", desc: "Talking, listening, and understanding." },
  { title: "Social / Emotional Skills", desc: "Playing and interacting with others." },
  {
    title: "Adaptive / Self-Help Skills",
    desc: "Bowel and bladder control, school readiness, dressing and eating.",
  },
];

const GALLERY = [
  { src: g1.url, alt: "Early intervention learning activity" },
  { src: g2.url, alt: "Pre primary classroom moment" },
  { src: g3.url, alt: "Hands-on sensory learning" },
];

function EarlyInterventionPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Layout>
      <PageHero
        title="Early Intervention & Pre Primary"
        subtitle="Supporting every child's early growth through care, communication, movement, learning and social development."
      />

      {/* Main content */}
      <section className="py-20 relative overflow-hidden">
        <Butterfly size={60} className="absolute top-12 right-10 opacity-20 animate-flutter" />
        <Butterfly size={44} className="absolute bottom-16 left-8 opacity-20 animate-float" />
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Foundational Years</p>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--navy)] mb-6">
              Areas We Focus
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our trained educators and therapists work together on motor, language, cognitive and
              social-emotional milestones, building a strong base for every child's further learning.
            </p>
            <ul className="space-y-4">
              {FOCUS.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-[var(--gold)]/20 text-[var(--navy)] flex items-center justify-center">
                    <Check size={18} strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">{f.title}</h3>
                    <p className="text-muted-foreground text-sm">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--sky)]/50 rounded-3xl -z-10 rotate-1" />
            <img
              src={hero.url}
              alt="Teacher working with a young child at a learning table"
              className="rounded-3xl shadow-2xl w-full object-cover max-h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[var(--sky)]/30 relative overflow-hidden">
        <Butterfly size={48} className="absolute top-10 left-10 opacity-25 animate-float" />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-2">Gallery</p>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--navy)]">Learning Moments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY.map((g) => (
              <button
                key={g.src}
                onClick={() => setLightbox(g)}
                className="group relative rounded-2xl overflow-hidden shadow-lg bg-white ring-1 ring-black/5 hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <img
                  src={g.src}
                  alt={g.alt}
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

      {/* CTA */}
      <section className="py-20 navy-gradient text-white text-center relative overflow-hidden">
        <Butterfly size={80} className="absolute top-8 left-12 opacity-20 animate-flutter" />
        <Butterfly size={110} className="absolute -bottom-4 right-8 opacity-15 animate-float" />
        <div className="container mx-auto px-4 max-w-3xl relative">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Give Your Child the Right Early Start</h2>
          <p className="text-white/80 mb-8">
            Speak with our team to understand how early intervention can support your child's
            development.
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
              Know More
            </Link>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
}
