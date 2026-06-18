import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Butterfly } from "@/components/Butterfly";
import { Sparkles, Phone } from "lucide-react";
import pv1 from "@/assets/krm/prevocational/prevocational-1.jpg.asset.json";
import pv2 from "@/assets/krm/prevocational/prevocational-2.jpg.asset.json";

export const Route = createFileRoute("/pre-vocational")({
  head: () => ({
    meta: [
      { title: "Pre Vocational, KRM Special School" },
      {
        name: "description",
        content:
          "Building independence, confidence, work habits and practical life skills through guided hands-on learning at KRM Special School.",
      },
    ],
  }),
  component: PreVocationalPage,
});

const TOP = [
  {
    title: "Skill Assessment",
    desc: "Identifying individual strengths, interests, and areas needing improvement to tailor training, often via Individualized Education Plans (IEPs).",
  },
  {
    title: "Work Behaviors & Habits",
    desc: "Developing punctuality, task persistence, following instructions, attention to detail, and proper interaction with coworkers.",
  },
];

const BOTTOM = [
  {
    title: "Functional Life Skills",
    desc: "Teaching essential daily living skills, including personal hygiene, time management, money management, and using public transportation.",
  },
  {
    title: "Hands-on Training",
    desc: "Utilizing work task boxes, simulated work environments, and arts/crafts to build fine motor skills and eye-hand coordination.",
  },
  {
    title: "Social & Communication Skills",
    desc: "Improving teamwork, conflict resolution, and communication abilities necessary for a professional environment.",
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

function PreVocationalPage() {
  return (
    <Layout>
      <PageHero
        title="Pre Vocational"
        subtitle="Building independence, confidence, work habits and practical life skills through guided hands-on learning."
      />

      <section className="py-20 relative overflow-hidden">
        <Butterfly size={56} className="absolute top-12 right-10 opacity-20 animate-flutter" />
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--sky)]/50 rounded-3xl -z-10 -rotate-1" />
            <img
              src={pv1.url}
              alt="Students working on a hands-on pre vocational activity with their teacher"
              className="rounded-3xl shadow-2xl w-full object-cover max-h-[500px]"
            />
          </div>
          <div>
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">
              Skills for Life
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--navy)] mb-8">
              Pre Vocational
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
              src={pv2.url}
              alt="Student practising a hands-on vocational training activity"
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
            Preparing Every Child for Meaningful Independence
          </h2>
          <p className="text-white/80 mb-8">
            Our pre-vocational programme helps students develop practical skills, confidence, and
            daily routines for the future.
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
