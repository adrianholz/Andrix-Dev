import { educations } from "../../../../data/about-data";
import "./EducationSection.css";

export default function EducationSection() {
  return (
    <section className="education" id="education">
      <h1>Education</h1>
      <div>
        <div>
          <div className="education-container">
            {educations.map((education, index) => (
              <div className="education-card" key={index}>
                <a href={education.link} target="_blank">
                  <img src={education.logo} alt={education.alt} />
                </a>
                <h2>{education.title}</h2>
                <h3>{education.degree}</h3>
                <span>{education.period}</span>
                <p>{education.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="blur desktop active"></div>
    </section>
  );
}
