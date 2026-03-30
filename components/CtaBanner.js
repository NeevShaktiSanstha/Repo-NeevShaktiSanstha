import Link from "next/link";

export default function CtaBanner({ title, text, primaryAction, secondaryAction }) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner-inner">
        <div>
          <p className="eyebrow">Take the next step</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link href={primaryAction.href} className="button button-primary">
            {primaryAction.label}
          </Link>
          {secondaryAction ? (
            <Link href={secondaryAction.href} className="button button-secondary">
              {secondaryAction.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
