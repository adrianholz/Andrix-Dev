import "./DesignSection.css";

type DesignSectionProps = {
  colors: {
    color: string;
    font: string;
  }[];
  technologies: string[];
};

export default function DesignSection({
  colors,
  technologies,
}: DesignSectionProps) {
  return (
    <section className="project-design">
      <div className="container">
        <div>
          <h2>Colors</h2>
          <div className="boxes">
            {colors.map((color, index) => (
              <div
                key={index}
                style={{ background: `#${color.color}` }}
                data-value={`#${color.color}`}
                data-background={`#${color.color}`}
                data-color={`#${color.font}`}
              ></div>
            ))}
          </div>
        </div>
        <div>
          <h2>Technologies</h2>
          <div className="icons">
            {technologies.map((technology, index) => (
              <div key={index} data-value={`${technology}`}>
                <img
                  src={`/assets/img/svg/tech-${technology
                    .toLowerCase()
                    .replaceAll(" ", "-")}.svg`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
