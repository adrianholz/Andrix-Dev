"use client";

import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { ContactContextProvider } from "../ContactContext";
import { ServiceContextProvider } from "../ServiceContext";
import Marquee from "../../components/ui/Marquee";
import NewsPage from "../../components/pages/NewsPage";
import SEO from "../SEO";

export default function News() {
  return (
    <SEO
      title="News | Andrix Dev"
      description="Here at Andrix Dev, we're always up to something new. Check out our latest news and updates."
      url={`https://www.andrix.dev/news`}
    >
      <ContactContextProvider>
        <ServiceContextProvider>
          <Marquee
            gap="10px"
            page="Blog & News"
            title="Andrix Development"
            time="30s"
            reverse={false}
          />
          <Header />
          <NewsPage />
          <Footer />
          <Marquee
            gap="10px"
            page="Blog & News"
            title="Andrix Development"
            time="30s"
            reverse={true}
          />
        </ServiceContextProvider>
      </ContactContextProvider>
    </SEO>
  );
}
