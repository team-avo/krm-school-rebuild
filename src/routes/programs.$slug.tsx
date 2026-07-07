import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { pic, galleryPhotos } from "@/lib/photos";
import type { ReactNode } from "react";
import {
  Target,
  FileText,
  BookOpen,
  Users,
  Monitor,
  School,
  HeartHandshake,
  Handshake,
  Layers,
  BookText,
  Smartphone,
  GraduationCap,
  BookMarked,
  Link2,
  Award,
  Clock,
  Coins,
  Home as HomeIcon,
  Users2,
  ClipboardList,
  Accessibility,
  Dumbbell,
  HeartPulse,
  Flower2,
} from "lucide-react";

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

const specialEducationItems = [
  {
    title: "Individualized Instruction",
    text: "Services are tailored to each child's unique needs, ranging from specialized academic instruction to therapies such as speech and occupational therapy.",
    icon: Target,
  },
  {
    title: "IEP (Individualized Education Program)",
    text: "A legally binding document that defines the specific goals, services, and accommodations a student will receive.",
    icon: FileText,
  },
  {
    title: "Modified Curriculum",
    text: "Adjusting materials to match the student's learning level.",
    icon: BookOpen,
  },
  {
    title: "Specialized Staff",
    text: "Trained professionals, including special education teachers, paraprofessionals, and therapists.",
    icon: Users,
  },
  {
    title: "Assistive Technology",
    text: "Tools to aid communication or learning.",
    icon: Monitor,
  },
];

const samacheerItems = [
  {
    title: "Samacheer Kalvi Framework",
    text: "Samacheer Kalvi (Uniform System of School Education) in Tamil Nadu, when combined with Individualized Education Programs (IEPs), refers to the adaptation of the state's standardized curriculum to meet the specific learning needs of children with disabilities (CwSN).",
    icon: School,
  },
  {
    title: "Accessible Curriculum",
    text: "Under this framework, while students follow the same 5, 10, 12th-grade curriculum, the instruction, assessment, and materials are tailored for accessibility.",
    icon: BookOpen,
  },
  {
    title: "Support Services",
    text: "IEPs often include specialized support such as, but not limited to, remedial classes, special education for slow learners, behavioral training, and therapeutic interventions (physiotherapy, occupational therapy, speech therapy).",
    icon: HeartHandshake,
  },
  {
    title: "Implementation",
    text: "IEPs are developed in consultation with parents, teachers, and specialists, focusing on the \"least restrictive environment,\" meaning students are educated alongside their peers whenever possible.",
    icon: Handshake,
  },
];

const viToXiiItems = [
  {
    title: "System",
    text: "Uniform education system implemented under the Act of 2010 to remove inequalities.",
    icon: Layers,
  },
  {
    title: "Textbooks",
    text: "Designed for conceptual clarity with illustrations, updated every three years.",
    icon: BookText,
  },
  {
    title: "Availability",
    text: "Accessible via the TN Textbook Corporation website, Samacheer Kalvi Guide apps on Google Play, and various educational platforms.",
    icon: Smartphone,
  },
  {
    title: "6th–10th",
    text: "Focuses on fundamental concepts in Tamil, English, Math, Science, and Social Science.",
    icon: GraduationCap,
  },
  {
    title: "11th–12th",
    text: "Divided into streams, Science, Commerce, Arts, with specialized, in-depth subject volumes.",
    icon: BookMarked,
  },
  {
    title: "Key Resources",
    text: "The samacheerkalvistudents.in website and various apps provide guides, model questions, and solutions for exam preparation.",
    icon: Link2,
  },
  {
    title: "Usefulness",
    text: "Highly relevant for TNPSC, TRB, and other competitive exams.",
    icon: Award,
  },
];

function SectionCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: React.ElementType;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_-25px_rgba(11,22,53,0.15)] ring-1 ring-[var(--gold)]/20 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
          <Icon size={22} />
        </div>
      </div>
      <h4 className="font-display text-lg text-[var(--navy)] mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

const functionalAcademicsItems = [
  {
    title: "Reading for Real Life",
    text: "Reading signs, labels, words, instructions and simple everyday communication.",
    icon: BookOpen,
  },
  {
    title: "Money & Number Skills",
    text: "Managing money, counting, number recognition and practical math skills.",
    icon: Coins,
  },
  {
    title: "Time Skills",
    text: "Learning to tell time and understand daily schedules.",
    icon: Clock,
  },
  {
    title: "Self-Care & Daily Living",
    text: "Self-care, cooking, routines and independent living skills.",
    icon: HomeIcon,
  },
  {
    title: "Community Readiness",
    text: "Skills that help students function better in daily life, work and the community.",
    icon: Users2,
  },
  {
    title: "IEP-Based Learning",
    text: "Functional academics are planned as part of each student's Individualized Education Program.",
    icon: ClipboardList,
  },
];


const physicalTrainingItems = [
  {
    title: "Inclusion & Equality",
    text: "Ensures children with disabilities have the same opportunities as peers, fostering belonging and recognition of unique strengths.",
    icon: Accessibility,
  },
  {
    title: "Skill Development",
    text: "Improves gross motor skills, coordination, strength, flexibility, balance, and endurance.",
    icon: Dumbbell,
  },
  {
    title: "Health & Well-being",
    text: "Reduces stress, anxiety, controls obesity, boosts self-esteem, and encourages active lifestyles.",
    icon: HeartPulse,
  },
  {
    title: "Social Skills",
    text: "Teaches teamwork, communication, and cooperation in group settings.",
    icon: Users,
  },
];

