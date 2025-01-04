import { tools } from "../../../../data/home-data";
import Tech from "../../Homepage/TechSection/Tech";
import "./TechnologySection.css";

type TechnologySectionProps = {
  technologies: string[];
};

export default function TechnologySection({
  technologies,
}: TechnologySectionProps) {
  return (
    <section className="project-technologies">
      <div className="container">
        {tools.map((tool, index) => {
          if (technologies.includes(tool.name)) {
            return (
              <Tech
                link={tool.link}
                blur={tool.blur}
                drop={tool.drop}
                name={tool.name}
                key={index}
              />
            );
          }
        })}
      </div>
    </section>
  );
}
