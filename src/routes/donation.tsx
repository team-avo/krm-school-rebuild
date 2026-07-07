import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/donation")({
  head: () => ({ meta: [{ title: "Donate, KRM Special School" }] }),
  component: DonationPage,
});

function DonationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    purpose: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nMobile: ${form.mobile}\nPurpose of Donation: ${form.purpose}\nMessage: ${form.message}`;
    window.location.href = `mailto:krm.specialschool@gmail.com?subject=${encodeURIComponent(
      "Donation Enquiry"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Layout>
      <PageHero title="Donate" subtitle="Sponsor a child, transform a life" />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-center section-title mb-10">
            Sponsor a child & make a child smile today!!
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Donation Enquiry Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-[var(--brand-blue)] mb-6">
                Donation Enquiry
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/60"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/60"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Mobile<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/60"
                    placeholder="Your mobile number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Purpose of Donation<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={form.purpose}
                    onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                    className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/60 resize-none"
                    placeholder="How would you like your donation to help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/60 resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button type="submit" className="btn-gold w-full mt-auto">
                  Send Message
                </button>
              </form>
            </div>

            {/* Payment Details + Sponsor + QR */}
            <div className="flex flex-col gap-8">
              {/* Donation Payment Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col">
                <h2 className="section-title mb-4">Donation Payment Details</h2>
                <div className="bg-muted rounded-xl p-6 mb-6 space-y-2 text-sm">
                  <p>
                    <strong>Name:</strong> KRM SPECIAL CHILDREN CHARITABLE AND EDUCATIONAL TRUST
                  </p>
                  <p>
                    <strong>Account No:</strong> 99909840766470
                  </p>
                  <p>
                    <strong>IFSC:</strong> HDFC0000880
                  </p>
                  <p>
                    <strong>Bank:</strong> HDFC Bank
                  </p>
                  <p>
                    <strong>Branch:</strong> Perambur
                  </p>
                  <div className="pt-4 border-t border-border/50 mt-2 space-y-2">
                    <p className="flex items-center gap-2 text-sm">
                      <Phone size={16} className="text-[var(--gold)] shrink-0" />
                      <span>9042111150 | 8939977645</span>
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <Mail size={16} className="text-[var(--gold)] shrink-0" />
                      <span>krm.specialschool@gmail.com</span>
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-blue)] mb-3">
                  Sponsor a Child
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your sponsorship covers a child's education, therapy, meals and care.
                  Every contribution makes a meaningful difference. Reach out to us to
                  start sponsoring today.
                </p>
                <a href="mailto:krm.specialschool@gmail.com" className="btn-gold w-fit mt-auto">
                  Contact to Sponsor
                </a>
              </div>

              {/* QR Code */}
              <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-[var(--brand-blue)] mb-6">
                  (Or) Scan the QR to make donation
                </h3>
                <img
                  src="/donation-qr.png"
                  alt="KRM Special School donation QR code"
                  className="w-64 h-64 rounded-xl border border-[var(--brand-blue)]/20 bg-[var(--brand-cream,#fdf8ef)] object-contain mx-auto"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                  }}
                />
                <p className="text-sm text-muted-foreground mt-6 max-w-xs">
                  Scan the QR code above with any UPI app to donate securely. For any
                  donation-related enquiries, please contact the school office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
