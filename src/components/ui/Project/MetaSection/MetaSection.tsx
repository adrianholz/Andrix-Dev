import "./MetaSection.css";

type MetaSectionProps = {
  scale: string;
  objective: string;
  duration: string;
  status: string;
};

export default function MetaSection({
  scale,
  objective,
  duration,
  status,
}: MetaSectionProps) {
  return (
    <section className="project-meta">
      <div className="container">
        <div>
          <h2>Scale</h2>
          <p>{scale}</p>
        </div>
        <div>
          <h2>Objective</h2>
          <p>{objective}</p>
        </div>
        <div>
          <h2>Duration</h2>
          <p>{duration}</p>
        </div>
        <div>
          <h2>Status</h2>
          <p>{status}</p>
        </div>
      </div>
    </section>
  );
}
