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
      title="Andrix Dev | Front-End Development"
      description="Andrix Dev is an initiative that specializes in Front-End Development. Andrix is Website Development, Digital Commerce, Web Applications and more."
      url="https://www.andrix.dev"
    >
      <Marquee
        gap="10px"
        page="Homepage"
        title="Andrix Development"
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
        title="Andrix Development"
        time="30s"
        reverse={true}
      />
    </SEO>
  );
}
