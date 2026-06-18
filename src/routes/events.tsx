import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { pic } from "@/lib/photos";

const events = [
  { id: "1", title: "Annual Day Celebration", date: "Recent", img: "events/event-1.jpg" },
  { id: "2", title: "Sports Day", date: "Recent", img: "events/event-2.jpg" },
  { id: "3", title: "Cultural Programme", date: "Recent", img: "events/event-3.jpg" },
];

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "Events, KRM Special School" }] }),
  component: () => (
    <Layout>
      <PageHero title="Events" subtitle="Moments that matter" />
      <section className="py-16">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {events.map((e) => (
            <Link key={e.id} to="/events/$id" params={{ id: e.id }} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform">
              <img src={pic(e.img)} alt={e.title} loading="lazy" className="w-full h-56 object-cover" />
              <div className="p-5">
                <p className="text-sm text-[var(--royal)] font-bold uppercase">{e.date}</p>
                <h3 className="text-xl font-bold text-[var(--navy)]">{e.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  ),
});
