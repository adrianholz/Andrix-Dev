import Image from "next/image";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <main id="about">
      <div className="container about-inner">
        <span>Adrian</span>
        <div className="intro">
          <h1>
            Adrian <span>Holzschuh</span>
          </h1>
          <h2>Front-End Developer</h2>
          <div className="calls">
            <a
              href="/assets/files/pdf/Adrian Holzschuh Resume.pdf"
              target="_blank"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/adrianholzschuh/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <Image
          width={513}
          height={748}
          alt="Adrian Holzschuh"
          src="/assets/img/webp/adrianholzschuhfull.webp"
        />
      </div>
      <div className="blur code active"></div>
    </main>
  );
}
