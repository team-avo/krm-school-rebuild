import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Butterfly, ButterflyDivider, Sparkle } from "@/components/Butterfly";
import {
  PaperCloud,
  MiniStar,
  CrayonUnderline,
  PuzzlePiece,
  OpenBook,
  Handprint,
  RainbowArc,
  Blob,
  TinyHeart,
  WaveDivider,
  PaperPlane,
  Kite,
} from "@/components/Doodles";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Sparkles as SparklesIcon,
  HeartHandshake,
  Sun,
  BookOpen,
  Users,
  Smile,
  Trophy,
  Monitor,
  ArrowUpDown,
  Library,
  Accessibility,
  School,
} from "lucide-react";
import { pic } from "@/lib/photos";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KRM Special School, Our Story, Mission & Care" },
      {
        name: "description",
        content:
          "A premium special school in Perambur, Chennai. Discover the KRM story, our mission, values and warm, child-centred care approach.",
      },
      { property: "og:title", content: "About KRM Special School" },
      { property: "og:description", content: "Compassionate, individualised education since 2013." },
      { property: "og:image", content: pic("about/about2.jpg") },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Compassion", text: "Every child is met with patience, kindness and unconditional warmth." },
  { icon: ShieldCheck, title: "Trust", text: "A safe, predictable environment where families and children feel held." },
  { icon: SparklesIcon, title: "Possibility", text: "We see strengths first, then gently grow what each child can become." },
  { icon: Users, title: "Family", text: "Parents are partners. We walk together, every step of the journey." },
];

const timeline = [
  { year: "2013", title: "A school is born", text: "Our school started on 4th October 2013 by founder Mr. R.J. Master with OT, Speech and Remedial teaching with 38 students." },
  { year: "2015", title: "Moved to present school building", text: "Students shifted to Kaligi Ranganathan Montford Special School, the Present School Building, with 77 students." },
  { year: "2017", title: "First public examination batch", text: "The first batch of 10th standard students appeared for the public examination." },
  { year: "Achievements", title: "Awards, medals and participation", text: "Students participated in Marathon, Rubik’s cube, cultural events, sports events and competitions, winning awards, medals and trophies." },
  { year: "2023", title: "NIOS curriculum introduced", text: "NIOS, the National Institute of Open Schooling curriculum, was introduced." },
  { year: "Today", title: "A growing family", text: "250+ children, 30+ educators, a north-Chennai beacon of compassionate education." },
];

const trustPoints = [
  { icon: Users, title: "7:1 student–teacher ratio", text: "Small groups, calm rooms, deep attention." },
  { icon: HeartHandshake, title: "Qualified special educators", text: "Trained, certified and chosen for warmth." },
  { icon: Sun, title: "Sensory-friendly campus", text: "Soft lighting, quiet corners, predictable routines." },
  { icon: BookOpen, title: "Individual Education Plans", text: "Goals shaped around each child's unique pace." },
];

const facilities = [
  { icon: School, title: "Auditorium", text: "A spacious space for assemblies, performances and celebrations." },
  { icon: ArrowUpDown, title: "Elevator", text: "Easy access across floors for every child and caregiver." },
  { icon: Monitor, title: "Computer Lab", text: "Modern systems to support digital learning and skill development." },
  { icon: Library, title: "Library", text: "A quiet, welcoming collection of books and learning resources." },
  { icon: Accessibility, title: "Stair Climbing Electrical Wheel Chair", text: "Accessibility support for safe, comfortable movement." },
];

