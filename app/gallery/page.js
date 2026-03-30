import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import { galleryPhotos } from "@/data/siteContent";

export const metadata = {
  title: "Gallery",
  description:
    "Photo gallery of NeevShaktiSanstha events, community programs, outreach moments, and inclusive support activities."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Photo gallery"
        title="Moments of inclusion, community support, and shared hope."
        description="This gallery brings together NGO photos from activities, outreach, events, and community participation. New images can be added later by placing files in the gallery folder and updating the photo data array."
        actions={[
          { label: "Back to Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" }
        ]}
      >
        <div className="card mission-card-stack">
          <span className="mini-label">Visual storytelling</span>
          <p>
            Authentic photos help families, donors, volunteers, and partners connect more deeply with the work and
            values of NeevShaktiSanstha.
          </p>
          <p>This page is ready to grow as more approved NGO images become available.</p>
        </div>
      </PageHero>

      <section className="section-shell">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="Our moments"
            title="A growing collection of real NGO photos."
            description="The gallery is mobile-friendly, accessible, and easy to maintain. Each image is rendered from reusable data so you can rename captions or replace photos later without changing the layout."
          />
          <GalleryGrid photos={galleryPhotos} />
        </div>
      </section>

      <section className="section-shell soft-section">
        <div className="container gallery-cta-row">
          <div className="card content-card">
            <span className="mini-label">Need more updates?</span>
            <h2>Add more photos anytime</h2>
            <p>
              Place new files in <code>public/gallery</code> and add another object to the <code>galleryPhotos</code>
              array in the shared content file.
            </p>
          </div>
          <Link href="/contact" className="button button-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
