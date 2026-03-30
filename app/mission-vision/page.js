import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { missionVisionContent } from "@/data/siteContent";

export const metadata = {
  title: "Mission and Vision",
  description: "Explore the mission, vision, values, and inclusion promises of NeevShaktiSanstha."
};

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission and vision"
        title="A future where accessibility and equal opportunity are part of everyday community life."
        description="Our mission and vision help donors, volunteers, and families understand the long-term purpose behind every program we build."
        actions={[
          { label: "Support the Mission", href: "/donate" },
          { label: "Partner With Us", href: "/get-involved" }
        ]}
      >
        <div className="card mission-card-stack">
          <div>
            <span className="mini-label">Mission</span>
            <p>{missionVisionContent.mission}</p>
          </div>
          <div>
            <span className="mini-label">Vision</span>
            <p>{missionVisionContent.vision}</p>
          </div>
        </div>
      </PageHero>

      <section className="section-shell">
        <div className="container split-grid">
          <Reveal className="card content-card">
            <h2>Values</h2>
            <ul className="detail-list">
              {missionVisionContent.values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="card content-card">
            <h2>Our Promise</h2>
            <ul className="detail-list">
              {missionVisionContent.promises.map((promise) => (
                <li key={promise}>{promise}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
