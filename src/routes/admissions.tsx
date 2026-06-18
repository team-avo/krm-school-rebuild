import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Butterfly, ButterflyDivider, Sparkle } from "@/components/Butterfly";
import {
  PaperCloud,
  MiniStar,
  CrayonUnderline,
  PuzzlePiece,
  RainbowArc,
  Handprint,
  WaveDivider,
  TinyHeart,
  Kite,
  Pencil,
} from "@/components/Doodles";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  ClipboardCheck,
  MessageCircle,
  Heart,
  CheckCircle2,
  Sparkles as SparklesIcon,
  ChevronDown,
} from "lucide-react";
import { pic } from "@/lib/photos";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions, KRM Special School Chennai" },
      { name: "description", content: "Begin your child's journey at KRM Special School. A warm, supportive admissions process for special children in Perambur, Chennai." },
      { property: "og:title", content: "Admissions | KRM Special School" },
      { property: "og:description", content: "A gentle, parent-friendly enrolment path." },
      { property: "og:image", content: pic("about/about2.jpg") },
    ],
  }),
  component: AdmissionsPage,
});

const steps = [
  { icon: Phone, title: "Contact the School", text: "Call or write to us, we'll schedule a warm, no-pressure conversation." },
  { icon: Calendar, title: "Visit & Consultation", text: "Tour the campus, meet our educators and therapists, ask anything." },
  { icon: ClipboardCheck, title: "Child Understanding", text: "A gentle session helps us understand your child's strengths and needs." },
  { icon: FileText, title: "Admission Guidance", text: "We co-create an Individualised Education Plan together with you." },
  { icon: Heart, title: "Begin the Journey", text: "We welcome your family into the KRM community, calmly and joyfully." },
];

const documents = [
  "Child's birth certificate",
  "Two recent passport-size photos",
  "Previous school records (if any)",
  "Medical / assessment reports (if available)",
  "Parent / guardian ID proof",
  "Address proof",
];

const faqs = [
  { q: "What age groups do you accept?", a: "We support children from early intervention (around 3 years) through to vocational training in late teens. Every plan is built around the child." },
  { q: "Is there a waiting list?", a: "We try to welcome every child we can. Some classes have limited seats, please get in touch early to discuss availability." },
  { q: "What is the student–teacher ratio?", a: "Our classrooms run at a 7:1 student-to-teacher ratio with a supporting educator, ensuring deep, individual attention." },
  { q: "Do you offer therapy on campus?", a: "Yes. Occupational, speech, physio, behaviour and sensory therapy are all delivered in-house by qualified therapists." },
  { q: "Can parents visit before enrolling?", a: "Absolutely, we encourage it. A school visit is the best way to feel our warmth and meet our team." },
];

