import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { pic } from "@/lib/photos";

const items = [
  { id: "skating", title: "Skating", img: "skating.jpg", text: "Builds balance, coordination and confidence." },
  { id: "yoga", title: "Yoga", img: "yoga.jpg", text: "Improves focus, flexibility and emotional regulation." },
  { id: "western", title: "Western Dance", img: "western.jpg", text: "Encourages rhythm, expression and group bonding." },
  { id: "keyboard", title: "Keyboard", img: "keyboard.jpg", text: "Develops musical skills, memory and finger dexterity." },
  { id: "baking", title: "Baking", img: "baking.jpg", text: "Vocational baking sessions teach measurement, sequencing and teamwork." },
  { id: "blessed-angels", title: "Blessed Angels", img: "blessed.jpg", text: "Our in-house performing group celebrating talent and joy." },
  { id: "virtual-reality", title: "Virtual Reality", img: "virtual.jpg", text: "Immersive VR experiences that make learning engaging and accessible." },
  { id: "drawing", title: "Drawing", img: "drawing.jpg", text: "Artistic expression that builds creativity and fine motor control." },
];

export const Route = createFileRoute("/eca")({
  head: () => ({ meta: [{ title: "Extracurricular Activities, KRM Special School" }] }),
  component: () => (
    <Layout>
      <PageHero title="Extracurricular Activities" subtitle="Beyond the classroom" />
      <section className="py-16">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {items.map((it) => (
            <div key={it.id} id={it.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={pic(it.img)} alt={it.title} loading="lazy" className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[var(--brand-blue)] mb-2">{it.title}</h3>
                <p className="text-muted-foreground text-sm">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  ),
});
