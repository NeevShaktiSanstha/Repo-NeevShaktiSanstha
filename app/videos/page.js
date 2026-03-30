import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import VideoGrid from "@/components/VideoGrid";
import { siteConfig, videoTestimonials } from "@/data/siteContent";

const youtubeChannel = siteConfig.socialLinks.find((item) => item.label === "YouTube")?.href;

export const metadata = {
  title: "Video Testimonials",
  description: "Responsive YouTube video testimonial page for NeevShaktiSanstha with easy-to-edit video data."
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Video testimonials"
        title="An easy-to-manage YouTube showcase for interviews, beneficiary stories, and program highlights."
        description="The cards below are generated from a simple array of objects, making it straightforward to add, remove, or update video URLs later."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Get Involved", href: "/get-involved" }
        ]}
      >
        <Reveal className="card code-card">
          <span className="mini-label">Editable structure</span>
          <pre>
            <code>{`{
  title: "Video title",
  description: "Short summary",
  url: "https://www.youtube.com/watch?v=..."
}`}</code>
          </pre>
        </Reveal>
      </PageHero>

      <section className="section-shell">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="Featured videos"
            title="Responsive embeds that work across mobile, tablet, and desktop."
            description="Use this page for testimonial interviews, awareness clips, volunteer reflections, or event recaps."
          />
          {youtubeChannel ? (
            <div className="gallery-actions">
              <a href={youtubeChannel} target="_blank" rel="noreferrer" className="button button-secondary">
                Open YouTube Channel
              </a>
            </div>
          ) : null}
          <VideoGrid videos={videoTestimonials} />
        </div>
      </section>
    </>
  );
}
