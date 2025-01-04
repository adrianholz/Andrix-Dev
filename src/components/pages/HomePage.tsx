"use client";

import "swiper/css";
import ServicesSection from "../ui/Homepage/ServicesSection/ServicesSection";
import HeroSection from "../ui/Homepage/HeroSection/HeroSection";
import AboutSection from "../ui/Homepage/AboutSection/AboutSection";
import ProjectsSection from "../ui/Homepage/ProjectsSection/ProjectsSection";
import Tooltip from "../ui/Tooltip";
import TechSection from "../ui/Homepage/TechSection/TechSection";

export default function HomePage() {
  return (
    <>
      <Tooltip />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <TechSection />
    </>
  );
}
