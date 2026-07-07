import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { pic } from "@/lib/photos";

const therapies = [
  { id: "occupational", title: "Occupational Therapy (OT)", img: "occupational_therapy.jpg", text: "Occupational Therapy (OT) improves student independence and academic performance by developing fine/gross motor skills, sensory processing, and self-care abilities. OTs evaluate students, adapt environments, and implement targeted interventions for conditions like autism and cerebral palsy. Their focus is on fostering the skills needed for classroom participation and daily living." },
  { id: "physio", title: "Physio Therapy", img: "physio_therapy.jpg", text: "Physiotherapy enhances functional mobility, independence, and access to learning for students with disabilities by addressing gross motor skills, postural control, and physical limitations. Therapists collaborate with educators to implement, manage, and monitor individualized, goal-oriented programs, such as equipment support and therapeutic exercises." },
  { id: "speech", title: "Speech Therapy", img: "speech_therapy.jpg", text: "Speech therapy provides specialized, individualized support to help students overcome speech, language, and communication barriers, enabling them to engage academically and socially. Speech-Language Pathologists (SLPs) work with children on articulation, social communication, and language disorders, often using techniques like Augmentative and Alternative Communication (AAC), oral-motor exercises, and play-based therapy." },
  { id: "behaviour", title: "Behaviour Therapy", img: "behaviour_therapy.jpg", text: "Behaviour therapy include Applied Behaviour Analysis (ABA) and Positive Behaviour Support (PBS), uses structured, evidence-based techniques to reinforce positive actions, reduce challenging behaviours, and teach functional, social, and communication skills. It focuses on individualized goals to enhance independence, reduce anxiety, and improve academic and social performance for students with neurodivergent conditions." },
  { id: "sensory", title: "Sensory Integration (SI)", img: "sensory.jpg", text: "Sensory integration (SI) therapy in special education helps students with neurodevelopmental disorders, such as autism and ADHD, process environmental stimuli such as sight, sound, touch, and movement to improve behaviour, focus, and learning. Implemented by occupational therapists, this often play-based approach uses swings, trampolines, and deep-pressure techniques to reduce sensory overload and enhance motor skills." },
  { id: "counselling", title: "Student Counselling", img: "counselling.jpg", text: "Student counselling enhances the social, emotional, and academic well-being of students with disabilities by addressing behavioural issues, reducing stress, and fostering inclusion. Counsellors provide individualized support, develop coping strategies, and collaborate with families and teachers to create a positive learning environment." },
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