function AboutPage() {
  return (
    <Layout>
      {/* ---------- HERO ---------- */}
      <section className="relative -mt-[88px] pt-[88px] navy-gradient text-white overflow-hidden">
        <PaperCloud size={110} className="absolute top-28 left-[12%] opacity-30 animate-float" />
        <PaperCloud size={70} className="absolute top-44 right-[20%] opacity-20 animate-bob" />
        <Butterfly size={64} className="absolute top-28 right-[8%] opacity-70 animate-flutter" />
        <Butterfly size={42} className="absolute bottom-24 left-[10%] opacity-60 animate-float" />
        <MiniStar size={14} className="absolute top-40 right-1/3 animate-sparkle" />
        <MiniStar size={10} className="absolute bottom-28 left-1/3 animate-sparkle" style={{ animationDelay: "1.5s" }} />
        <PaperPlane size={26} className="absolute top-1/3 right-[6%] opacity-70 animate-bob" />

        <div className="container mx-auto px-4 py-24 md:py-32 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <Butterfly size={16} />
              <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)]">About KRM</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-3">
              A story written with <span className="gradient-text">love</span>, patience and tiny butterflies.
            </h1>
            <CrayonUnderline className="w-56 h-3 mb-6 mt-2" />
            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
              KRM Special School is a warm, premium learning home in Perambur, Chennai, where every child is welcomed for who they are and gently guided toward who they can become.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-gold btn-shimmer">
                Visit Our School <ArrowRight size={16} />
              </Link>
              <Link to="/programs" className="btn-ghost-light">Explore Programs</Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 bg-[var(--gold)]/10 rounded-[3rem] blur-3xl" />
            <div className="relative glass-card p-5 rotate-[2deg]">
              <img src={pic("about/about2.jpg")} alt="KRM Special School educators and students" className="rounded-2xl w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl px-5 py-3 flex items-center gap-3 rotate-[-3deg]">
                <Butterfly size={28} className="animate-flutter" />
                <div>
                  <p className="font-display text-[var(--navy)] text-lg leading-none">Since 2013</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Independently nurturing</p>
                </div>
              </div>
            </div>
            <Butterfly size={50} className="absolute -top-6 -right-4 animate-flutter" />
            <PuzzlePiece size={36} className="absolute -bottom-2 right-10 animate-bob" />
          </div>
        </div>

        <div className="relative">
          <svg viewBox="0 0 1440 80" className="block w-full h-16 md:h-24" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,40 C320,100 720,0 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ---------- OUR STORY ---------- */}
      <section className="py-20 bg-white relative overflow-hidden">
        <Blob className="absolute -top-10 -left-20 w-80 h-80 opacity-50" />
        <Handprint size={70} className="absolute bottom-12 right-6 opacity-30" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center relative">
          <div>
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Our Story</p>
            <h2 className="section-title mb-3">A legacy of compassionate education.</h2>
            <CrayonUnderline className="w-44 h-3 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our school started on 4th October 2013 by our founder Mr. R.J. Master with OT, Speech and Remedial teaching with 38 students.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              On June 2015 the students were shifted to Kaligi Ranganathan Montford Special School, the Present School Building, with 77 students.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In 2017 our first batch of 10th standard students appeared for the public examination.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our students have participated in various activities like Marathon, Rubik’s cube, Cultural, sport events and competitions, and have won various Awards, Medals and Trophies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In 2023 the NIOS (National Institute of Open Schooling) curriculum was introduced.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, the school supports children with Dyslexia, Autism, mild intellectual disability, ADHD, developmental delays and communication or learning challenges. Each child is trained by qualified Special Educators on a plan shaped just for them.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--sky)] rounded-[2.5rem] rotate-3" />
            <img src={pic("banner-2.jpeg")} alt="KRM Special School campus" className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" />
            <div className="absolute -top-5 -right-4 bg-[var(--gold)] text-[var(--navy)] rounded-full px-5 py-2 font-display shadow-xl">
              A beacon of hope ✦
            </div>
            <PuzzlePiece size={42} className="absolute -bottom-5 -left-5 animate-bob" color="#F5C76B" />
          </div>
        </div>
      </section>

      <ButterflyDivider />

      {/* ---------- TIMELINE ---------- */}
      <section className="py-24 bg-gradient-to-b from-white via-[var(--sky)]/40 to-white relative overflow-hidden">
        <RainbowArc size={420} className="absolute top-4 left-1/2 -translate-x-1/2 opacity-40" />
        <Kite size={36} className="absolute top-16 right-12 opacity-60 animate-float" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Our Journey</p>
            <h2 className="section-title mb-3">A decade of milestones, side by side.</h2>
            <CrayonUnderline className="w-44 h-3 mx-auto" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent" />
            {timeline.map((t, i) => (
              <div key={t.year} className={`relative mb-10 grid md:grid-cols-2 gap-6 md:gap-12 ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                <div className="[direction:ltr] pl-16 md:pl-0">
                  <div className="soft-card p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Butterfly size={20} />
                      <span className="text-[var(--gold)] font-display text-xl">{t.year}</span>
                    </div>
                    <h3 className="font-display text-xl text-[var(--navy)] mb-1">{t.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                  </div>
                </div>
                <span className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[var(--gold)] ring-4 ring-white shadow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MISSION VISION VALUES ---------- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <PaperCloud size={90} className="absolute top-12 left-10 opacity-40 animate-bob" />
        <MiniStar size={12} className="absolute top-20 right-1/4 animate-sparkle" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Our Compass</p>
            <h2 className="section-title">Mission, vision and the values we live by.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[var(--navy)] to-[var(--royal)] text-white overflow-hidden">
              <Butterfly size={80} className="absolute -top-4 -right-4 opacity-20" />
              <p className="text-[var(--gold)] tracking-[0.3em] text-xs uppercase mb-3">Our Mission</p>
              <h3 className="font-display text-2xl mb-3">Nurture every unique mind.</h3>
              <p className="text-white/80 leading-relaxed">
                To deliver compassionate, individualised education that grows communication, life skills and confidence in every child, at their own joyful pace.
              </p>
            </div>
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[var(--sky)] to-white overflow-hidden border border-[var(--gold)]/30">
              <OpenBook size={60} className="absolute -bottom-2 -right-2 opacity-40" />
              <p className="text-[var(--royal)] tracking-[0.3em] text-xs uppercase mb-3">Our Vision</p>
              <h3 className="font-display text-2xl text-[var(--navy)] mb-3">A world that includes every child.</h3>
              <p className="text-muted-foreground leading-relaxed">
                A society where children with special needs grow up seen, supported and celebrated, confident to take their place in the world.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="soft-card p-6 text-center glow-border">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--royal)] text-[var(--gold)] flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-display text-lg text-[var(--navy)] mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- CARE APPROACH ---------- */}
      <section className="py-24 bg-[var(--sky)]/40 relative overflow-hidden">
        <Butterfly size={56} className="absolute top-10 right-10 opacity-30 animate-flutter" />
        <Handprint size={60} className="absolute bottom-10 left-8 opacity-30" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center max-w-6xl">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-white rounded-[2.5rem] -rotate-2" />
            <img src={pic("activities/intro2.jpg")} alt="Children in a sensory-friendly class" className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3]" loading="lazy" />
            <div className="absolute -bottom-5 -right-4 bg-white soft-card px-5 py-3 flex items-center gap-3">
              <TinyHeart size={20} />
              <p className="font-display text-[var(--navy)]">Care first, always</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Our Care Approach</p>
            <h2 className="section-title mb-3">Calm. Consistent. Child-centred.</h2>
            <CrayonUnderline className="w-44 h-3 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our therapists, special educators and caregivers work as one team. We listen first, plan gently, and celebrate every small win, because small wins build big lives.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our educators use visual aids, picture models and structured visual cues to support communication and comprehension for every learner.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Each morning, physical exercises are incorporated into the daily opening session to help children settle in, sharpen focus and gently reduce hyperactivity.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every child is formally assessed three times a year, so their Individualised Education Plan stays responsive to real progress.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Sensory-friendly classrooms",
                "Predictable, calm routines",
                "Therapy woven into the day",
                "Parent partnership at every step",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[var(--gold)]/20 flex items-center justify-center text-[var(--royal)]">
                    <Sparkle className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm font-medium text-[var(--navy)]">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AREAS OF DEVELOPMENT ---------- */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Whole-Child Growth</p>
            <h2 className="section-title mb-3">Areas of Development</h2>
            <CrayonUnderline className="w-44 h-3 mx-auto" />
            <p className="text-muted-foreground leading-relaxed mt-5">
              Every learning plan at KRM nurtures the whole child across six interconnected areas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "Physical Development", d: "Gross motor and fine motor skills built through movement, play and structured exercises." },
              { t: "Language Development", d: "Speech, vocabulary, comprehension and expressive communication supported every day." },
              { t: "Social & Emotional Development", d: "Friendship, sharing, self-regulation and emotional awareness in a calm community." },
              { t: "Intellectual & Cognitive Skills", d: "Attention, memory, reasoning and problem-solving grown at each child's pace." },
              { t: "Daily Living Skills", d: "Self-care, mealtime routines, dressing and personal organisation for real-world independence." },
              { t: "Behavioural & Functional Independence", d: "Structured routines and individualised plans that help every child thrive with confidence." },
            ].map((a) => (
              <div key={a.t} className="soft-card p-6">
                <h4 className="font-display text-lg text-[var(--navy)] mb-2">{a.t}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FACILITIES AVAILABLE ---------- */}
      <section className="py-24 bg-[var(--sky)]/40 relative overflow-hidden">
        <PaperCloud size={90} className="absolute top-12 left-10 opacity-30 animate-bob" />
        <MiniStar size={12} className="absolute top-20 right-1/4 animate-sparkle" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Campus Facilities</p>
            <h2 className="section-title">Facilities Available</h2>
            <CrayonUnderline className="w-44 h-3 mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {facilities.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="soft-card p-6 text-center glow-border">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--royal)] text-[var(--gold)] flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-display text-lg text-[var(--navy)] mb-2">{f.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- WHY PARENTS TRUST KRM ---------- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <RainbowArc size={360} className="absolute -top-20 right-0 opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Why Parents Trust KRM</p>
            <h2 className="section-title">Built around the child. Trusted by families.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {trustPoints.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="soft-card p-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--sky)] text-[var(--royal)] flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-display text-lg text-[var(--navy)] mb-1">{p.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-muted-foreground mt-14 italic text-base">
            A caring school community built on trust, patience, and progress.
          </p>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-24 navy-gradient text-white relative overflow-hidden">
        <Butterfly size={80} className="absolute top-10 left-12 opacity-20 animate-flutter" />
        <Butterfly size={60} className="absolute bottom-10 right-10 opacity-20 animate-float" />
        <MiniStar size={14} className="absolute top-1/3 right-1/4 animate-sparkle" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-[var(--gold)]/10 blur-3xl animate-glow-pulse" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
          <Smile size={36} className="mx-auto mb-4 text-[var(--gold)]" />
          <h2 className="font-display text-4xl md:text-5xl mb-4">Come, visit our school.</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            The best way to know KRM is to walk through our doors. Meet our team, see our classrooms, and feel the warmth for yourself.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="btn-gold btn-shimmer">
              Plan a Visit <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-ghost-light">Contact Us</Link>
          </div>
        </div>
        <WaveDivider className="absolute bottom-0 left-0 w-full" />
      </section>
    </Layout>
  );
}
