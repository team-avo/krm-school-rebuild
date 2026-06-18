import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/eligibility-criteria")({
  head: () => ({ meta: [{ title: "Eligibility Criteria, KRM Special School" }] }),
  component: () => (
    <ContentPage title="Eligibility Criteria" subtitle="Who can enrol">
      <p>KRM Special School welcomes children who require special educational support, including those diagnosed with:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Dyslexia and specific learning disabilities</li>
        <li>Autism Spectrum Disorder (ASD)</li>
        <li>Intellectual Disability (ID)</li>
        <li>Attention Deficit Hyperactivity Disorder (ADHD)</li>
        <li>Developmental delays</li>
      </ul>
      <p>Every child is assessed individually before admission. Based on the assessment, an Individualized Education Plan (IEP) is created and the child is placed in the most suitable class. For admission queries, please contact us at <a className="text-[var(--brand-red)] font-semibold" href="tel:9042111150">9042111150</a> or <a className="text-[var(--brand-red)] font-semibold" href="mailto:krm.specialschool@gmail.com">krm.specialschool@gmail.com</a>.</p>
    </ContentPage>
  ),
});
