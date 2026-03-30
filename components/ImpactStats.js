import Reveal from "@/components/Reveal";

export default function ImpactStats({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <Reveal key={stat.label}>
          <article className="stat-card">
            <strong>{stat.value}</strong>
            <p>{stat.label}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
