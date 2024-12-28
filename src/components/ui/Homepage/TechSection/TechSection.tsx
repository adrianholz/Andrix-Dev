import Link from "next/link";
import Heading from "../Heading/Heading";
import "./TechSection.css";
import { CSSProperties } from "react";
import { tools } from "../../../../data/home-data";

export default function TechSection() {
  return (
    <>
      <Heading
        theme="dark"
        heading="Technologies"
        subheading="These are the design tools"
        highlight="I have worked with"
      />
      <section className="techs">
        <div className="container">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.link}
              target="_blank"
              className="tech"
              style={
                {
                  "--blur-color": tool.blur,
                  "--drop-color": tool.drop,
                } as CSSProperties
              }
            >
              <img
                src={`/assets/img/svg/tech-${tool.name
                  .toLowerCase()
                  .replaceAll(" ", "-")}.svg`}
                alt={`${tool.name} Icon`}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
