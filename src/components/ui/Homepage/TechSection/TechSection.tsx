import Heading from "../Heading/Heading";
import "./TechSection.css";
import { tools } from "../../../../data/home-data";
import Tech from "./Tech";

export default function TechSection() {
  return (
    <>
      <section className="techs">
        <Heading
          theme="dark"
          heading="Technologies"
          subheading="These are the technologies"
          highlight="I have worked with"
        />
        <div className="container">
          {tools.map((tool, index) => (
            <Tech
              link={tool.link}
              blur={tool.blur}
              drop={tool.drop}
              name={tool.name}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}
