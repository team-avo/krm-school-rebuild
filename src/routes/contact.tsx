import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Butterfly, ButterflyDivider, Sparkle } from "@/components/Butterfly";
import {
  PaperCloud,
  MiniStar,
  CrayonUnderline,
  RainbowArc,
  Handprint,
  WaveDivider,
  NotebookLines,
  Kite,
  TinyHeart,
} from "@/components/Doodles";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Navigation,
} from "lucide-react";
import { pic } from "@/lib/photos";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KRM Special School, Visit Us in Perambur, Chennai" },
      { name: "description", content: "Reach KRM Special School for admissions, visits and queries. Address, phone, email, WhatsApp and school hours in one place." },
      { property: "og:title", content: "Contact | KRM Special School" },
      { property: "og:description", content: "We'd love to hear from you, plan a warm visit." },
      { property: "og:image", content: pic("banner-1.jpeg") },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Phone, label: "Call Us", v1: "9042 111 150", v2: "8939 977 645", href: "tel:+919042111150" },
  { icon: MessageCircle, label: "WhatsApp", v1: "Chat with admissions", v2: "Usually replies within a day", href: "https://wa.me/919042111150" },
  { icon: Mail, label: "Email", v1: "krm.specialschool@gmail.com", v2: "We reply within 24 hours", href: "mailto:krm.specialschool@gmail.com" },
  { icon: MapPin, label: "Visit", v1: "No 10, Bharathi Road, 2nd Street", v2: "Perambur, Chennai 600011", href: "https://www.google.com/maps?q=No+10+Bharathi+Road+2nd+Street+Perambur+Chennai+600011" },
];

