import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  HeartHandshake,
  Sparkles as SparklesIcon,
  Palette,
  PartyPopper,
  Users,
  ShieldCheck,
  Sun,
  BookOpen,
  Heart,
  Home as HomeIcon,
  Smile,
  Trophy,
  MessageCircle,
  Hand,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Butterfly } from "@/components/Butterfly";
import { QuoteMark } from "@/components/Doodles";
import { Music, Brush, Utensils, Users2 } from "lucide-react";
import { pic } from "@/lib/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KRM Special School, Empowering Every Child to Blossom" },
      {
        name: "description",
        content:
          "A nurturing special school in Perambur, Chennai dedicated to care, learning, independence and joyful development for every child.",
      },
      { property: "og:title", content: "KRM Special School" },
      { property: "og:description", content: "Empowering every child to blossom." },
      { property: "og:image", content: pic("banner-1.jpeg") },
    ],
  }),
  component: Home,
});

const programs = [
  { lucide: BookOpen, title: "Special Education", text: "Individualised learning plans built around each child's pace, strengths and goals." },
  { lucide: HeartHandshake, title: "Therapy Support", text: "Occupational, speech, physio, behavioural and sensory therapy under one roof." },
  { lucide: HomeIcon, title: "Life Skills Training", text: "Daily living, self-care and social skills that build real-world independence." },
  { lucide: Palette, title: "Creative Activities", text: "Art, music, dance and drama that bring out confidence, voice and joy." },
  { lucide: PartyPopper, title: "Celebrations & Events", text: "Annual day, festivals and family days, every child celebrated, every milestone honoured." },
  { lucide: Users, title: "Parent Guidance", text: "Workshops, counselling and home programmes so families grow alongside their child." },
];

const whyUs = [
  { icon: Users, title: "Individual Attention", text: "Small groups with a 7:1 student–teacher ratio plus a supporting educator." },
  { icon: HeartHandshake, title: "Caring Teachers", text: "Qualified special educators and therapists, chosen for warmth and patience." },
  { icon: ShieldCheck, title: "Safe & Inclusive", text: "A protected, sensory-friendly environment where every child belongs." },
  { icon: Sun, title: "Holistic Development", text: "Academics, therapy, life skills, creativity and emotional wellbeing, together." },
  { icon: BookOpen, title: "A Trusted Legacy", text: "Part of the KRM Group, decades of compassionate education in north Chennai." },
];

const journey = [
  { n: "01", title: "Care", text: "A warm, safe space where every child is welcomed for who they are.", icon: Heart },
  { n: "02", title: "Learning", text: "Individualised plans nurture curiosity at each child's own pace.", icon: BookOpen },
  { n: "03", title: "Confidence", text: "Creative play, voice and expression build self-belief.", icon: SparklesIcon },
  { n: "04", title: "Independence", text: "Life skills that prepare every child for the world ahead.", icon: Trophy },
];

const joyItems = [
  { icon: Music, title: "Music & Movement", text: "Rhythm, song and gentle movement that calm, connect and bring joy." },
  { icon: Brush, title: "Art & Expression", text: "Colours, textures and stories, every child has a voice worth seeing." },
  { icon: Utensils, title: "Everyday Skills", text: "Eating, dressing, organising, small wins that build big independence." },
  { icon: Users2, title: "Social Growth", text: "Sharing, taking turns, kind words, friendships that bloom gently." },
];

const milestones = [
  { icon: MessageCircle, title: "First Words", text: "The quiet magic of a child finding their voice, every sound, a celebration." },
  { icon: Hand, title: "New Skills", text: "Tying laces, holding a pencil, building a tower, small acts, vast pride." },
  { icon: Smile, title: "Happy Friendships", text: "Shared smiles, kind classmates, and warm circles of belonging." },
  { icon: Trophy, title: "Growing Confidence", text: "Standing tall, trying again, and believing, \u201CI can.\u201D" },
];

