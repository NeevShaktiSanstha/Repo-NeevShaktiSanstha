import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { donationContent } from "@/data/siteContent";

export const metadata = {
  title: "Donate and Support Us",
  description: "Support NeevShaktiSanstha through donations, sponsorships, and program funding."
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donations and support"
        title="Support inclusive work that helps people with disabilities move forward with dignity."
        description={donationContent.intro}
        actions={[
          { label: "Contact for Donations", href: "/contact" },
          { label: "Volunteer Instead", href: "/get-involved" }
        ]}
      >
        <div className="card mission-card-stack">
          <span className="mini-label">Payment integration ready</span>
          <p>
            Add Razorpay, Stripe, bank details, QR code donations, or CSR partnership instructions here later.
          </p>
        </div>
      </PageHero>

      <section className="section-shell">
        <div className="container section-stack">
          <SectionIntro
            eyebrow="Where support can go"
            title="Warm, transparent donation pathways that donors can understand quickly."
            description="These cards can be customized later with actual giving amounts, campaigns, or institutional partnership details."
          />
          <div className="card-grid card-grid-three">
            {donationContent.cards.map((item) => (
              <Reveal key={item.title}>
                <article className="card value-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell soft-section">
        <div className="container split-grid">
          <Reveal className="card content-card">
            <h2>How your support helps</h2>
            <ul className="detail-list">
              {donationContent.supportAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="card donation-note">
            <span className="mini-label">Integration placeholder</span>
            <h3>Ready for payment widgets or bank transfer details</h3>
            <p>
              This section can hold real payment buttons, donation receipts, tax benefit notes, and accountability updates.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Every contribution can help create a more accessible and compassionate future."
        text="If you are preparing a campaign, CSR contribution, or recurring support model, this layout gives you a strong starting point."
        primaryAction={{ label: "Reach Out", href: "/contact" }}
      />
    </>
  );
}
