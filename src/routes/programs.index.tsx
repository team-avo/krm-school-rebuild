import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Butterfly, ButterflyDivider, Sparkle } from "@/components/Butterfly";
import {
  PaperCloud,
  MiniStar,
  CrayonUnderline,
  PuzzlePiece,
  OpenBook,
  Kite,
  RainbowArc,
  Handprint,
  Blob,
  WaveDivider,
  AlphabetBlock,
  PaintSplash,
} from "@/components/Doodles";
import {
  ArrowRight,
  HeartHandshake,
  Home as HomeIcon,
  Palette,
  PartyPopper,
  Users,
  BookOpen,
  Brush,
  Music,
  Utensils,
  Heart,
  Sparkles as SparklesIcon,
  Trophy,
  Activity,
  Dumbbell,
} from "lucide-react";
import { pic, galleryPhotos } from "@/lib/photos";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programs at KRM Special School, Education, Therapy & Life Skills" },
      {
        name: "description",
        content:
          "Special education, therapy, life skills, creative activities and parent guidance, programmes built around every child at KRM Special School.",
      },
      { property: "og:title", content: "Programs | KRM Special School" },
      { property: "og:description", content: "Premium child-centred programmes for every stage." },
      { property: "og:image", content: pic("activities/intro1.jpg") },
    ],
  }),
  component: ProgramsIndex,
});

const programs = [
  {
    slug: "early-intervention",
    icon: BookOpen,
    title: "Special Education",
    text: "Individualised Education Plans shape literacy, numeracy and social skills at each child's own pace.",
    bg: "#FFF4DC",
    bg2: "#D8ECFF",
  },
  {
    slug: "vocational",
    icon: HeartHandshake,
    title: "Therapy Support",
    text: "Occupational, speech, physio, behaviour and sensory therapy woven into the daily routine.",
    bg: "#D8ECFF",
    bg2: "#FFF4DC",
  },
  {
    slug: "functional-academics",
    icon: HomeIcon,
    title: "Life Skills Training",
    text: "Eating, dressing, money handling and travel skills that grow real-world independence. During lunch, our educators provide gentle, patient training to help children master self-feeding — a foundational step toward independence.",
    bg: "#FFEAD8",
    bg2: "#D8ECFF",
  },
  {
    slug: "physical-training-yoga",
    icon: Palette,
    title: "Creative Activities",
    text: "Art, music, drama, dance and yoga, joyful outlets for voice, body and confidence.",
    bg: "#D8ECFF",
    bg2: "#FFF4DC",
  },
  {
    slug: "nios",
    icon: PartyPopper,
    title: "Celebrations & Events",
    text: "Annual day, festivals and family days, every child celebrated, every milestone honoured.",
    bg: "#FFF4DC",
    bg2: "#FFEAD8",
  },
  {
    slug: "pre-primary",
    icon: Users,
    title: "Parent Guidance",
    text: "Parent Teacher Meetings, workshops, counselling and home programmes so families grow alongside their child.",
    bg: "#D8ECFF",
    bg2: "#FFF4DC",
  },
  {
    slug: "remedial",
    icon: Activity,
    title: "Remedial Education",
    text: "Focused support in reading, writing, number concepts, attention, comprehension and memory, planned around each child's assessment and IEP.",
    bg: "#FFEAD8",
    bg2: "#FFF4DC",
  },
  {
    slug: "physical-training-yoga",
    icon: Dumbbell,
    title: "Physical Training & Yoga",
    text: "Physical training, yoga and guided movement build body awareness, balance, coordination, focus, confidence and emotional regulation.",
    bg: "#D8ECFF",
    bg2: "#FFEAD8",
  },
];

const journey = [
  { icon: Heart, title: "Welcome & Assess", text: "A warm intake conversation and a gentle assessment of strengths and needs." },
  { icon: BookOpen, title: "Plan Together", text: "We co-create an Individualised Education Plan with goals just for your child." },
  { icon: SparklesIcon, title: "Learn & Play", text: "Daily learning, therapy and creative activity in calm, sensory-friendly rooms." },
  { icon: Trophy, title: "Celebrate Growth", text: "Every milestone is honoured. Plans evolve as your child grows." },
];

