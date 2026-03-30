import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { aboutContent } from "@/data/siteContent";

export const metadata = {
  title: "About Us",
  description: "Learn about NeevShaktiSanstha, its background, values, and commitment to disability inclusion."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NeevShaktiSanstha"
        title="A community-focused NGO built on empathy, partnership, and practical inclusion."
        description={aboutContent.story}
        actions={[
          { label: "See Programs", href: "/programs" },
          { label: "Contact Us", href: "/contact" }
        ]}
      >
        <div className="media-placeholder card" aria-label="Placeholder for organization image">
          <span className="mini-label">Organization story</span>
          <h3>Replace this area with a founder image, team photo, or center photograph.</h3>
          <p>The layout is ready for real media whenever the NGO has approved assets available.</p>
        </div>
      </PageHero>

      <section className="section-shell">
        <div className="container split-grid">
          <div>
            <SectionIntro
              eyebrow="Our background"
              title="We support inclusion in ways that feel human, local, and sustainable."
              description="NeevShaktiSanstha works with individuals and families while also engaging the systems around them. That balance helps us support immediate needs and longer-term change."
            />
          </div>
          <Reveal className="card content-card">
            <ul className="detail-list">
              {aboutContent.backgroundPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-shell soft-section">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="Core values"
            title="Every program and partnership is guided by inclusion with dignity."
            description="These values help the site speak clearly to donors, families, volunteers, and institutional partners alike."
            align="center"
          />
          <div className="card-grid card-grid-four">
            {aboutContent.values.map((value) => (
              <Reveal key={value.title}>
                <article className="card value-card">
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
