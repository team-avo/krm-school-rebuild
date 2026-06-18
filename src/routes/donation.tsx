import { createFileRoute } from "@tanstack/react-router";
import { QrCode } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/donation")({
  head: () => ({ meta: [{ title: "Donate, KRM Special School" }] }),
  component: () => (
    <Layout>
      <PageHero title="Donate" subtitle="Sponsor a child, transform a life" />
      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl items-stretch">
          {/* Scan to Donate */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center h-full">
            <h3 className="text-2xl font-bold text-[var(--brand-blue)] mb-6">Scan to Donate</h3>
            <div
              className="w-64 h-64 rounded-xl border-2 border-dashed border-[var(--brand-blue)]/30 bg-[var(--brand-cream,#fdf8ef)] flex flex-col items-center justify-center text-[var(--brand-blue)]/70 mx-auto"
              role="img"
              aria-label="KRM Special School donation QR code"
            >
              <QrCode className="w-20 h-20 mb-3" strokeWidth={1.25} />
              <p className="text-xs font-medium px-4">QR code coming soon</p>
            </div>
            <p className="text-sm text-muted-foreground mt-6">UPI / Google Pay / PhonePe</p>
          </div>

          {/* Bank Transfer + Sponsor */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full">
            <h2 className="section-title mb-4">Bank Transfer</h2>
            <div className="bg-muted rounded-xl p-6 mb-6 space-y-2 text-sm">
              <p><strong>Account Name:</strong> KRM Special School</p>
              <p><strong>Bank:</strong> (Please contact us for details)</p>
              <p><strong>Phone:</strong> 9042111150 | 8939977645</p>
              <p><strong>Email:</strong> krm.specialschool@gmail.com</p>
            </div>
            <h3 className="text-xl font-bold text-[var(--brand-blue)] mb-3">Sponsor a Child</h3>
            <p className="text-muted-foreground mb-6">
              Your sponsorship covers a child's education, therapy, meals and care. Every contribution makes a meaningful difference. Reach out to us to start sponsoring today.
            </p>
            <a href="mailto:krm.specialschool@gmail.com" className="btn-red w-fit mt-auto">Contact to Sponsor</a>
          </div>
        </div>
      </section>
    </Layout>
  ),
});
