import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Butterfly } from "@/components/Butterfly";
import { Sparkles, Phone } from "lucide-react";
import v1 from "@/assets/krm/vocational/vocational-1.jpg.asset.json";
import v2 from "@/assets/krm/vocational/vocational-2.jpg.asset.json";

export const Route = createFileRoute("/vocational")({
  head: () => ({
    meta: [
      { title: "Vocational, KRM Special School" },
      {
        name: "description",
        content:
          "Helping students build practical skills, confidence, independence, and readiness for meaningful work and life at KRM Special School.",
      },
    ],
  }),
  component: VocationalPage,
});

const TOP = [
  {
    title: "Targeted Skills",
    desc: "Programs focus on vocational, functional, and life skills, including cognitive skills (decision-making, planning), communication, social skills, and self-help skills.",
  },
  {
    title: "Assessment & Customization",
    desc: "Training begins with an individual assessment to develop a customized plan, such as an Individualized Educational Program (IEP), often using multi-sensory materials.",
  },
];

const BOTTOM = [
  {
    title: "Transition Focus",
    desc: "Vocational units act as a bridge for students to move into employment, offering training in areas like handicraft, volunteering, or home-based businesses.",
  },
  {
    title: "Support Services",
    desc: "These programs often incorporate occupational therapy and specialized teaching approaches to help individuals manage daily life and workplace challenges.",
  },
  {
    title: "Goal of Empowerment",
    desc: "The ultimate aim is to increase self-worth, provide financial independence, and enable social inclusion for persons with disabilities.",
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

function VocationalPage() {
  return (
    <Layout>
      <PageHero
        title="Vocational"
        subtitle="Helping students build practical skills, confidence, independence, and readiness for meaningful work and life."
      />

      <section className="py-20 relative overflow-hidden">
        <Butterfly size={56} className="absolute top-12 right-10 opacity-20 animate-flutter" />
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--sky)]/50 rounded-3xl -z-10 -rotate-1" />
            <img
              src={v1.url}
              alt="Students engaged in a hands-on vocational activity around a table"
              className="rounded-3xl shadow-2xl w-full object-cover max-h-[500px]"
            />
          </div>
          <div>
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">
              Skills for Independence
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--navy)] mb-8">
              Vocational
            </h2>
            <div className="space-y-6">
              {TOP.map((b) => (
                <Block key={b.title} {...b} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--sky)]/40 relative overflow-hidden">
        <Butterfly size={44} className="absolute bottom-10 left-10 opacity-25 animate-float" />
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-6 order-2 lg:order-1">
            {BOTTOM.map((b) => (
              <Block key={b.title} {...b} />
            ))}
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-white/60 rounded-3xl -z-10 rotate-1" />
            <img
              src={v2.url}
              alt="Student practising weaving and loom-based vocational training"
              className="rounded-3xl shadow-2xl w-full object-cover max-h-[500px]"
            />
          </div>
        </div>
      </section>

      <section className="py-20 navy-gradient text-white text-center relative overflow-hidden">
        <Butterfly size={80} className="absolute top-8 left-12 opacity-20 animate-flutter" />
        <Butterfly size={110} className="absolute -bottom-4 right-8 opacity-15 animate-float" />
        <div className="container mx-auto px-4 max-w-3xl relative">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Building Skills for a Confident Future
          </h2>
          <p className="text-white/80 mb-8">
            Our vocational programme supports students with hands-on training, life skills, and
            guided pathways toward independence.
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
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
