import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { pic, galleryPhotos } from "@/lib/photos";

function galleryFor(slug: string, count = 6): string[] {
  if (!galleryPhotos.length) return [];
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  const start = hash % galleryPhotos.length;
  const out: string[] = [];
  for (let i = 0; i < Math.min(count, galleryPhotos.length); i++) {
    out.push(galleryPhotos[(start + i) % galleryPhotos.length]);
  }
  return out;
}

const programs: Record<string, { title: string; img: string; body: string[] }> = {
  "early-intervention": {
    title: "Early Intervention",
    img: pic("jj-early-intervention-centre.png"),
    body: [
      "Early Intervention at KRM focuses on children in the foundational years, addressing developmental delays as early as possible.",
      "Our trained educators and therapists work together on motor, language, cognitive and social-emotional milestones, building a strong base for further learning.",
    ],
  },
  "pre-primary": {
    title: "Pre Primary",
    img: pic("krm-child-development-centre.png"),
    body: [
      "The Pre Primary programme introduces structured learning through play, sensory experiences and group activities.",
      "Children develop pre-academic readiness, communication and social skills in a warm, supportive classroom environment.",
    ],
  },
  "i-to-v": {
    title: "Classes I to V",
    img: pic("intro1.jpg"),
    body: [
      "Primary classes follow an Individualized Education Plan combined with adapted curriculum, helping each student build literacy, numeracy and social skills.",
    ],
  },
  "vi-to-xii": {
    title: "Classes VI to XII",
    img: pic("intro2.jpg"),
    body: [
      "Middle and high school students continue academic learning along with life-skills training and vocational exposure to prepare them for adulthood.",
    ],
  },
  "nios": {
    title: "NIOS (X & XII)",
    img: pic("krm-nios-learning-centre.png"),
    body: [
      "KRM is an accredited NIOS centre, enabling students to appear for X and XII board examinations through the National Institute of Open Schooling with curriculum support tailored to their pace.",
    ],
  },
  "functional-academics": {
    title: "Functional Academics",
    img: pic("intro3.jpg"),
    body: [
      "Functional Academics teaches practical reading, writing, money handling, time and daily living skills that students can use directly in real-world situations.",
    ],
  },
  "pre-vocational": {
    title: "Pre Vocational",
    img: pic("2j-vocational.png"),
    body: [
      "The Pre Vocational programme introduces older students to work routines, basic tools and group tasks, preparing them for vocational training.",
    ],
  },
  "vocational": {
    title: "Vocational",
    img: pic("baking.jpg"),
    body: [
      "Vocational training equips students with marketable skills such as baking, paper-craft, packaging and small-scale production, fostering independence and self-worth.",
    ],
  },
  "remedial": {
    title: "Remedial",
    img: pic("counselling.jpg"),
    body: [
      "Our Remedial programme supports children with specific learning difficulties through structured, multisensory teaching that helps close learning gaps.",
    ],
  },
  "physical-training-yoga": {
    title: "Physical Training & Yoga",
    img: pic("yoga.jpg"),
    body: [
      "Daily physical training and yoga sessions improve fitness, body awareness, concentration and emotional regulation across all age groups.",
    ],
  },
};

export const Route = createFileRoute("/programs/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${programs[params.slug]?.title ?? "Programs"}, KRM Special School` }] }),
  component: ProgramPage,
  notFoundComponent: () => <ContentPage title="Program">Program not found.</ContentPage>,
});

function ProgramPage() {
  const { slug } = Route.useParams();
  const p = programs[slug];
  if (!p) return <ContentPage title="Program">Program not found.</ContentPage>;
  return (
    <ContentPage title={p.title} subtitle="Our Programs" image={p.img} gallery={galleryFor(slug)}>
      {p.body.map((t, i) => <p key={i}>{t}</p>)}
    </ContentPage>
  );
}
