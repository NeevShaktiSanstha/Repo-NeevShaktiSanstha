"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/siteContent";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="NeevShaktiSanstha home page">
          <span className="brand-logo-wrap">
            <Image
              src={siteConfig.logoPath}
              alt="NeevShaktiSanstha logo"
              width={72}
              height={72}
              className="brand-logo"
              priority
            />
          </span>
          <span className="brand-copy">
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.organizationType}</small>
            <span className="brand-caption">{siteConfig.mottoHindi}</span>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${isOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
