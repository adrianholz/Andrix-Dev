"use client";

import { ServiceContext } from "../../../../app/ServiceContext";
import Image from "next/image";
import { MutableRefObject, RefObject, useContext } from "react";

type ServicesProps = {
  videoRef: RefObject<HTMLDivElement>;
  service: Service;
  services: Service[];
  activeIndex: number;
  handleTitleChange: (arg: Service) => void;
  imageRefs: MutableRefObject<HTMLElement[]>;
};

export default function Services({
  videoRef,
  service,
  services,
  activeIndex,
  handleTitleChange,
  imageRefs,
}: ServicesProps) {
  const { blurRefs } = useContext(ServiceContext)!;
  return (
    <div className="services-wrapper">
      <div className="window">
        <div className="video-transition" ref={videoRef}>
          <video muted src="/assets/video/intro.mp4" playsInline></video>
        </div>
        <div
          style={{
            background: `var(--b1) url(/assets/img/svg/${service.file}-dark.svg) no-repeat ${service.position} / 500px`,
          }}
          className="window-inner"
        >
          <div className="title">
            <div>
              <Image
                src={`assets/img/svg/${service.file}.svg`}
                width={130}
                height={130}
                alt={`${service.name} Icon`}
              />
            </div>
            <h2>
              {service.name.split(" ")[0]} <br />
              <span>{service.name.split(" ")[1]}</span>
            </h2>
          </div>
          <p>{service.description}</p>
          <div className="process">
            <video
              muted
              autoPlay
              loop
              src={`assets/video/${service.file}.webm`}
            ></video>
            <div>
              <span>Design Process</span>
              <p>{service.process}</p>
            </div>
          </div>
          <div
            className="blur uxui active"
            ref={(el) => {
              if (el && blurRefs.current) {
                blurRefs.current[3] = el;
              }
            }}
          ></div>
        </div>
      </div>
      <div className="nav">
        {services.map((item, index) => (
          <div
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleTitleChange(item)}
            ref={(el) => {
              if (el) {
                imageRefs.current[index + 6] = el;
              }
            }}
          >
            <h2>
              {item.name.split(" ")[0]} <br />
              {item.name.split(" ")[1]}
            </h2>
            <span>{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
