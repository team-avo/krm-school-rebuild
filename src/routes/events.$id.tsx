import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { getEvent, eventsData } from "@/lib/events-data";

export const Route = createFileRoute("/events/$id")({
  head: ({ params }) => {
    const ev = getEvent(params.id);
    return {
      meta: [
        { title: `${ev?.title ?? "Event"}, KRM Special School` },
        {
          name: "description",
          content: ev?.excerpt ?? "Event at KRM Special School.",
        },
      ],
    };
  },
  notFoundComponent: () => (
    <ContentPage title="Event not found" subtitle="We couldn't find that event">
      <p>
        The event you are looking for is not available. Please return to the{" "}
        <Link to="/events" className="text-[var(--royal)] underline">
          Events page
        </Link>{" "}
        to browse all events.
      </p>
    </ContentPage>
  ),
  errorComponent: () => (
    <ContentPage title="Something went wrong" subtitle="Please try again">
      <p>We couldn't load this event right now.</p>
    </ContentPage>
  ),
  loader: ({ params }) => {
    const ev = getEvent(params.id);
    if (!ev) throw notFound();
    return ev;
  },
  component: EventDetail,
});

function EventDetail() {
  const ev = Route.useLoaderData();
  return (
    <ContentPage title={ev.title} subtitle={ev.date} image={ev.image}>
      {ev.content.map((p: string, i: number) => (
        <p key={i}>{p}</p>
      ))}
      <div className="pt-6">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-[var(--royal)] font-semibold uppercase tracking-wider text-sm hover:text-[var(--navy)]"
        >
          <span aria-hidden>&larr;</span> Back to all events
        </Link>
      </div>
      <div className="pt-10 border-t mt-10">
        <h2 className="font-display text-2xl text-[var(--navy)] mb-6">More events</h2>
        <div className="grid sm:grid-cols-2 gap-6 not-prose">
          {eventsData
            .filter((e) => e.id !== ev.id)
            .map((e) => (
              <Link
                key={e.id}
                to="/events/$id"
                params={{ id: e.id }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex hover:-translate-y-1 transition-transform"
              >
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  className="w-28 h-28 object-cover flex-shrink-0"
                />
                <div className="p-4">
                  <p className="text-[10px] text-[var(--royal)] font-bold uppercase tracking-widest">
                    {e.date}
                  </p>
                  <h3 className="text-sm font-bold text-[var(--navy)] mt-1 leading-snug">
                    {e.title}
                  </h3>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </ContentPage>
  );
}
