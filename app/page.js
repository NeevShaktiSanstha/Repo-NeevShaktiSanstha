import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import GalleryGrid from "@/components/GalleryGrid";
import ImpactStats from "@/components/ImpactStats";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import SectionIntro from "@/components/SectionIntro";
import TestimonialCard from "@/components/TestimonialCard";
import VideoGrid from "@/components/VideoGrid";
import {
  galleryPhotos,
  homeContent,
  programs,
  siteConfig,
  testimonials,
  videoTestimonials
} from "@/data/siteContent";

const featuredPrograms = programs.filter((program) =>
  homeContent.featuredProgramIds.includes(program.id)
);

const featuredStories = testimonials.filter((item) =>
  homeContent.featuredTestimonialIds.includes(item.id)
);

const galleryPreview = galleryPhotos.slice(0, 6);

export const metadata = {
  title: "Home",
  description:
    "Inclusive NGO website for NeevShaktiSanstha featuring impact, programs, stories, gallery photos, and ways to support people with disabilities."
};

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow={homeContent.hero.eyebrow}
        title={homeContent.hero.title}
        description={homeContent.hero.description}
        actions={[
          homeContent.hero.primaryAction,
          homeContent.hero.secondaryAction,
          homeContent.hero.tertiaryAction
        ]}
      >
        <div className="hero-panel card">
          <div className="hero-branding">
            <Image
              src={siteConfig.logoPath}
              alt="NeevShaktiSanstha logo"
              width={132}
              height={132}
              className="hero-logo"
              priority
            />
            <div className="hero-brand-copy">
              <span className="mini-label">{siteConfig.organizationType}</span>
              <p className="hero-motto">{siteConfig.mottoHindi}</p>
              <p className="hero-quote">{siteConfig.mottoEnglish}</p>
            </div>
          </div>
          <h2>Building confidence through practical care and inclusive action.</h2>
          <p>
            {siteConfig.shortName} brings together families, volunteers, partners, and local communities to make
            inclusion feel visible, possible, and sustainable.
          </p>
          <ul className="highlight-list">
            {homeContent.hero.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </PageHero>

      <section className="section-shell">
        <div className="container split-grid split-grid-balanced">
          <div>
            <SectionIntro
              eyebrow="Who we are"
              title="A compassionate NGO rooted in dignity, accessibility, and community trust."
              description={homeContent.introduction}
            />
            <div className="quick-action-row">
              <Link href="/about" className="button button-secondary">
                Learn About Us
              </Link>
              <Link href="/mission-vision" className="button button-text">
                Explore Our Vision
              </Link>
            </div>
          </div>

          <aside className="media-placeholder card" aria-label="Organization identity and event photo">
            <span className="mini-label">Organization identity</span>
            <Image
              src="/organization-identity-cdo.png"
              alt="Neev Shakti Sanstha team with Mr. Abhinav Gopal, CDO Ghaziabad, IAS, at the organization stall"
              width={580}
              height={780}
              className="identity-photo"
              priority
            />
            <h3>Mr. Abhinav Gopal CDO ghaziabad IAS.</h3>
            <p>
              A meaningful moment representing institutional support, visibility, and community engagement for
              NeevShaktiSanstha.
            </p>
          </aside>
        </div>
      </section>

      <section className="section-shell soft-section">
        <div className="container">
          <SectionIntro
            eyebrow="Impact at a glance"
            title="Small, steady actions can change daily life in meaningful ways."
            description="Use these counters to highlight growth, outreach, volunteers, and active partnerships."
            align="center"
          />
          <ImpactStats stats={homeContent.impactStats} />
        </div>
      </section>

      <section className="section-shell">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="Featured programs"
            title="Support that strengthens education, independence, and belonging."
            description="These featured initiatives introduce the broad areas where NeevShaktiSanstha can create direct impact."
          />
          <div className="card-grid card-grid-three">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell soft-section">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="Stories of change"
            title="Voices from families, participants, and community partners."
            description="Real stories help visitors understand the emotional and practical value of inclusive support."
          />
          <div className="card-grid card-grid-three">
            {featuredStories.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="Photo gallery"
            title="Real moments from NeevShaktiSanstha programs, outreach, and community life."
            description="These NGO photos make the website feel more authentic and trustworthy for families, donors, volunteers, and partners."
          />
          <GalleryGrid photos={galleryPreview} compact />
          <div className="gallery-actions">
            <Link href="/gallery" className="button button-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell soft-section">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="Video testimonials"
            title="Share lived experiences through accessible and easy-to-update YouTube embeds."
            description="The video section is powered by a simple array in the data file, so new links can be added quickly later."
          />
          <VideoGrid videos={videoTestimonials.slice(0, 2)} />
        </div>
      </section>

      <CtaBanner
        title="Join a caring network that believes inclusion should be visible in everyday life."
        text="Whether you volunteer, donate, partner, or simply help spread awareness, your support helps build stronger foundations for people with disabilities and their families."
        primaryAction={{ label: "Volunteer", href: "/get-involved" }}
        secondaryAction={{ label: "Donate Now", href: "/donate" }}
      />
    </>
  );
}