const testimonials = [
  { name: "Devkar Nadar", role: "Parent", text: "The best foundation for special children. Management and teachers are kind, polite and their teaching methods are extraordinary." },
  { name: "Iswariya Sivakumar", role: "Parent", text: "My daughter has studied here for two and a half years. The teachers are friendly, comfortable and treat our child with great care." },
  { name: "T. Rithikaa", role: "Parent", text: "In north Chennai, KRM was the best school for my child. Day-to-day independence has grown, the teachers are passionate and pleasing." },
];

const galleryItems = [
  { src: pic("gallery/IMG_2019.jpg"), caption: "Curious minds" },
  { src: pic("intro1.jpg"), caption: "Little artists" },
  { src: pic("gallery/Picture18.jpg"), caption: "Joyful play" },
  { src: pic("gallery/IMG_2035.jpg"), caption: "Festive smiles" },
  { src: pic("gallery/IMG_2041.jpg"), caption: "Together we grow" },
  { src: pic("intro3.jpg"), caption: "Discoveries" },
  { src: pic("gallery/IMG_2085.jpg"), caption: "Proud moments" },
  { src: pic("about/about2.jpg"), caption: "Caring hands" },
];

function Home() {
  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTIdx((s) => (s + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <Layout>
      {/* ------------ HERO ------------ */}
      <section className="relative -mt-[88px] pt-[88px] overflow-hidden navy-gradient text-white">
        {/* Decorative accents, 2 butterflies */}
        <Butterfly size={70} className="absolute top-24 left-10 opacity-30 animate-flutter pointer-events-none" />
        <svg
          viewBox="0 0 600 200"
          className="absolute bottom-10 left-0 w-1/2 opacity-25 pointer-events-none"
          aria-hidden="true"
          fill="none"
        >
          <path
            d="M10 150 C 120 40, 240 40, 320 120 S 520 200, 590 80"
            stroke="var(--gold)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="2 12"
          />
        </svg>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04] mb-6 text-white">
              Empowering Every Child to{" "}
              <span className="gradient-text">Blossom</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-lg mb-10 leading-relaxed">
              A nurturing special school dedicated to care, learning, independence
              and joyful development, where uniqueness is celebrated every single day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-gold btn-shimmer">
                Know More <ArrowRight size={16} />
              </Link>
              <Link to="/donation" className="btn-ghost-light">
                Donate Now
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md border-t border-white/20 pt-8">
              {[
                { n: "250+", l: "Students" },
                { n: "30+", l: "Educators" },
                { n: "12+", l: "Years" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl text-[var(--gold)]">{s.n}</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/70 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right framed image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--gold)]/30 to-white/5 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/15 bg-white/5 p-3 backdrop-blur-sm">
              <img
                src={pic("banner-1.jpeg")}
                alt="Children learning joyfully at KRM Special School"
                className="rounded-[1.5rem] w-full aspect-[7/4] object-cover object-center"
                loading="eager"
              />
            </div>
            <Butterfly size={42} className="absolute -top-4 -right-3 opacity-60 animate-flutter pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ------------ ABOUT ------------ */}
      <section className="py-24 md:py-28 bg-white relative">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={pic("about/about2.jpg")}
              alt="KRM Special School educators and students"
              className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="section-title mb-6">
              A school built on warmth, patience and possibility.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              KRM Special School supports children with Dyslexia, Autism, Intellectual
              Disability, ADHD and developmental delays. Every child is welcomed for
              who they are, then gently guided toward who they can become.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Through compassionate education, therapy, life skills and creativity,
              we help each child grow in confidence, communication and independence -
              all within a calm, safe and joy-filled environment.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Individualised Education Plans",
                "Qualified special educators",
                "In-house therapy team",
                "Family-centred approach",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[var(--gold)] shrink-0" />
                  <p className="text-sm font-medium text-[var(--navy)]">{t}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-navy">
              Read Our Story <ArrowRight size={16} />
            </Link>

            <div className="mt-10 border-l-2 border-[var(--gold)] pl-5">
              <p className="font-display text-lg text-[var(--navy)] italic leading-relaxed">
                &ldquo;To meet every child with patience, see them with kindness, and
                walk beside them, one milestone at a time.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground mt-2">Our Promise</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------ IMPACT / STATS ------------ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pic("gallery/IMG_2041.jpg")}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)]/95 via-[var(--royal)]/92 to-[var(--navy)]/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Our growing circle of care</h2>
          <p className="text-white/75 max-w-2xl mx-auto mb-14">
            Every number represents a child, a family, and a journey nurtured with patience and love.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { n: "30+", l: "Special Educators", Icon: BookOpen, sub: "Trained, patient, deeply caring" },
              { n: "180+", l: "Happy Parents", Icon: HeartHandshake, sub: "Families walking with us" },
              { n: "250+", l: "Students", Icon: Smile, sub: "Growing every single day" },
            ].map(({ n, l, Icon, sub }) => (
              <div
                key={l}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[var(--gold)] to-[#e0a945] flex items-center justify-center text-[var(--navy)] shadow-lg">
                  <Icon size={26} />
                </div>
                <div className="font-display text-5xl md:text-6xl gradient-text mb-2">{n}</div>
                <div className="text-sm font-semibold tracking-widest uppercase text-white">{l}</div>
                <div className="text-xs text-white/60 mt-2">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------ RECENT SPONSORS + BECOME A SPONSOR ------------ */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="section-title">Sponsors who light the way</h2>
            <p className="text-muted-foreground mt-4">
              Kind hearts helping children move forward with confidence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            <div className="soft-card p-8 md:p-10 relative">
              <h3 className="font-display text-2xl md:text-3xl text-[var(--navy)] mb-6">Recent Sponsor</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent mb-6" />

              <div className="rounded-2xl bg-gradient-to-br from-[var(--sky)]/50 to-white border border-[var(--gold)]/25 p-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--royal)] font-semibold mb-2">Sponsor</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[var(--navy)] text-[var(--gold)] flex items-center justify-center font-display text-lg shadow-md">
                        SK
                      </div>
                      <div>
                        <p className="font-display text-lg text-[var(--navy)] leading-tight">Mr. Saikrishnan</p>
                        <p className="text-xs text-muted-foreground">Entrepreneur · Switzerland</p>
                      </div>
                    </div>
                  </div>

                  <div className="sm:border-l sm:border-[var(--gold)]/30 sm:pl-6">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--royal)] font-semibold mb-2">Sponsored Child</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[var(--gold)] text-[var(--navy)] flex items-center justify-center shadow-md">
                        <Smile size={22} />
                      </div>
                      <div>
                        <p className="font-display text-lg text-[var(--navy)] leading-tight">Master Monish Raj A</p>
                        <p className="text-xs text-muted-foreground">7 years old</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <Heart size={14} fill="currentColor" className="text-[var(--gold)]" />
                  <p className="text-xs italic text-[var(--navy)]/80">
                    &ldquo;A small gift, a lifelong difference.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-[2rem] overflow-hidden navy-gradient text-white p-10 md:p-12 flex flex-col justify-center shadow-2xl">
              <div className="relative z-10">
                <h3 className="font-display text-3xl md:text-4xl mb-4 leading-tight">
                  Become a <span className="gradient-text">Sponsor</span> Today
                </h3>
                <p className="text-white/80 leading-relaxed mb-8 max-w-md">
                  Make a difference in a child&rsquo;s life by becoming a sponsor today -
                  and see the joy on their face.
                </p>
                <Link to="/donation" className="btn-gold btn-shimmer w-fit">
                  Know More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------ JOURNEY OF GROWTH ------------ */}
      <section className="py-24 bg-[var(--sky)]/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="section-title">Care · Learning · Confidence · Independence</h2>
            <p className="text-muted-foreground mt-5">
              Every child travels their own path. Ours is a gentle, winding one -
              full of small wonders and steady steps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((j) => {
              const Icon = j.icon;
              return (
                <div key={j.n} className="soft-card p-7 relative">
                  <p className="text-xs tracking-[0.3em] text-[var(--royal)]/70 mb-3">STEP {j.n}</p>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--royal)] text-[var(--gold)] flex items-center justify-center mb-5 shadow-md">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-2xl text-[var(--navy)] mb-2">{j.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{j.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------ PROGRAMS ------------ */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title">Programs designed around every child.</h2>
            <p className="text-muted-foreground mt-5">
              From early intervention to vocational training, every programme is
              built to grow with your child.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => {
              const Icon = p.lucide;
              return (
                <div key={p.title} className="soft-card p-7">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--royal)] text-[var(--gold)] flex items-center justify-center mb-5 shadow-md">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-xl text-[var(--navy)] mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs" className="btn-navy">
              View All Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------ LEARNING THROUGH JOY ------------ */}
      <section className="py-24 bg-[var(--sky)]/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="section-title">Where lessons feel like little adventures.</h2>
            <p className="text-muted-foreground mt-5">
              Music, art, everyday skills and friendships, woven gently into every school day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {joyItems.map((j) => {
              const Icon = j.icon;
              return (
                  <div key={j.title} className="soft-card p-7">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--royal)] text-[var(--gold)] flex items-center justify-center mb-5 shadow-md">
                      <Icon size={24} />
                    </div>
                  <h3 className="font-display text-xl text-[var(--navy)] mb-2">{j.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{j.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------ WHY CHOOSE US ------------ */}
      <section className="py-24 navy-gradient text-white relative overflow-hidden">
        <Butterfly size={64} className="absolute top-10 right-[6%] opacity-20 animate-flutter hidden lg:block" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-4xl md:text-5xl">Why families choose KRM.</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {whyUs.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="glass-card p-6">
                  <Icon className="text-[var(--gold)] mb-4" size={28} />
                  <h3 className="font-display text-lg mb-2">{w.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{w.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------ MILESTONES ------------ */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="section-title">Little steps. Beautiful milestones.</h2>
            <p className="text-muted-foreground mt-5">
              The wins that quietly change everything, celebrated here, treasured forever.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="soft-card p-8 text-center">
                  <div className="relative inline-block mb-5">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--gold)] to-[#e0a945] text-[var(--navy)] flex items-center justify-center shadow-lg">
                      <Icon size={28} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-[var(--navy)] mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------ GALLERY ------------ */}
      <section className="py-24 bg-[var(--sky)]/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title">Moments of joy, growth &amp; confidence</h2>
            <p className="text-muted-foreground mt-5">
              A glimpse into everyday life at KRM Special School.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryItems.map((g, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md bg-white">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={g.src}
                    alt={g.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[var(--navy)]/85 to-transparent">
                    <p className="text-white text-sm font-medium">{g.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/photogallery" className="btn-navy">
              See Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------ TESTIMONIALS ------------ */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Stories from our families.</h2>
          </div>

          <div className="relative bg-gradient-to-br from-[var(--sky)]/40 to-white border border-[var(--gold)]/25 rounded-[2rem] p-10 md:p-14 text-center shadow-lg">
            <QuoteMark size={48} className="absolute -top-4 left-6 opacity-80" />
            <p className="text-xl md:text-2xl font-display text-[var(--navy)] leading-relaxed mb-8 italic">
              &ldquo;{testimonials[tIdx].text}&rdquo;
            </p>
            <p className="font-bold text-[var(--royal)]">- {testimonials[tIdx].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[tIdx].role}</p>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === tIdx ? "bg-[var(--gold)] w-10" : "bg-[var(--navy)]/20 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------ FINAL CTA ------------ */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative navy-gradient rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-center text-white">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-[var(--gold)]/10 blur-3xl pointer-events-none" />
            <Butterfly size={56} className="absolute top-8 right-10 opacity-25 animate-flutter hidden md:block" />

            <h2 className="font-display text-4xl md:text-6xl mb-6 relative z-10">
              Let&rsquo;s help your child <span className="gradient-text">blossom</span>
            </h2>
            <p className="text-white/85 max-w-xl mx-auto mb-10 text-lg relative z-10">
              Visit our school, meet our educators, and see how every child is seen,
              celebrated and gently guided here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <Link to="/contact" className="btn-gold btn-shimmer">
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link to="/admissions" className="btn-ghost-light">
                Admissions Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
