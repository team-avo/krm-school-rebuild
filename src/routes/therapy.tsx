import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { pic } from "@/lib/photos";

const therapies = [
  { id: "occupational", title: "Occupational Therapy", img: "occupational_therapy.jpg", text: "Improves fine motor, daily living and sensory-motor skills through purposeful activities." },
  { id: "physio", title: "Physio Therapy", img: "physio_therapy.jpg", text: "Strengthens gross motor function, posture and mobility to help children move with confidence." },
  { id: "speech", title: "Speech Therapy", img: "speech_therapy.jpg", text: "Builds communication, speech production, language comprehension and alternative communication." },
  { id: "behaviour", title: "Behaviour Therapy", img: "behaviour_therapy.jpg", text: "Uses evidence-based techniques to encourage positive behaviour and reduce challenging behaviours." },
  { id: "sensory", title: "Sensory Integration", img: "sensory.jpg", text: "Helps children process and respond to sensory input in a calm, organised way." },
  { id: "counselling", title: "Student Counselling", img: "counselling.jpg", text: "One-on-one counselling that supports emotional well-being and resilience for students and families." },
];

export const Route = createFileRoute("/therapy")({
  head: () => ({ meta: [{ title: "Therapy, KRM Special School" }] }),
  component: () => (
    <Layout>
      <PageHero title="Therapy" subtitle="Holistic support for every child" />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          {therapies.map((t, i) => (
            <div key={t.id} id={t.id} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
              <img src={pic(t.img)} alt={t.title} loading="lazy" className="rounded-2xl shadow-xl w-full h-80 object-cover [direction:ltr]" />
              <div className="[direction:ltr]">
                <h2 className="section-title mb-4">{t.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  ),
});
