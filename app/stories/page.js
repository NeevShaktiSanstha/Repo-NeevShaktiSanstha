import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/siteContent";

export const metadata = {
  title: "Success Stories",
  description: "Read beneficiary, family, volunteer, and partner testimonials from NeevShaktiSanstha."
};

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success stories and testimonials"
        title="Stories that reflect resilience, support, and the power of community care."
        description="This page is structured so new stories can be added quickly through the central data file and displayed in the same clean card format."
        actions={[
          { label: "See Videos", href: "/videos" },
          { label: "Support Our Work", href: "/donate" }
        ]}
      >
        <div className="card mission-card-stack">
          <span className="mini-label">Storytelling with dignity</span>
          <p>
            Share lived experiences with consent, respectful language, and a focus on strengths, progress, and the support systems that mattered.
          </p>
        </div>
      </PageHero>

      <section className="section-shell">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="Community voices"
            title="Each testimony helps visitors understand the human side of inclusion."
            description="These stories can feature families, beneficiaries, volunteers, teachers, therapists, or employer partners."
          />
          <div className="card-grid card-grid-three">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
