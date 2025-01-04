"use client";

import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { ContactContextProvider } from "../ContactContext";
import { ServiceContextProvider } from "../ServiceContext";
import Marquee from "../../components/ui/Marquee";
import ProjectsPage from "../../components/pages/ProjectsPage";
import SEO from "../SEO";

export default function Projects() {
  return (
    <SEO
      title="Projects | Andrix Design"
      description="There's many different projects here at Andrix Design, including UX/UI, Digital Design, Video Editing, Visual Identity, Social Media and Packaging Design."
      url="https://www.andrix.design/projects"
    >
      <ContactContextProvider>
        <ServiceContextProvider>
          <Marquee
            gap="10px"
            page="Projects"
            title="Andrix Development"
            time="30s"
            reverse={false}
          />
          <Header />
          <ProjectsPage />
          <Footer />
          <Marquee
            gap="10px"
            page="Projects"
            title="Andrix Development"
            time="30s"
            reverse={true}
          />
        </ServiceContextProvider>
      </ContactContextProvider>
    </SEO>
  );
}
