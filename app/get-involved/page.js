import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { involvementOptions } from "@/data/siteContent";

export const metadata = {
  title: "Get Involved",
  description: "Volunteer, partner, sponsor, or participate in community action with NeevShaktiSanstha."
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="There is more than one meaningful way to stand with people with disabilities and their families."
        description="This page helps convert goodwill into action by offering clear pathways for volunteers, partners, sponsors, and community supporters."
        actions={[
          { label: "Volunteer Today", href: "/contact" },
          { label: "Donate", href: "/donate" }
        ]}
      >
        <div className="card mission-card-stack">
          <span className="mini-label">Community participation</span>
          <p>Support can look like time, skills, advocacy, professional partnerships, or financial backing.</p>
        </div>
      </PageHero>

      <section className="section-shell">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="Ways to contribute"
            title="Choose the form of involvement that matches your capacity and commitment."
            description="Each option below can later link to a real volunteer form, partnership kit, or sponsorship workflow."
          />
          <div className="card-grid card-grid-four">
            {involvementOptions.map((item) => (
              <Reveal key={item.title}>
                <article className="card value-card">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Partnerships become more powerful when they are rooted in empathy and consistency."
        text="If your organization, school, team, or community group wants to collaborate, this website is ready to guide the next conversation."
        primaryAction={{ label: "Start a Conversation", href: "/contact" }}
        secondaryAction={{ label: "See Programs", href: "/programs" }}
      />
    </>
  );
}
