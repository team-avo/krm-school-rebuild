import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Butterfly } from "./Butterfly";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[88px]">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative navy-gradient text-white overflow-hidden">
      <Butterfly size={90} className="absolute top-10 left-8 opacity-25 animate-flutter" />
      <Butterfly size={130} className="absolute -bottom-6 right-10 opacity-15 animate-float" />
      <div className="container mx-auto px-4 py-24 text-center relative z-10">
        <p className="text-[var(--gold)] tracking-[0.4em] text-xs uppercase mb-4">KRM Special School</p>
        <h1 className="text-4xl md:text-6xl font-display mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