const programs: Record<string, { title: string; img: string; body?: string[]; customContent?: ReactNode; gallery?: string[] }> = {
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
    customContent: (
      <>
        <p>
          Primary classes at KRM follow an Individualized Education Plan combined with an adapted curriculum, helping each student build literacy, numeracy and social skills.
        </p>

        <div className="not-prose mt-12 mb-8">
          <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-2">Special Education</p>
          <h3 className="font-display text-2xl md:text-3xl text-[var(--navy)] mb-6">CLASS I – V (SPECIAL EDUCATION)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specialEducationItems.map((item) => (
              <SectionCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="not-prose mt-12 mb-8">
          <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-2">Samacheer Kalvi</p>
          <h3 className="font-display text-2xl md:text-3xl text-[var(--navy)] mb-6">CLASS I – V (SAMACHEER)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {samacheerItems.map((item) => (
              <SectionCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </>
    ),
  },
  "vi-to-xii": {
    title: "Classes VI to XII",
    img: pic("intro2.jpg"),
    customContent: (
      <>
        <p>
          Samacheer Kalvi (Tamil Nadu Uniform System of School Education) for classes 6th to 12th provides a standardized, equitable curriculum across Tamil Nadu state board, matriculation, and Anglo-Indian schools. It focuses on comprehensive, updated, and simple-language textbooks, similar to NCERT, that are essential for board exams, TNPSC, and TET, covering subjects like English, Mathematics, Science, and Social Science.
        </p>

        <div className="not-prose mt-12 mb-8">
          <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-2">Samacheer Kalvi</p>
          <h3 className="font-display text-2xl md:text-3xl text-[var(--navy)] mb-6">
            Key Details for 6th to 12th Standard:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {viToXiiItems.map((item) => (
              <SectionCard key={item.title} {...item} />
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-muted-foreground leading-relaxed">
            The curriculum ensures a uniform learning experience for over 1.2 crore students.
          </p>
        </div>
      </>
    ),
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
    gallery: [
      pic("intro3.jpg"),
      pic("intro1.jpg"),
      pic("intro2.jpg"),
      pic("drawing.jpg"),
      pic("keyboard.jpg"),
      pic("counselling.jpg"),
    ].filter(Boolean),
    customContent: (
      <>
        <p>
          Functional academics in special education teaches practical, real-world skills like reading signs, managing money, telling time, self-care and cooking from core subjects such as reading, math and writing.
        </p>
        <p>
          It helps students with disabilities achieve independence in daily life, work and the community, focusing on meaningful application rather than abstract theory.
        </p>
        <p>
          It is a vital part of a student's Individualized Education Program, IEP, preparing them for successful adult living and post-school success.
        </p>

        <div className="not-prose mt-12 mb-8">
          <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-2">Skills We Build</p>
          <h3 className="font-display text-2xl md:text-3xl text-[var(--navy)] mb-6">
            Everyday Learning Areas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {functionalAcademicsItems.map((item) => (
              <SectionCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </>
    ),
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
    title: "Remedial Education",
    img: pic("counselling.jpg"),
    body: [
      "Remedial education at KRM supports students who require additional help in reading, writing, number concepts, attention, comprehension, memory, classroom readiness and functional academics.",
      "Sessions are planned around each child's assessment, learning pace and Individualised Education Plan goals, using structured, multisensory teaching that helps close learning gaps gently and confidently.",
    ],
  },
  "physical-training-yoga": {
    title: "Physical Training & Yoga",
    img: pic("yoga.jpg"),
    gallery: [
      pic("therapy/yoga.jpg"),
      pic("therapy/skating.jpg"),
      pic("therapy/physio_therapy.jpg"),
      pic("therapy/occupational_therapy.jpg"),
      pic("therapy/sensory.jpg"),
      pic("therapy/western.jpg"),
    ].filter(Boolean),
    customContent: (
      <>
        <div className="not-prose mb-12">
          <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-2">Physical Training</p>
          <h3 className="font-display text-2xl md:text-3xl text-[var(--navy)] mb-6">Physical Training</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {physicalTrainingItems.map((item) => (
              <SectionCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="not-prose mb-8">
          <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-2">Yoga</p>
          <h3 className="font-display text-2xl md:text-3xl text-[var(--navy)] mb-6">Yoga</h3>
          <div className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_-25px_rgba(11,22,53,0.15)] ring-1 ring-[var(--gold)]/20 flex gap-5 items-start">
            <div className="p-3 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] shrink-0">
              <Flower2 size={22} />
            </div>
            <div>
              <h4 className="font-display text-lg text-[var(--navy)] mb-2">Yoga Therapy</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yoga therapy in special education provides a holistic therapeutic approach to support children with diverse needs by improving motor skills, enhancing emotional regulation, reducing anxiety, and increasing focus.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                It uses specialized poses, breathing techniques, pranayama, and mindfulness to foster independence, self-awareness, and improved physical strength.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
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
    <ContentPage title={p.title} subtitle="Our Programs" image={p.img} gallery={p.gallery ?? galleryFor(slug)}>
      {p.customContent ?? p.body?.map((t, i) => <p key={i}>{t}</p>)}
    </ContentPage>
  );
}
