import "./ExperienceSection.css";
import { experiences } from "../../../../data/about-data";

export default function ExperienceSection() {
  return (
    <section className="experience" id="experience">
      <h1>Experience</h1>
      <div>
        <div>
          <div className="experience-container">
            {experiences.map((experience, index) => (
              <div key={index} className="experience-card">
                <h2>{experience.position}</h2>
                <h3>{experience.company}</h3>
                <span>{experience.period}</span>
                <p>{experience.description}</p>
                <div>
                  {experience.skills.map((skill, index) => (
                    <h4 key={index}>{skill}</h4>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="blur website active"></div>
    </section>
  );
}
