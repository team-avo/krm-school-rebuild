import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { pic } from "@/lib/photos";

export const Route = createFileRoute("/events/$id")({
  head: () => ({ meta: [{ title: "Event Detail, KRM Special School" }] }),
  component: () => {
    const { id } = Route.useParams();
    return (
      <ContentPage title={`Event ${id}`} subtitle="Event details" image={pic(`events/event-${id}.jpg`)}>
        <p>A glimpse into one of our school events, a day full of energy, talent and pride. Our students, teachers and parents come together to celebrate every achievement, big and small.</p>
        <p>Photos and a full recap can be viewed in our Photo Gallery.</p>
      </ContentPage>
    );
  },
});