function ProgramsIndex() {
  return (
    <Layout>
      {/* ---------- HERO ---------- */}
      <section className="relative -mt-[88px] pt-[88px] navy-gradient text-white overflow-hidden">
        <PaperCloud size={110} className="absolute top-28 left-[12%] opacity-30 animate-float" />
        <Butterfly size={64} className="absolute top-32 right-[8%] opacity-70 animate-flutter" />
        <Butterfly size={42} className="absolute bottom-24 left-[10%] opacity-60 animate-float" />
        <Kite size={36} className="absolute top-[45%] right-[12%] opacity-70 animate-bob" />
        <MiniStar size={14} className="absolute top-40 right-1/3 animate-sparkle" />
        <MiniStar size={10} className="absolute bottom-28 left-1/3 animate-sparkle" />

        <div className="container mx-auto px-4 py-24 md:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <OpenBook size={18} />
              <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)]">Our Programs</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-3">
              Learning paths shaped around every <span className="gradient-text">child</span>.
            </h1>
            <CrayonUnderline className="w-56 h-3 mb-6 mt-2" />
            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
              From early intervention to vocational training, our programmes blend academics, therapy, creativity and life skills, all delivered with warmth and patience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-gold btn-shimmer">Begin Enrolment <ArrowRight size={16} /></Link>
              <Link to="/therapy" className="btn-ghost-light">Explore Therapy</Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 bg-[var(--gold)]/10 rounded-[3rem] blur-3xl" />
            <div className="relative glass-card p-5 rotate-[-2deg]">
              <img src={pic("activities/intro1.jpg")} alt="Children learning" className="rounded-2xl w-full aspect-[4/5] object-cover" />
            </div>
            <AlphabetBlock size={48} letter="A" className="absolute -top-4 -left-4 animate-bob" />
            <PuzzlePiece size={40} className="absolute -bottom-3 right-8 animate-bob" />
            <Butterfly size={50} className="absolute -top-6 -right-4 animate-flutter" />
          </div>
        </div>
        <div className="relative">
          <svg viewBox="0 0 1440 80" className="block w-full h-16 md:h-24" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,40 C320,100 720,0 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ---------- INTRO ---------- */}
      <section className="py-16 bg-white relative overflow-hidden">
        <Blob className="absolute -top-10 -left-20 w-80 h-80 opacity-50" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative">
          <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Programmes Overview</p>
          <h2 className="section-title mb-4">Six pillars. One promise.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every programme at KRM is delivered by qualified special educators and therapists, with a 7:1 ratio, in calm, sensory-friendly rooms. Together, they form one warm ecosystem of care.
          </p>
        </div>
      </section>

      {/* ---------- TEACHING METHODOLOGY ---------- */}
      <section className="py-16 bg-[var(--sky)]/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">How We Teach</p>
          <h2 className="section-title mb-4">Teaching Methodology</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Our teaching approach includes visual aids, picture models, structured routines, hands-on activities,
            repeated practice, individualised instruction and real-life learning experiences, so every child
            learns in the way that makes most sense to them.
          </p>
        </div>
      </section>

      {/* ---------- REMEDIAL & PHYSICAL ---------- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-6">
          <div className="soft-card p-7">
            <h3 className="font-display text-2xl text-[var(--navy)] mb-2">Remedial Education</h3>
            <p className="text-muted-foreground leading-relaxed">
              Remedial education supports students who require additional help in reading, writing, number
              concepts, attention, comprehension, memory, classroom readiness and functional academics.
              Sessions are planned according to each child's assessment, learning pace and IEP goals.
            </p>
          </div>
          <div className="soft-card p-7">
            <h3 className="font-display text-2xl text-[var(--navy)] mb-2">Physical Training, Yoga &amp; Movement</h3>
            <p className="text-muted-foreground leading-relaxed">
              Physical training, yoga, movement activities and guided exercises support body awareness, balance,
              coordination, flexibility, focus, confidence and emotional regulation.
            </p>
          </div>
        </div>
      </section>


      {/* ---------- PROGRAM CARDS ---------- */}
      <section className="py-16 bg-white relative overflow-hidden">
        <Butterfly size={70} className="absolute top-10 right-10 opacity-25 animate-float" />
        <Butterfly size={50} className="absolute bottom-10 left-10 opacity-25 animate-flutter" />
        <Handprint size={70} className="absolute bottom-20 right-12 opacity-25" />
        <div className="container mx-auto px-4 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.title}
                  to="/programs/$slug"
                  params={{ slug: p.slug }}
                  className="joy-card group block"
                  style={{ ["--joy-bg" as string]: p.bg, ["--joy-bg2" as string]: p.bg2 }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--royal)] text-[var(--gold)] flex items-center justify-center shadow-md">
                      <Icon size={22} />
                    </div>
                    <Butterfly size={28} className="opacity-60 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                  </div>
                  <h3 className="font-display text-xl text-[var(--navy)] mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.text}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--royal)] group-hover:text-[var(--gold)] transition-colors">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ButterflyDivider />

      {/* ---------- HOW WE SUPPORT EVERY CHILD ---------- */}
      <section className="py-24 bg-gradient-to-b from-white via-[var(--sky)]/40 to-white relative overflow-hidden">
        <RainbowArc size={420} className="absolute top-4 left-1/2 -translate-x-1/2 opacity-40" />
        <MiniStar size={12} className="absolute top-20 right-1/4 animate-sparkle" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Your Child's Path</p>
            <h2 className="section-title mb-3">How we support every child.</h2>
            <CrayonUnderline className="w-44 h-3 mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative max-w-6xl mx-auto">
            <svg viewBox="0 0 1000 100" className="hidden lg:block absolute top-8 left-0 w-full h-20 opacity-50 pointer-events-none" preserveAspectRatio="none" aria-hidden="true">
              <path d="M50 50 C 250 0, 450 100, 650 40 S 950 60, 980 50" stroke="#F5C76B" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 10" fill="none" />
            </svg>
            {journey.map((j, i) => {
              const Icon = j.icon;
              return (
                <div key={j.title} className="relative">
                  <div className="soft-card p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--gold)] text-[var(--navy)] flex items-center justify-center font-display text-lg mx-auto mb-4 shadow-md">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <Icon className="mx-auto text-[var(--royal)] mb-3" size={22} />
                    <h3 className="font-display text-lg text-[var(--navy)] mb-2">{j.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{j.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- THERAPY + LIFE SKILLS HIGHLIGHT ---------- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <PaintSplash size={140} className="absolute top-10 right-0 opacity-30" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-6xl">
          {[
            {
              title: "Therapy, woven in",
              text: "Speech, occupational, physio, behaviour and sensory therapies happen alongside academics, not as an add-on.",
              img: pic("therapy/occupational_therapy.jpg"),
              cta: "Explore Therapy",
              to: "/therapy",
            },
            {
              title: "Creative & life skills",
              text: "Baking, gardening, drawing, music and self-care routines build voice, joy and lifelong independence.",
              img: pic("therapy/baking.jpg"),
              cta: "See Activities",
              to: "/eca",
            },
          ].map((b) => (
            <div key={b.title} className="relative rounded-3xl overflow-hidden">
              <img src={b.img} alt={b.title} loading="lazy" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/90 via-[var(--navy)]/50 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
                <Butterfly size={36} className="mb-3 animate-flutter" />
                <h3 className="font-display text-2xl mb-2">{b.title}</h3>
                <p className="text-sm text-white/85 mb-4 max-w-md">{b.text}</p>
                <Link to={b.to} className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold">
                  {b.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CREATIVE ACTIVITIES STRIP ---------- */}
      <section className="py-20 bg-[var(--sky)]/40 relative overflow-hidden">
        <Butterfly size={56} className="absolute top-10 right-10 opacity-30 animate-flutter" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Joyful Add-ons</p>
            <h2 className="section-title">Creative activities children love.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { Icon: Music, label: "Music" },
              { Icon: Brush, label: "Art" },
              { Icon: Utensils, label: "Baking" },
              { Icon: SparklesIcon, label: "Yoga" },
            ].map(({ Icon, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 text-center soft-card">
                <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/20 text-[var(--royal)] flex items-center justify-center mx-auto mb-3">
                  <Icon size={20} />
                </div>
                <p className="font-display text-[var(--navy)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PARENT GUIDANCE ---------- */}
      <section className="py-20 bg-white relative overflow-hidden">
        <Handprint size={60} className="absolute bottom-10 left-8 opacity-30" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center max-w-6xl">
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--sky)] rounded-[2.5rem] -rotate-3" />
            <img src={pic("activities/intro3.jpg")} alt="Parent guidance at KRM" className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" />
          </div>
          <div>
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">For Parents</p>
            <h2 className="section-title mb-3">You're never on this journey alone.</h2>
            <CrayonUnderline className="w-44 h-3 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              We host parent workshops, individual counselling and home-programme sessions to help families understand, support and celebrate their child every day.
            </p>
            <ul className="space-y-3 mb-8">
              {["Parent Teacher Meetings (PTMs)", "Monthly parent workshops", "1-on-1 counselling sessions", "Home programme guides", "WhatsApp updates from teachers"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Sparkle className="w-4 h-4 mt-1 text-[var(--gold)]" />
                  <span className="text-sm text-[var(--navy)] font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-navy">Talk to Us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-24 navy-gradient text-white relative overflow-hidden">
        <Butterfly size={80} className="absolute top-10 left-12 opacity-20 animate-flutter" />
        <Butterfly size={60} className="absolute bottom-10 right-10 opacity-20 animate-float" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-[var(--gold)]/10 blur-3xl animate-glow-pulse" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Find the right programme.</h2>
          <p className="text-white/80 mb-8">Tell us a little about your child, we'll guide you to the right starting point.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="btn-gold btn-shimmer">Start Enrolment <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn-ghost-light">Contact Us</Link>
          </div>
        </div>
        <WaveDivider className="absolute bottom-0 left-0 w-full" />
      </section>
    </Layout>
  );
}
