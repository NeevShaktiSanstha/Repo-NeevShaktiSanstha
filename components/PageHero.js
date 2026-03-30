import Link from "next/link";

export default function PageHero({ eyebrow, title, description, actions = [], children }) {
  return (
    <section className="page-hero section-shell">
      <div className="container page-hero-grid">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p className="hero-copy">{description}</p>

          {actions.length > 0 ? (
            <div className="hero-actions">
              {actions.map((action, index) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={index === 0 ? "button button-primary" : "button button-secondary"}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div>{children}</div>
      </div>
    </section>
  );
}
