import Reveal from "@/components/Reveal";

export default function TestimonialCard({ item }) {
  return (
    <Reveal>
      <article className="testimonial-card card">
        <p className="quote-mark" aria-hidden="true">
          "
        </p>
        <blockquote>{item.quote}</blockquote>
        <p className="story-copy">{item.story}</p>
        <footer>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </footer>
      </article>
    </Reveal>
  );
}
