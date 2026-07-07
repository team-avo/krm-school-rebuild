import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { eventsData } from "@/lib/events-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events, KRM Special School" },
      {
        name: "description",
        content:
          "Events and celebrations at KRM Special School — yoga competitions, national youth festivals and moments that make our children shine.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <Layout>
      <PageHero title="Events" subtitle="Moments that matter" />
      <section className="py-16">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {eventsData.map((e) => (
            <article
              key={e.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
            >
              <img
                src={e.image}
                alt={e.title}
                loading="lazy"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-[var(--royal)] font-bold uppercase tracking-widest">
                  {e.date}
                </p>
                <h3 className="text-lg font-bold text-[var(--navy)] mt-2 mb-3 leading-snug">
                  {e.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {e.excerpt}
                </p>
                <Link
                  to="/events/$id"
                  params={{ id: e.id }}
                  className="mt-5 inline-flex items-center gap-2 text-[var(--royal)] font-semibold text-sm uppercase tracking-wider hover:text-[var(--navy)] transition-colors"
                >
                  Read More <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
