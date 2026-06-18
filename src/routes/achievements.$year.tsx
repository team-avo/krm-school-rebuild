import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { IMG } from "@/lib/site";

export const Route = createFileRoute("/achievements/$year")({
  head: ({ params }) => ({ meta: [{ title: `Achievements ${params.year}, KRM Special School` }] }),
  component: () => {
    const { year } = Route.useParams();
    const photos = Array.from({ length: 9 }).map((_, i) => `${IMG}/achievements/${i + 1}.jpg`);
    return (
      <Layout>
        <PageHero title={`Achievements ${year}`} subtitle="Celebrating our students" />
        <section className="py-16">
          <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl">
            {photos.map((src) => (
              <div key={src} className="rounded-xl overflow-hidden shadow-lg bg-white">
                <img src={src} alt="Achievement" className="w-full h-64 object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  },
});
