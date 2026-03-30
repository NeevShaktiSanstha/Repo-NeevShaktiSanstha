import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { programs } from "@/data/siteContent";

const processSteps = [
  {
    title: "Listen First",
    text: "We begin by understanding the lived experiences, goals, and barriers affecting each individual or family."
  },
  {
    title: "Design Practical Support",
    text: "Programs are shaped to be understandable, inclusive, locally relevant, and realistic to sustain."
  },
  {
    title: "Build Community Links",
    text: "We connect participants with caregivers, volunteers, schools, employers, and trusted partners."
  },
  {
    title: "Advocate For Access",
    text: "We carry lessons from the ground into awareness, accessibility, and systems-level conversations."
  }
];

export const metadata = {
  title: "Programs and Initiatives",
  description: "See the disability support programs and community initiatives offered by NeevShaktiSanstha."
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs and initiatives"
        title="Inclusive services that support learning, livelihoods, confidence, and accessibility."
        description="These sample program blocks are written to be easy to customize as the NGO refines its actual offerings and service areas."
        actions={[
          { label: "Volunteer", href: "/get-involved" },
          { label: "Donate", href: "/donate" }
        ]}
      >
        <div className="media-placeholder card" aria-label="Placeholder for programs collage">
          <span className="mini-label">Programs visual</span>
          <h3>Add a collage, workshop photo, or community activity image here.</h3>
          <p>This panel helps the program page feel warm and real even before final media is available.</p>
        </div>
      </PageHero>

      <section className="section-shell">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="What we do"
            title="Programs designed for dignity, participation, and opportunity."
            description="Each initiative is presented as a reusable card so the NGO can expand or update content without changing the layout."
          />
          <div className="card-grid card-grid-three">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell soft-section">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="How we work"
            title="A thoughtful approach that combines care with practical action."
            description="This section shows partners and donors that programs are structured, responsive, and grounded in real needs."
            align="center"
          />
          <div className="card-grid card-grid-four">
            {processSteps.map((step, index) => (
              <Reveal key={step.title}>
                <article className="card step-card">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
