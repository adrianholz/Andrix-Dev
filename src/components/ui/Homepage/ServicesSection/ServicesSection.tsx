import { ServiceContext } from "../../../../app/ServiceContext";
import Heading from "../Heading/Heading";
import Services from "../Services/Services";
import Title from "../Title/Title";
import "./ServicesSection.css";
import { useContext } from "react";
import { services } from "../../../../data/home-data";

export default function ServicesSection() {
  const { service, activeIndex, handleTitleChange, imageRefs } =
    useContext(ServiceContext)!;

  return (
    <section className="services">
      <Heading
        theme="dark"
        heading="What I do"
        subheading="I'll build you the software"
        highlight="To suit your needs"
      />
      <div className="content">
        <div className="container">
          <div className="all-services">
            <Title
              icon="compass"
              alt="Compass"
              title="Made from scratch, without templates."
              description="In the midst of a digital world filled with ready-made and adaptable templates, it's easy to become stagnant and end up with a generic design. My proposal is to precisely understand your needs, creating a tailor-made project, just for you."
            />

            <Services
              activeIndex={activeIndex}
              service={service}
              services={services}
              imageRefs={imageRefs}
              handleTitleChange={handleTitleChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
