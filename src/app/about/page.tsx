"use client";

import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import AboutPage from "../../components/pages/AboutPage";
import { ContactContextProvider } from "../ContactContext";
import { ServiceContextProvider } from "../ServiceContext";
import Marquee from "../../components/ui/Marquee";
import SEO from "../SEO";

export default function About() {
  return (
    <SEO
      title="Adrian Holzschuh | Andrix Design"
      description="Hello! My name is Adrian Holzschuh, and I am the and designer responsible for projects here at Andrix Design. Here are the digital design and UX/UI projects I've worked on."
      url="https://www.andrix.design/about"
    >
      <ContactContextProvider>
        <ServiceContextProvider>
          <Marquee
            gap="10px"
            page="About me"
            title="Andrix Development"
            time="30s"
            reverse={false}
          />
          <Header />
          <AboutPage />
          <Footer />
          <Marquee
            gap="10px"
            page="About me"
            title="Andrix Development"
            time="30s"
            reverse={true}
          />
        </ServiceContextProvider>
      </ContactContextProvider>
    </SEO>
  );
}
