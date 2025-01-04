"use client";

import { ContactContextProvider } from "../../../app/ContactContext";
import SEO from "../../../app/SEO";
import { ServiceContextProvider } from "../../../app/ServiceContext";
import Footer from "../../../components/layout/Footer";
import Header from "../../../components/layout/Header";
import Marquee from "../../../components/ui/Marquee";
import DescriptionSection from "../../../components/ui/Project/DescriptionSection/DescriptionSection";
import TechnologySection from "../../../components/ui/Project/TechnologySection/TechnologySection";
import HeroSection from "../../../components/ui/Project/HeroSection/HeroSection";
import MetaSection from "../../../components/ui/Project/MetaSection/MetaSection";
import "../../../components/ui/Project/Project.css";
import Tooltip from "../../../components/ui/Tooltip";
import { projects } from "../../../data/projects-data";
import { CSSProperties, use } from "react";

type ProjectParams = {
  project: string;
};

export default function Project({
  params,
}: {
  params: Promise<ProjectParams>;
}) {
  const { project } = use(params);

  const projectMatch = projects.filter((item) => {
    const fullName = item.title.secondName
      ? `${item.title.name.toLowerCase()}-${item.title.secondName
          .replaceAll(" ", "")
          .toLowerCase()}`
      : item.title.name.toLowerCase();
    return fullName.includes(project);
  });

  const projectData = projectMatch[0];

  const slug = projectData.title.secondName
    ? `${projectData.title.name.toLowerCase()}-${projectData.title.secondName
        .replaceAll(" ", "")
        .toLowerCase()}`
    : projectData.title.name.toLowerCase();

  return (
    <SEO
      title={`${projectData.title.name}${
        projectData.title.secondName ? projectData.title.secondName : ""
      } | Andrix Design`}
      description={projectData.description[0]}
      url={`https://www.andrix.design/projects/${slug}`}
    >
      <ContactContextProvider>
        <ServiceContextProvider>
          <Marquee
            gap="10px"
            page={`${projectData.title.name}${
              projectData.title.secondName ? projectData.title.secondName : ""
            }`}
            title="Andrix Development"
            time="30s"
            reverse={false}
          />
          <Header type={projectData.type} />
          <Tooltip />
          <div className="project-page">
            {projectData.page?.map((component, index) => {
              if (component.title === "HeroSection") {
                return (
                  <HeroSection
                    key={index}
                    title={projectData.title.name}
                    secondTitle={projectData.title.secondName!}
                    style={projectData.title.styleDark as CSSProperties}
                    video={projectData.video}
                    preview={projectData.preview}
                    description={component.description}
                    {...("call" in component && { call: component.call })}
                  />
                );
              }
              if (component.title === "MetaSection") {
                return (
                  <MetaSection
                    scale={projectData.scale}
                    objective={component.objective!}
                    duration={component.duration!}
                    status={component.status!}
                    key={index}
                  />
                );
              }
              if (component.title === "DescriptionSection") {
                return (
                  <DescriptionSection
                    key={index}
                    heading={component.heading}
                    theme={component.theme!}
                    position={component.position!}
                    video={component.video!}
                    {...("videoStyle" in component && {
                      videoStyle: component.videoStyle,
                    })}
                    animation={component.animation!}
                    preview={component.preview!}
                    text={component.text!}
                  />
                );
              }
              if (component.title === "TechnologySection") {
                return (
                  <TechnologySection
                    key={index}
                    technologies={projectData.technologies}
                  />
                );
              }
            })}
          </div>
          <Footer type={projectData.type} />
          <Marquee
            gap="10px"
            page={`${projectData.title.name}${
              projectData.title.secondName ? projectData.title.secondName : ""
            }`}
            title="Andrix Development"
            time="30s"
            reverse={true}
          />
        </ServiceContextProvider>
      </ContactContextProvider>
    </SEO>
  );
}
