import { projects } from "../../../../data/projects-data";
import "./Projects.css";
import Image from "next/image";
import Link from "next/link";
import Atropos from "atropos/react";

type Tags = {
  search: string;
  scale: string[];
  category: string[];
  technology: string[];
};

export default function Projects({ tags }: { tags: Tags }) {
  const filteredProjects = projects.filter((project) => {
    const projectName = project.title.name + project.title.secondName;

    const matchesSearch = tags.search
      ? projectName.toLowerCase().includes(tags.search.toLowerCase())
      : true;

    const matchesScale = tags.scale.length
      ? tags.scale.includes(project.scale)
      : true;

    const matchesCategory = tags.category.length
      ? tags.category.includes(project.type)
      : true;

    const matchesTechnology = tags.technology.length
      ? tags.technology.some((tech) => project.technologies.includes(tech)) &&
        tags.technology.every((tech) => project.technologies.includes(tech))
      : true;

    return (
      matchesSearch && matchesScale && matchesCategory && matchesTechnology
    );
  });

  return (
    <section className="projects-container">
      <h1>Projects</h1>
      {filteredProjects.length > 0 ? (
        <div>
          {filteredProjects.map((project, index) => {
            const slug = project.title.secondName
              ? `${project.title.name.toLowerCase()}-${project.title.secondName
                  .replaceAll(" ", "")
                  .toLowerCase()}`
              : project.title.name.toLowerCase();

            return (
              <Link href={`/projects/${slug}`} key={index}>
                <div className="project-entry">
                  <div className="project-entry-inner">
                    {project.video ? (
                      <video
                        src={project.preview}
                        autoPlay
                        muted
                        loop
                        className="project-cover"
                        disablePictureInPicture
                        style={project.videoStyle ? project.videoStyle : {}}
                      ></video>
                    ) : (
                      <Image
                        src={project.preview}
                        alt={project.title.name}
                        width={16}
                        height={9}
                        layout="responsive"
                        className="project-cover"
                        sizes="(max-width: 330px) 100vw, 330px"
                        style={
                          project.type !== "website" &&
                          project.type !== "ecommerce" &&
                          project.type !== "code"
                            ? { objectPosition: "center", transition: "none" }
                            : {}
                        }
                      />
                    )}
                    <h3
                      style={
                        project.title.styleDark
                          ? project.title.styleDark
                          : project.title.style
                      }
                    >
                      {project.title.name}
                      {project.title.secondName ? (
                        <span>{project.title.secondName}</span>
                      ) : null}
                    </h3>
                    <ul>
                      {project.technologies.slice(0, 5).map((tool, index) => (
                        <li key={index}>
                          <img
                            src={`/assets/img/svg/${tool
                              .toLowerCase()
                              .replaceAll(" ", "-")}.svg`}
                            alt={tool}
                          />
                        </li>
                      ))}
                    </ul>
                    <p>{project.description[0]}</p>
                  </div>
                  <img
                    src={`/assets/img/svg/${project.type}.svg`}
                    alt={`${project.type} Icon`}
                    className="project-type"
                  />
                  <div className={`blur active ${project.type}`}></div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="projects-not-found">
          <p>Sorry, no projects matched the criteria.</p>
        </div>
      )}
    </section>
  );
}
