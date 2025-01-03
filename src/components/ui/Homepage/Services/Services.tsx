"use client";

import { ServiceContext } from "../../../../app/ServiceContext";
import Image from "next/image";
import { MutableRefObject, RefObject, useContext } from "react";
import TypewriterComponent from "typewriter-effect";

type ServicesProps = {
  service: Service;
  services: Service[];
  activeIndex: number;
  handleTitleChange: (arg: Service) => void;
  imageRefs: MutableRefObject<HTMLElement[]>;
};

export default function Services({
  service,
  services,
  activeIndex,
  handleTitleChange,
  imageRefs,
}: ServicesProps) {
  const { serviceTypewriterRef, blurRefs } = useContext(ServiceContext)!;
  return (
    <div className="services-inner">
      <div className="terminal">
        <div className="terminal-header">
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h2>Andrix Terminal</h2>
          <span></span>
        </div>
        <div className="terminal-inner">
          <TypewriterComponent
            onInit={(typewriter) => {
              serviceTypewriterRef.current = typewriter;
              typewriter
                .changeDelay(30)
                .typeString(
                  "<h2>Welcome to the Andrix Terminal.</h2>" + "<br><br>"
                )
                .typeString(
                  "<p>Please click one of the service icons to get started.</p>"
                )
                .start();
            }}
          />
          <video
            src={`/assets/video/retroverse.webm`}
            autoPlay
            muted
            loop
            disablePictureInPicture
          ></video>
          <img src={`/assets/img/svg/${service.file}.svg`} alt={service.name} />
        </div>
      </div>
      <div className="service-icons">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-icon ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleTitleChange(service)}
            ref={(el) => {
              if (el) {
                imageRefs.current[index + 6] = el;
              }
            }}
          >
            <Image
              src={`/assets/img/svg/${service.file}.svg`}
              alt={service.name}
              width={40}
              height={40}
            />
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
      <div
        className="blur code active"
        ref={(el) => {
          if (el && blurRefs.current) {
            blurRefs.current[4] = el;
          }
        }}
      ></div>
    </div>
  );
}
