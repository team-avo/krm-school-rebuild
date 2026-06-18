import { Layout, PageHero } from "@/components/Layout";
import { Butterfly } from "@/components/Butterfly";
import type { ReactNode } from "react";

export function ContentPage({
  title,
  subtitle,
  image,
  gallery,
  children,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  gallery?: string[];
  children: ReactNode;
}) {
  return (
    <Layout>
      <PageHero title={title} subtitle={subtitle} />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {image && (
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="rounded-2xl shadow-xl w-full mb-10 max-h-[420px] object-cover"
            />
          )}
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </section>

      {gallery && gallery.length > 0 && (
        <section className="py-16 bg-[var(--sky)]/40 relative overflow-hidden">
          <Butterfly size={48} className="absolute top-8 right-10 opacity-30 animate-flutter" />
          <Butterfly size={36} className="absolute bottom-8 left-8 opacity-30 animate-float" />
          <div className="container mx-auto px-4 max-w-6xl relative">
            <div className="text-center mb-10">
              <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-2">
                Moments from {title}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-[var(--navy)]">
                A glimpse into our classrooms.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((src, i) => (
                <div
                  key={src + i}
                  className="relative rounded-2xl overflow-hidden shadow-lg bg-white"
                >
                  <img
                    src={src}
                    alt={`${title} moment ${i + 1}`}
                    loading="lazy"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/40 rounded-2xl pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