// Working hours confirmed by client: Mon–Fri 9:30 AM – 2:30 PM (old-site hours).
const hours = [
  { day: "Monday – Friday", time: "9:30 am – 2:30 pm" },
  { day: "Saturday, Sunday & Holidays", time: "Closed" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      {/* ---------- HERO ---------- */}
      <section className="relative -mt-[88px] pt-[88px] navy-gradient text-white overflow-hidden">
        <PaperCloud size={110} className="absolute top-28 left-[12%] opacity-30 animate-float" />
        <Butterfly size={64} className="absolute top-32 right-[8%] opacity-70 animate-flutter" />
        <Butterfly size={42} className="absolute bottom-24 left-[10%] opacity-60 animate-float" />
        <Kite size={36} className="absolute top-1/3 right-[12%] opacity-70 animate-bob" />
        <MiniStar size={14} className="absolute top-40 right-1/3 animate-sparkle" />

        <div className="container mx-auto px-4 py-24 md:py-28 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 mb-6">
            <MessageCircle size={14} className="text-[var(--gold)]" />
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold)]">Get in Touch</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-3 max-w-3xl mx-auto">
            We'd love to <span className="gradient-text">hear</span> from you.
          </h1>
          <CrayonUnderline className="w-56 h-3 mx-auto mb-6 mt-2" />
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Whether you're enrolling, visiting, or just curious, our team is here with answers, warmth and a friendly cup of tea.
          </p>
        </div>
        <div className="relative">
          <svg viewBox="0 0 1440 80" className="block w-full h-16 md:h-24" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,40 C320,100 720,0 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ---------- CHANNEL CARDS ---------- */}
      <section className="py-16 bg-white relative overflow-hidden">
        <RainbowArc size={360} className="absolute -top-16 right-0 opacity-30" />
        <Handprint size={60} className="absolute bottom-10 left-8 opacity-25" />
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  className="soft-card soft-card-interactive p-6 group block"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--royal)] text-[var(--gold)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-[var(--royal)] mb-1">{c.label}</p>
                  <p className="font-display text-[var(--navy)] leading-tight">{c.v1}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.v2}</p>
                </a>
              );
            })}
          </div>

          {/* social */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Follow us</span>
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Youtube, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} className="w-10 h-10 rounded-full bg-[var(--sky)] text-[var(--royal)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--navy)] transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <ButterflyDivider />

      {/* ---------- MAP + HOURS ---------- */}
      <section className="py-20 bg-[var(--sky)]/40 relative overflow-hidden">
        <Butterfly size={56} className="absolute top-10 right-10 opacity-30 animate-flutter" />
        <NotebookLines className="absolute inset-0 opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 grid lg:grid-cols-[1.4fr_1fr] gap-8 max-w-6xl relative">
          <div className="relative">
            <div className="absolute -inset-3 bg-white rounded-[2.5rem] -rotate-1" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                title="KRM Special School location"
                src="https://www.google.com/maps?q=No+10+Bharathi+Road+2nd+Street+Perambur+Chennai+600011&output=embed"
                className="w-full h-[440px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="absolute -bottom-5 left-6 bg-white soft-card px-5 py-3 flex items-center gap-3">
              <Navigation className="text-[var(--royal)]" size={18} />
              <p className="font-display text-[var(--navy)] text-sm">Perambur, Chennai</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 soft-card relative">
            <Butterfly size={32} className="absolute -top-4 -right-3 animate-flutter" />
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">School Hours</p>
            <h3 className="font-display text-2xl text-[var(--navy)] mb-5 flex items-center gap-3">
              <Clock className="text-[var(--royal)]" size={22} /> When We're Open
            </h3>
            <ul className="space-y-3 mb-6">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-2 border-b border-[var(--sky)] last:border-0">
                  <span className="text-sm font-medium text-[var(--navy)]">{h.day}</span>
                  <span className="text-sm text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-[var(--sky)]/60 p-4 flex items-start gap-3">
              <TinyHeart size={18} />
              <p className="text-xs text-[var(--navy)] leading-relaxed">
                Planning to visit? Call ahead so we can set aside time to show you around without distractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PLAN YOUR VISIT + FORM ---------- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <Butterfly size={70} className="absolute top-10 right-10 opacity-25 animate-float" />
        <Handprint size={70} className="absolute bottom-12 left-6 opacity-30" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 max-w-6xl relative">
          <div>
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-3">Plan Your Visit</p>
            <h2 className="section-title mb-3">Come, walk through our doors.</h2>
            <CrayonUnderline className="w-44 h-3 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              The best way to understand KRM is to feel it. Meet our educators, see our classrooms, watch a therapy session, and hear from other parents.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "A calm walk-through of the campus",
                "A friendly chat with our principal",
                "A peek at classrooms in session",
                "Time to ask every question, no rush",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Sparkle className="w-4 h-4 mt-1 text-[var(--gold)]" />
                  <span className="text-sm text-[var(--navy)] font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl p-5 bg-gradient-to-r from-[var(--sky)]/60 via-white to-[var(--sky)]/60 border border-[var(--gold)]/30">
              <p className="font-display text-lg text-[var(--navy)] italic">
                “Take all the time you need. We've been waiting for your call.”
              </p>
              <p className="text-xs text-muted-foreground mt-2">- The KRM Team</p>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="soft-card p-8 space-y-4 self-start relative"
          >
            <Butterfly size={32} className="absolute -top-4 -right-3 animate-flutter" />
            <h3 className="font-display text-2xl text-[var(--navy)] mb-2">Send a Message</h3>
            {sent && (
              <div className="bg-green-50 text-green-700 p-3 rounded-xl text-sm flex items-center gap-2">
                <Sparkle className="w-4 h-4" /> Thank you. We'll be in touch soon.
              </div>
            )}
            <input required placeholder="Your Name" className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--royal)]" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input required type="email" placeholder="Email" className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--royal)]" />
              <input required placeholder="Phone" className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--royal)]" />
            </div>
            <textarea required placeholder="Your message" rows={5} className="w-full border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--royal)]" />
            <button className="btn-gold btn-shimmer w-full justify-center">Send Message</button>
          </form>
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
          <h2 className="font-display text-4xl md:text-5xl mb-4">Ready to take the first step?</h2>
          <p className="text-white/80 mb-8">Begin a warm conversation with our admissions team today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="btn-gold btn-shimmer">Start Admission <ArrowRight size={16} /></Link>
            <a href="https://wa.me/919042111150" target="_blank" rel="noopener" className="btn-ghost-light">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
        <WaveDivider className="absolute bottom-0 left-0 w-full" />
      </section>
    </Layout>
  );
}
