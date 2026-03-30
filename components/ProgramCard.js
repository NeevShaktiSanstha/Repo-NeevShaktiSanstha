import Reveal from "@/components/Reveal";

export default function ProgramCard({ program }) {
  return (
    <Reveal>
      <article className="program-card card">
        <div className="icon-chip" aria-hidden="true">
          {program.icon}
        </div>
        <h3>{program.title}</h3>
        <p>{program.summary}</p>
        <p className="card-muted">{program.details}</p>
      </article>
    </Reveal>
  );
}
