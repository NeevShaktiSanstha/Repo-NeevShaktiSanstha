import Link from "next/link";
import { siteConfig } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <span className="footer-label">NeevShaktiSanstha</span>
          <h2>Supporting inclusion with care, clarity, and community action.</h2>
          <p>{siteConfig.description}</p>
        </div>

        <div>
          <span className="footer-label">Quick Links</span>
          <div className="footer-links">
            {siteConfig.footerLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <span className="footer-label">Connect</span>
          <div className="footer-contact">
            {siteConfig.emailAddresses.map((email) => (
              <a key={email} href={`mailto:${email}`}>
                {email}
              </a>
            ))}
            {siteConfig.phoneNumbers.map((contact) => (
              <a key={contact.number} href={`tel:${contact.number.replace(/\s+/g, "")}`}>
                {contact.number} ({contact.label})
              </a>
            ))}
            <p>{siteConfig.address}</p>
          </div>
          <div className="social-links" aria-label="Social media links">
            {siteConfig.socialLinks.map((item) => {
              const isExternal = item.href.startsWith("http");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>{new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Built for accessibility, clarity, and easy future customization.</p>
      </div>
    </footer>
  );
}
