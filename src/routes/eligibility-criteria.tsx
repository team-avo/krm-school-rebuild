import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Calendar, Gauge, Accessibility } from "lucide-react";

const eligibilitySummary = {
  ageGroup: {
    label: "Age Group",
    value: "3.5 yrs to 25 yrs",
    icon: Calendar,
  },
  disabilityLevel: {
    label: "Disability Level",
    value: "Mild, Moderate and Severe",
    icon: Gauge,
  },
  disabilityTypes: {
    label: "Types of Disability",
    value: [
      "ASD [Autism Spectrum Disorder]",
      "ADHD [Attention Deficit Hyper Activity]",
      "CP [Cerebral Palsy]",
      "ID [Intellectual Disability]",
      "MD [Muscular Dystrophy] / [Multiple Disability]",
      "LD [Learning Disability]",
    ],
    icon: Accessibility,
  },
};

export const Route = createFileRoute("/eligibility-criteria")({
  head: () => ({
    meta: [
      { title: "Eligibility Criteria | KRM Special School" },
      {
        name: "description",
        content:
          "Eligibility criteria for KRM Special School: age group 3.5 to 25 years, mild to severe disability levels, and support for ASD, ADHD, CP, ID, MD and LD.",
      },
    ],
  }),
  component: () => (
    <Layout>
      <PageHero title="Eligibility Criteria" subtitle="Who can enrol" />

      {/* Eligibility Summary */}
      <section className="py-16 bg-gradient-to-b from-white via-[var(--sky)]/30 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-[var(--royal)] text-xs tracking-[0.35em] uppercase mb-2">
              At a glance
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--navy)]">
              Eligibility Summary
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Age Group */}
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_-25px_rgba(11,22,53,0.25)] ring-1 ring-[var(--gold)]/20 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                  <eligibilitySummary.ageGroup.icon size={24} />
                </div>
                <h3 className="font-display text-xl text-[var(--navy)]">
                  {eligibilitySummary.ageGroup.label}
                </h3>
              </div>
              <p className="text-2xl md:text-3xl font-display text-[var(--navy)] mt-auto">
                {eligibilitySummary.ageGroup.value}
              </p>
            </div>

            {/* Disability Level */}
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_-25px_rgba(11,22,53,0.25)] ring-1 ring-[var(--gold)]/20 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                  <eligibilitySummary.disabilityLevel.icon size={24} />
                </div>
                <h3 className="font-display text-xl text-[var(--navy)]">
                  {eligibilitySummary.disabilityLevel.label}
                </h3>
              </div>
              <p className="text-xl md:text-2xl font-display text-[var(--navy)] mt-auto">
                {eligibilitySummary.disabilityLevel.value}
              </p>
            </div>

            {/* Types of Disability */}
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_-25px_rgba(11,22,53,0.25)] ring-1 ring-[var(--gold)]/20 p-6 md:col-span-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                  <eligibilitySummary.disabilityTypes.icon size={24} />
                </div>
                <h3 className="font-display text-xl text-[var(--navy)]">
                  {eligibilitySummary.disabilityTypes.label}
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground mt-auto">
                {eligibilitySummary.disabilityTypes.value.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Explanation */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
            <p>
              We welcome children and young adults aged{" "}
              <strong>3.5 to 25 years</strong> who require special educational
              support, including those experiencing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dyslexia and specific learning disabilities</li>
              <li>Autism Spectrum Disorder (ASD)</li>
              <li>Mild intellectual disability</li>
              <li>Attention Deficit Hyperactivity Disorder (ADHD)</li>
              <li>Developmental delays</li>
              <li>Communication and learning challenges</li>
              <li>Cerebral Palsy</li>
              <li>Muscular Dystrophy</li>
            </ul>

            <h3 className="text-xl font-bold text-[var(--brand-blue)] mt-8 mb-3">
              Admission Approach
            </h3>
            <p>
              Admissions are based on age, developmental level, assessment outcomes
              and the child's individual learning needs. Every child is
              assessed individually before admission.
            </p>

            <h3 className="text-xl font-bold text-[var(--brand-blue)] mt-8 mb-3">
              Age Eligibility
            </h3>
            <p>
              The school supports children and young adults from{" "}
              <strong>3.5 to 25 years</strong>, grouped across programs:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Overall age range:</strong> 3.5 – 25 years
              </li>
              <li>
                <strong>School program (academics &amp; daily living skills):</strong>{" "}
                4 – 15 years
              </li>
              <li>
                <strong>Pre-vocational &amp; vocational training:</strong> 15 – 22 years
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[var(--brand-blue)] mt-8 mb-3">
              Individualised Education Plan
            </h3>
            <p>
              An Individualised Education Plan (IEP) is formulated at the
              beginning of the academic year based on the assessment findings,
              the child's strengths, learning needs, therapeutic goals and
              parent inputs. Children are placed in classes grouped by
              chronological age, ability level, learning needs and functional
              independence.
            </p>

            <h3 className="text-xl font-bold text-[var(--brand-blue)] mt-8 mb-3">
              Progress &amp; Parent Partnership
            </h3>
            <p>
              Student progress is reviewed periodically through assessments,
              classroom observation, therapy inputs and parent feedback.
              Progress reports are discussed with parents during Parent Teacher
              Meetings.
            </p>

            <p className="mt-6">
              For admission queries, please contact us at{" "}
              <a
                className="text-[var(--brand-red)] font-semibold"
                href="tel:9042111150"
              >
                9042111150
              </a>{" "}
              or{" "}
              <a
                className="text-[var(--brand-red)] font-semibold"
                href="mailto:krm.specialschool@gmail.com"
              >
                krm.specialschool@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  ),
});
