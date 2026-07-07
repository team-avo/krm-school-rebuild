import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { pic } from "@/lib/photos";

const items = [
  { id: "skating", title: "Skating", img: "skating.jpg", text: "Skating (roller) is a highly effective, adaptable, and inclusive therapeutic activity in special education that improves motor skills, balance, and coordination. It acts as a powerful sensory integration tool for students with autism, ADHD, and physical disabilities, enhancing confidence and emotional regulation while offering a motivating, non-competitive exercise alternative." },
  { id: "yoga", title: "Yoga", img: "yoga.jpg", text: "Yoga therapy in special education provides a holistic, therapeutic approach to support children with diverse needs by improving motor skills, enhancing emotional regulation, reducing anxiety, and increasing focus. It uses specialized poses, breathing techniques (pranayama), and mindfulness to foster independence, self-awareness, and improved physical strength." },
  { id: "western-dance", title: "Western Dance", img: "western.jpg", text: "Dance/movement therapy (DMT) is a psychotherapeutic approach that uses movement to integrate emotional, cognitive, physical, and social aspects of self. Key uses include reducing stress, anxiety, and depression; treating trauma; improving body image, self-esteem, and communication; supporting dementia, autism, and Parkinson's care; and increasing physical mobility and coordination." },
  { id: "keyboard", title: "Keyboard Class", img: "keyboard.jpg", text: "A keyboard musical instrument class teaches foundational skills for playing electronic keyboards or pianos, covering posture, finger technique, note recognition, and music theory. It emphasizes learning to read sheet music, understanding rhythms, and practicing with both hands to build coordination, which can also enhance cognitive skills." },
  { id: "baking", title: "Baking Classes", img: "baking.jpg", text: "Baking classes offer structured, hands-on training to master techniques like dough management, decorating, and ingredient pairing, reducing common kitchen failures. They enhance creativity, reduce stress through therapeutic, engaging activity, and provide a pathway for career advancement or starting a business." },
  { id: "blessed-angels", title: "Blessed Angels", img: "blessed.jpg", text: "A keyboard musical instrument class teaches foundational skills for playing electronic keyboards or pianos, covering posture, finger technique, note recognition, and music theory. It emphasizes learning to read sheet music, understanding rhythms, and practicing with both hands to build coordination, which can also enhance cognitive skills." },
  { id: "virtual-reality", title: "Virtual Reality (VR)", img: "virtual.jpg", text: "Virtual reality (VR) in education transforms learning by providing immersive, 360-degree, and 3D experiences that boost student engagement, memory retention, and understanding of complex concepts. It enables virtual field trips to inaccessible locations, safe, hands-on simulations for training and caters to diverse learning needs." },
  { id: "drawing", title: "Drawing Classes", img: "drawing.jpg", text: "Drawing classes are vital, tailored programs that provide non-verbal communication, boost fine motor skills, and foster emotional regulation. They improve hand-eye coordination, increase attention spans, and enhance self-esteem through creative expression. These sessions serve as a safe, therapeutic outlet for students with Autism, ADHD, or emotional disturbances." },
];

export const Route = createFileRoute("/eca")({
  head: () => ({ meta: [{ title: "Extracurricular Activities, KRM Special School" }] }),
  component: () => (
    <Layout>
      <PageHero title="Extracurricular Activities" subtitle="Beyond the classroom" />

      {/* Daily Routine & Wellbeing */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-6">
          <div className="soft-card p-6">
            <h3 className="font-display text-xl text-[var(--navy)] mb-2">Morning Routine</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Morning sessions include prayer, movement, physical exercises and activities that help students
              begin the day with focus and confidence.
            </p>
          </div>
          <div className="soft-card p-6">
            <h3 className="font-display text-xl text-[var(--navy)] mb-2">Memory, Attention & Expression</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Yoga, art, craft, music, movement and structured play are used to support memory, attention,
              concentration, sensory regulation and self-expression.
            </p>
          </div>
          <div className="soft-card p-6">
            <h3 className="font-display text-xl text-[var(--navy)] mb-2">Field Trips & Community Activities</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Field trips and community-based activities help students build social interaction, communication,
              confidence and real-world awareness.
            </p>
          </div>
          <div className="soft-card p-6">
            <h3 className="font-display text-xl text-[var(--navy)] mb-2">Mealtime &amp; Lunch Skills</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The school encourages healthy eating habits and supports students during lunch time to develop
              self-feeding, table manners, independence and social mealtime routines.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-5xl mt-6">
          <div className="soft-card p-6 bg-[var(--sky)]/40">
            <h3 className="font-display text-xl text-[var(--navy)] mb-2">In Partnership with KRM Kshetra</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In partnership with KRM Kshetra, students enjoy musical instrument, dance and music sessions
              twice a week, delivered by trained instructors in a joyful, encouraging setting.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 pb-16">
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