function AdmissionsPage() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Layout>
      {/* ---------- HERO ---------- */}
      <section className="relative -mt-[88px] pt-[88px] navy-gradient text-white overflow-hidden">
        <PaperCloud size={110} className="absolute top-28 left-[12%] opacity-30 animate-float" />
        <Butterfly size={64} className="absolute top-32 right-[8%] opacity-70 animate-flutter" />
        <Butterfly size={42} className="absolute bottom-24 left-[10%] opacity-60 animate-float" />
        <Kite size={36} className="absolute top-1/3 right-[12%] opacity-70 animate-bob" />
        <MiniStar size={14} className="absolute top-40 right-1/3 animate-sparkle" />
        <MiniStar size={10} className="absolute bottom-28 left-1/3 animate-sparkle" />

        <div className="container mx-auto px-4 py-24 md:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <Heart size={14} className="text-[var(--gold)]" />
              <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)]">Admissions Open</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-3">
              Begin your child's <span className="gradient-text">journey</span> with us.
            </h1>
            <CrayonUnderline className="w-56 h-3 mb-6 mt-2" />
            <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
              Reaching out is the hardest part, and the most important. We promise a warm, calm conversation, with no pressure and no judgement.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#enquiry" className="btn-gold btn-shimmer">Send Enquiry <ArrowRight size={16} /></a>
              <a href="https://wa.me/919042111150" target="_blank" rel="noopener" className="btn-ghost-light">
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 bg-[var(--gold)]/10 rounded-[3rem] blur-3xl" />
            <div className="relative glass-card p-5 rotate-[2deg]">
              <img src={pic("activities/intro2.jpg")} alt="A welcoming classroom at KRM Special School" className="rounded-2xl w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl px-5 py-3 flex items-center gap-3 rotate-[-3deg]">
                <Butterfly size={28} className="animate-flutter" />
                <div>
                  <p className="font-display text-[var(--navy)] text-lg leading-none">Warm welcome</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Every family. Every time.</p>
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

      {/* ---------- PROCESS TIMELINE ---------- */}
      <section className="py-20 bg-white relative overflow-hidden">
        <Handprint size={60} className="absolute top-10 right-10 opacity-25" />
        <RainbowArc size={360} className="absolute -top-20 left-0 opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">How It Works</p>
            <h2 className="section-title">Five gentle steps to enrolment.</h2>
            <CrayonUnderline className="w-44 h-3 mx-auto mt-4" />
          </div>

          <div className="relative max-w-6xl mx-auto">
            <svg viewBox="0 0 1000 100" className="hidden lg:block absolute top-10 left-0 w-full h-20 opacity-50 pointer-events-none" preserveAspectRatio="none" aria-hidden="true">
              <path d="M50 50 C 250 0, 450 100, 650 40 S 950 60, 980 50" stroke="#F5C76B" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 10" fill="none" />
            </svg>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="soft-card p-6 relative text-center">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--gold)] text-[var(--navy)] font-display flex items-center justify-center shadow-lg">
                      {i + 1}
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--royal)] text-[var(--gold)] flex items-center justify-center mx-auto mt-2 mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-base text-[var(--navy)] mb-2">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ButterflyDivider />

      {/* ---------- DOCUMENTS + WHATSAPP STRIP ---------- */}
      <section className="py-20 bg-[var(--sky)]/40 relative overflow-hidden">
        <Butterfly size={56} className="absolute top-10 right-10 opacity-30 animate-flutter" />
        <Pencil size={48} className="absolute bottom-10 left-8 opacity-50 animate-bob" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 max-w-6xl">
          <div className="bg-white rounded-3xl p-8 soft-card">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Required Documents</p>
            <h3 className="font-display text-2xl text-[var(--navy)] mb-4">A short checklist for enrolment.</h3>
            <ul className="space-y-3">
              {documents.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[var(--royal)] mt-1 shrink-0" size={18} />
                  <span className="text-sm text-[var(--navy)]">{d}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-5 italic">Don't have everything? Don't worry, talk to us first, paperwork can follow.</p>
          </div>

          <div className="rounded-3xl p-8 bg-gradient-to-br from-[var(--navy)] to-[var(--royal)] text-white relative overflow-hidden">
            <Butterfly size={80} className="absolute -top-4 -right-4 opacity-20" />
            <TinyHeart size={22} className="mb-3" />
            <p className="text-[var(--gold)] tracking-[0.3em] text-xs uppercase mb-3">Prefer to Chat?</p>
            <h3 className="font-display text-2xl mb-3">Message us on WhatsApp.</h3>
            <p className="text-white/80 mb-6">Our admissions team usually replies within a working day. No forms, no waiting on hold.</p>
            <div className="space-y-3">
              <a href="https://wa.me/919042111150" target="_blank" rel="noopener" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 transition rounded-2xl px-5 py-3 border border-white/15">
                <MessageCircle className="text-[var(--gold)]" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60">WhatsApp</p>
                  <p className="font-display">9042 111 150</p>
                </div>
              </a>
              <a href="tel:+918939977645" className="flex items-center gap-3 bg-white/10 hover:bg-white/15 transition rounded-2xl px-5 py-3 border border-white/15">
                <Phone className="text-[var(--gold)]" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60">Call</p>
                  <p className="font-display">8939 977 645</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <MiniStar size={12} className="absolute top-20 right-1/4 animate-sparkle" />
        <div className="container mx-auto px-4 max-w-3xl relative">
          <div className="text-center mb-12">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Parents Often Ask</p>
            <h2 className="section-title">Your questions, gently answered.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="soft-card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-display text-lg text-[var(--navy)]">{f.q}</span>
                  <ChevronDown size={20} className={`shrink-0 text-[var(--royal)] transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-[var(--sky)]">
                    <p className="pt-4">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ENQUIRY FORM + CONTACT CARD ---------- */}
      <section id="enquiry" className="py-24 bg-gradient-to-b from-[var(--sky)]/40 via-white to-white relative overflow-hidden">
        <Butterfly size={70} className="absolute top-10 right-10 opacity-25 animate-flutter" />
        <Butterfly size={50} className="absolute bottom-10 left-10 opacity-25 animate-float" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 max-w-6xl">
          <div>
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">We're Listening</p>
            <h2 className="section-title mb-3">Send us an admissions enquiry.</h2>
            <CrayonUnderline className="w-44 h-3 mb-6" />
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Share a few details about your child and we'll reach out within a working day. No obligation, just a friendly conversation.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-4 items-start"><MapPin className="text-[var(--royal)] mt-1 shrink-0" /><span>No 10, Bharathi Road, Perambur, Chennai 600011</span></li>
              <li className="flex gap-4 items-start"><Phone className="text-[var(--royal)] mt-1 shrink-0" /><span>9042 111 150 · 8939 977 645</span></li>
              <li className="flex gap-4 items-start"><Mail className="text-[var(--royal)] mt-1 shrink-0" /><a href="mailto:krm.specialschool@gmail.com" className="hover:text-[var(--royal)]">krm.specialschool@gmail.com</a></li>
            </ul>
            <Link to="/contact" className="btn-navy">Visit Contact Page <ArrowRight size={16} /></Link>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="soft-card p-8 space-y-4 self-start relative"
          >
            <Butterfly size={32} className="absolute -top-4 -right-3 animate-flutter" />
            <h3 className="font-display text-2xl text-[var(--navy)] mb-2">Admissions Enquiry</h3>
            {sent && (
              <div className="bg-green-50 text-green-700 p-3 rounded-xl text-sm flex items-center gap-2">
                <Sparkle className="w-4 h-4" /> Thank you. Our admissions team will be in touch soon.
              </div>
            )}
            <input required placeholder="Parent / Guardian Name" className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--royal)]" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input required type="email" placeholder="Email" className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--royal)]" />
              <input required placeholder="Phone" className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--royal)]" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Child's Name" className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--royal)]" />
              <input placeholder="Child's Age" className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--royal)]" />
            </div>
            <textarea
              placeholder="Tell us a little about your child (optional)"
              rows={4}
              className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--royal)]"
            />
            <button className="btn-gold btn-shimmer w-full justify-center">Send Enquiry</button>
          </form>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="py-24 navy-gradient text-white relative overflow-hidden">
        <Butterfly size={80} className="absolute top-10 left-12 opacity-20 animate-flutter" />
        <Butterfly size={60} className="absolute bottom-10 right-10 opacity-20 animate-float" />
        <MiniStar size={14} className="absolute top-1/3 right-1/4 animate-sparkle" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-[var(--gold)]/10 blur-3xl animate-glow-pulse" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
          <SparklesIcon size={36} className="mx-auto mb-4 text-[var(--gold)]" />
          <h2 className="font-display text-4xl md:text-5xl mb-4">Start your child's journey with us.</h2>
          <p className="text-white/80 mb-8 leading-relaxed">One conversation can change everything. We'll take it gently, together.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#enquiry" className="btn-gold btn-shimmer">Send Enquiry <ArrowRight size={16} /></a>
            <Link to="/contact" className="btn-ghost-light">Visit Us</Link>
          </div>
        </div>
        <WaveDivider className="absolute bottom-0 left-0 w-full" />
      </section>
    </Layout>
  );
}
