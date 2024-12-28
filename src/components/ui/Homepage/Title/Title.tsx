"use client";

import Image from "next/image";
import "./Title.css";

type TitleProps = {
  icon: string;
  alt: string;
  title: string;
  description: string;
};

export default function Title({ icon, alt, title, description }: TitleProps) {
  return (
    <>
      <div className="title">
        <div className="icon">
          <Image
            src={`assets/img/svg/${icon}.svg`}
            height={35}
            width={35}
            alt={`${alt} Icon`}
          />
        </div>
        <h3>{title}</h3>
      </div>
      <p className="service-description">{description}</p>
    </>
  );
}
