"use client";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Marquee from "../components/ui/Marquee";
import HomePage from "../components/pages/HomePage";
import { ServiceContextProvider } from "./ServiceContext";
import { ContactContextProvider } from "./ContactContext";
import SEO from "./SEO";

export default function Home() {
  return (
    <SEO
      title="Andrix Design | UX/UI & Digital Design"
      description="Andrix Design is an initiative that aims for the delivery of groundbreaking design and user experience. Andrix is UX/UI, Digital Design, Video Editing and more."
      url="https://www.andrix.design"
    >
      <Marquee
        gap="10px"
        page="Homepage"
        title="Andrix Design"
        time="30s"
        reverse={false}
      />
      <ContactContextProvider>
        <ServiceContextProvider>
          <Header />
          <HomePage />
          <Footer />
        </ServiceContextProvider>
      </ContactContextProvider>
      <Marquee
        gap="10px"
        page="Homepage"
        title="Andrix Design"
        time="30s"
        reverse={true}
      />
    </SEO>
  );
}
