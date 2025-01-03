import Link from "next/link";
import Heading from "../Heading/Heading";
import "./ProjectsSection.css";
import React, { useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { projects } from "../../../../data/projects-data";
import { ServiceContext } from "@/app/ServiceContext";

export default function ProjectsSection() {
  const projectRefs = useRef<HTMLDivElement[]>([]);
  const { blurRefs } = useContext(ServiceContext)!;

  function handleClick(index: number) {
    projectRefs.current[index].classList.toggle("active");
    const video = projectRefs.current[index].firstChild?.firstChild;
    if (video instanceof HTMLVideoElement) {
      if (projectRefs.current[index].classList.contains("active")) {
        video.play();
      } else {
        video.pause();
      }
    }
  }

  return (
    <section className="projects">
      <Heading
        theme="light"
        heading="Portfolio"
        subheading="Projects made to promote"
        highlight="Outstanding Experience"
      />
      <div className="projects-inner">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          speed={800}
          slidesPerView="auto"
          centeredSlides
          grabCursor={true}
        >
          {projects.slice(0, 5).map((project, index) => {
            const slug = project.title.secondName
              ? `${project.title.name.toLowerCase()}-${project.title.secondName
                  .replaceAll(" ", "")
                  .toLowerCase()}`
              : project.title.name.toLowerCase();

            return (
              <SwiperSlide key={index}>
                <div
                  className="project"
                  ref={(el) => {
                    if (el && projectRefs.current) {
                      projectRefs.current[index] = el;
                    }
                  }}
                >
                  <div
                    className="cover"
                    style={
                      project.video === false
                        ? { backgroundImage: `url(${project.preview})` }
                        : undefined
                    }
                  >
                    {project.video ? (
                      <video loop muted src={project.preview}></video>
                    ) : null}
                    <div
                      className="start"
                      onClick={() => {
                        handleClick(index);
                      }}
                    >
                      <button></button>
                    </div>
                  </div>
                  <div className="info">
                    <div className="title">
                      <h3 style={project.title.styleDark}>
                        {project.title.name}
                        {project.title.secondName ? (
                          <span>{project.title.secondName}</span>
                        ) : null}
                      </h3>
                      <div className="description">
                        {project.description.map((text, index) => (
                          <p key={index}>{text}</p>
                        ))}
                      </div>
                    </div>
                    <div className="details">
                      <div className="technologies">
                        <div>
                          <span>Technologies</span>
                          <div className="icons">
                            {project.technologies.map((technology, index) => (
                              <div key={index} data-value={`${technology}`}>
                                <img
                                  src={`/assets/img/svg/${technology
                                    .toLowerCase()
                                    .replaceAll(" ", "-")}.svg`}
                                  alt=""
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <Link href={`/projects/${slug}`}>View Project</Link>
                      </div>
                    </div>
                  </div>
                  <img
                    src={`/assets/img/svg/${project.type}-dark.svg`}
                    alt={`${project.type} icon`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Link href="/projects">View all of Andrix's projects</Link>
      <div
        className="blur code active"
        ref={(el) => {
          if (el && blurRefs.current) {
            blurRefs.current[7] = el;
          }
        }}
      ></div>
    </section>
  );
}
