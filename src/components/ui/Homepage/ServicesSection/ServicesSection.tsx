import { ServiceContext } from "../../../../app/ServiceContext";
import Heading from "../Heading/Heading";
import Interfaces from "../Interfaces/Interfaces";
import Services from "../Services/Services";
import Title from "../Title/Title";
import "./ServicesSection.css";
import { useContext } from "react";
import { services } from "../../../../data/home-data";

export default function ServicesSection() {
  const { videoRef, service, activeIndex, handleTitleChange, imageRefs } =
    useContext(ServiceContext)!;

  return (
    <section className="services">
      <Heading
        theme="dark"
        heading="What I do"
        subheading="I'll make your very own"
        highlight="Personalized Design"
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
              videoRef={videoRef}
              activeIndex={activeIndex}
              service={service}
              services={services}
              imageRefs={imageRefs}
              handleTitleChange={handleTitleChange}
            />

            <Title
              icon="uxui-dark"
              alt="UX/UI"
              title="Your interface, your way."
              description="Captivating digital projects owe much of their success to their
          interface. With Andrix, you can be sure you'll convey the
          message you desire to your users, ensuring their experience
          aligns with your unique style."
            />
            <Interfaces />
          </div>
        </div>
      </div>
    </section>
  );
}
