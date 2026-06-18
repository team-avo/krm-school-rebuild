import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import janardhananAsset from "@/assets/krm/board/Janardhanan.jpg.asset.json";
import jeyalakshmiAsset from "@/assets/krm/board/jeyalakshmi.jpg.asset.json";
import kothaiAsset from "@/assets/krm/board/kothaipraveen.jpg.asset.json";

const members = [
  { name: "Shri R. Janardhanan", role: "Dean & Founder", img: janardhananAsset.url },
  { name: "Smt. Jeyalakshmi", role: "Board Member", img: jeyalakshmiAsset.url },
  { name: "Smt. Kothai Praveen", role: "Board Member", img: kothaiAsset.url },
];

export const Route = createFileRoute("/board-members")({
  head: () => ({ meta: [{ title: "Board Members, KRM Special School" }] }),
  component: () => (
    <Layout>
      <PageHero title="Board Members" subtitle="The leadership behind KRM" />
      <section className="py-16">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
          {members.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl shadow-lg overflow-hidden text-center">
              <img src={m.img} alt={m.name} className="w-full h-72 object-cover" />
              <div className="p-5">
                <h3 className="font-bold text-[var(--brand-blue)] text-lg">{m.name}</h3>
                <p className="text-sm text-[var(--brand-red)]">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  ),
});
