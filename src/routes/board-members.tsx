import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import janardhananAsset from "@/assets/krm/board/Janardhanan.jpg.asset.json";
import jeyalakshmiAsset from "@/assets/krm/board/jeyalakshmi.jpg.asset.json";
import kothaiAsset from "@/assets/krm/board/kothaipraveen.jpg.asset.json";

type Member = {
  name: string;
  role: string;
  img: string;
  bio: string[];
};

const members: Member[] = [
  {
    name: "Mr. R. Janardhanan",
    role: "Chairman",
    img: janardhananAsset.url,
    bio: [
      "Mr. R. Janardhanan, Chairman, fondly called as RJ Master, is an eminent Mathematics Teacher for over 55 years. His tenure as Principal in Kaligi Ranganathan Montford School laid the foundation for the growth of Kaligi Group of Schools, guiding its students and teachers not only in academics but also for discipline, character building and holistic development.",
      "He is strong advocate for hard work and smart work and a believer that anything can be achieved through will-power and passion for your studies and work. He is very well loved by the school alumni who to this day always come to visit him and continue to respect him for the work he is doing for the current generation.",
      "Shri. R. Janardhanan is also a recipient of the honorable DRONACHARYA AWARD.",
    ],
  },
  {
    name: "SMT. J. Jayalakshmi",
    role: "Correspondent",
    img: jeyalakshmiAsset.url,
    bio: [
      "CORRESPONDENT SMT. J. Jayalakshmi has been the founding pillar of our Kaligi Group of Schools. From the very beginning she has been responsible for the financials and resource management of the school especially during a time when no such system was in place.",
      "As a cornerstone in developing the vision of the school she made sure that all who are part of the Kaligi family understood the core values. She has been a backbone of the school and a major force for the continued growth of Kaligi Group of Schools till this day.",
      "Her sharp mind and quick thinking has helped the school reach great heights and will help our schools to achieve more in the future.",
    ],
  },
  {
    name: "Mrs. R. J. Kothai Praveen",
    role: "Correspondent",
    img: kothaiAsset.url,
    bio: [
      "Mrs. R. J. Kothai Praveen, daughter of the Founder Chairman, with an M.Sc. in Mathematics, Certificate in Special Education and Early Childhood [USA] is the Correspondent of KRM Special School.",
      "As a member of our schools Executive Council, she provides valuable input and advice for the development of the school and the learning of our students. She is very passionate about developments in special education, constantly developing and evolving the teaching curriculum of KRM Special School and hereby advancing the school's mission and improving and bringing a positive change in the children lives.",
      "Mrs. Kothai also has a Certificate in Interior and Fashion Designing and is also has a certificate in Pranic Healing. She uses her creative mindset and educational skillset to introduce new and unique learning methods and life skills for our students.",
    ],
  },
];

export const Route = createFileRoute("/board-members")({
  head: () => ({
    meta: [
      { title: "Board Members | KRM Special School" },
      {
        name: "description",
        content:
          "Meet the leadership of KRM Special School - Chairman Mr. R. Janardhanan, Correspondent SMT. J. Jayalakshmi and Correspondent Mrs. R. J. Kothai Praveen.",
      },
    ],
  }),
  component: () => (
    <Layout>
      <PageHero
        title="Board Members"
        subtitle="The leadership and heart behind KRM Special School"
      />
      <section className="py-20 bg-gradient-to-b from-white via-[var(--sky)]/30 to-white">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {members.map((m) => (
            <article
              key={m.name}
              className="group bg-white rounded-[1.75rem] shadow-[0_20px_50px_-25px_rgba(11,22,53,0.45)] ring-1 ring-[var(--gold)]/20 overflow-hidden flex flex-col transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--navy)]/70 to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl text-[var(--navy)] leading-tight">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-semibold">
                  {m.role}
                </p>
                <div className="mt-3 h-px bg-gradient-to-r from-[var(--gold)]/60 via-[var(--gold)]/20 to-transparent" />
                <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground leading-relaxed">
                  {m.bio.map((paragraph, index) => (
                    <p key={`${m.name}-bio-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  ),
});
