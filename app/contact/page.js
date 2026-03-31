import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { contactContent, siteConfig } from "@/data/siteContent";

export const metadata = {
  title: "Contact Us",
  description: "Contact NeevShaktiSanstha for support, volunteering, partnerships, or donation information."
};

const contactCards = [
  ...siteConfig.emailAddresses.map((email, index) => ({
    title: index === 0 ? "Email" : "Alternate Email",
    text: email,
    href: `mailto:${email}`
  })),
  ...siteConfig.phoneNumbers.map((contact) => ({
    title: `Phone (${contact.label})`,
    text: contact.number,
    href: `tel:${contact.number.replace(/\s+/g, "")}`
  })),
  { title: "Address", text: siteConfig.address, href: "#" }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let us connect around support, collaboration, volunteering, or inclusive community action."
        description={contactContent.heading}
        actions={[
          { label: "Donate", href: "/donate" },
          { label: "Get Involved", href: "/get-involved" }
        ]}
      >
        <div className="card mission-card-stack">
          <span className="mini-label">Simple and accessible communication</span>
          <p>{contactContent.formNote}</p>
        </div>
      </PageHero>

      <section className="section-shell">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="Reach us directly"
            title="Clear contact details for families, donors, volunteers, and partner organizations."
            description="Replace placeholder contact information with real NGO details whenever they are finalized."
          />
          <div className="card-grid card-grid-three">
            {contactCards.map((item) => (
              <Reveal key={item.title}>
                <article className="card contact-card">
                  <h3>{item.title}</h3>
                  <a href={item.href}>{item.text}</a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell soft-section">
        <div className="container contact-layout">
          <div>
            <SectionIntro
              eyebrow="Send a message"
              title="An accessible contact form ready for serverless or email integration."
              description="Use this form as-is for the UI layer, then connect it later to Formspree, Resend, a Next.js API route, or your preferred CRM."
            />
            <ContactForm />
          </div>

          <div className="section-stack">
            <Reveal className="map-placeholder card" aria-label={siteConfig.mapEmbedLabel}>
              <span className="mini-label">Google Maps placeholder</span>
              <h3>Add your embedded map here later</h3>
              <p>
                Replace this panel with a real iframe embed or a static map graphic once the NGO address is confirmed.
              </p>
            </Reveal>

            <Reveal className="card content-card">
              <h2>Social links</h2>
              <div className="social-links">
                {siteConfig.socialLinks.map((item) => {
                  const isExternal = item.href.startsWith("http");

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
