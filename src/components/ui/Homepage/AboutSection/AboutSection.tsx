import Image from "next/image";
import Heading from "../Heading/Heading";
import "./AboutSection.css";
import { useContext } from "react";
import { ServiceContext } from "../../../../app/ServiceContext";
import TransitionLink from "../../TransitionLink";

export default function AboutSection() {
  const { blurRefs } = useContext(ServiceContext)!;
  return (
    <section className="about">
      <Heading
        theme="dark"
        heading="About me"
        subheading="Driven by the goal of"
        highlight="delivering the best"
      >
        <div className="about-inner">
          <span>Adrian</span>
          <Image
            src="/assets/img/webp/adrianholzschuhfull.webp"
            width={520}
            height={758}
            alt="Adrian Holzschuh"
          />
          <div className="info">
            <h3>
              Adrian <span>Holzschuh</span>
            </h3>
            <div>
              <h4>
                Technologist in <span>Graphic Design</span>
              </h4>
              <h4>
                Graduate in <span>Web Development</span>
              </h4>
              <h4>
                Graduate in <span>Systems Development</span>
              </h4>
            </div>
            <TransitionLink name="About me" href="/about">
              Read more about me
            </TransitionLink>
          </div>
        </div>
        <div
          className="blur code active"
          ref={(el) => {
            if (el && blurRefs.current) {
              blurRefs.current[6] = el;
            }
          }}
        ></div>
      </Heading>
    </section>
  );
}
