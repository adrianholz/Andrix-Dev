import Image from "next/image";
import "./InfoSection.css";

export default function InfoSection() {
  const birthDate = new Date("2002-07-17");

  const calculateAge = () => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());
    if (!isBirthdayPassed) {
      age--;
    }
    return age;
  };

  return (
    <section className="about-me">
      <div className="container">
        <div className="summary">
          <h1>About me</h1>
          <div className="info">
            <div className="quote">
              <Image
                width={230}
                height={230}
                alt="Adrian Holzschuh"
                src={"/assets/img/webp/adrianholzschuhpf.webp"}
              />
              <div>
                <span>How'd you describe your work?</span>
                <p>
                  “My goal is to bring satisfaction not only to my clients in
                  the form of results but also to the users of my projects in
                  the form of experience”.
                </p>
              </div>
            </div>
            <p>
              Hello! My name is <strong>Adrian Holzschuh</strong>, and I am the
              and designer responsible for projects here at{" "}
              <strong>Andrix Design</strong>. <br />
              <br />
              Being interested in technology from a very young age, I have
              always been fascinated by the possibility of externalizing my
              creativity through digital means. As of today, I have been working
              with graphic and digital design for over 5 years, and am happy to
              say that I've been able to help many clients achieve their goals
              through my work. Through Andrix, I can now showcase the skills
              I've acquired over the years and help you achieve the best digital
              presence possible.
            </p>
          </div>
        </div>
        <div className="information">
          <h1>Information</h1>
          <div className="information-inner">
            <div>
              <span>Specializations</span>
              <p>
                Graphic, Digital <br />
                and UX/UI Design
              </p>
            </div>
            <div>
              <div>
                <span>Born</span>
                <p>July 17th</p>
                <span>Age</span>
                <p>{`${calculateAge()} years`}</p>
              </div>
              <div>
                <span>From</span>
                <p>São Paulo, SP</p>
                <span>Currently in</span>
                <p>Vancouver, BC</p>
              </div>
            </div>
            <div>
              <span>E-mail</span>
              <p>
                <a href="mailto:adrian.holzschuh@gmail.com">
                  adrian.holzschuh@gmail.com
                </a>
              </p>
              <span>Phone</span>
              <p>
                <a href="tel:16046792058">+1 (604) 679-2058</a>
              </p>
            </div>
            <div>
              <a
                href="https://www.facebook.com/andrix.holzschuh/"
                target="_blank"
              >
                <img src="/assets/img/svg/facebook.svg" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/adrianholzschuh/"
                target="_blank"
              >
                <img src="/assets/img/svg/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://www.youtube.com/@andrixdesign" target="_blank">
                <img src="/assets/img/svg/youtube.svg" alt="YouTube" />
              </a>
              <a
                href="https://discordapp.com/users/315615727031943168"
                target="_blank"
              >
                <img src="/assets/img/svg/discord.svg" alt="Discord" />
              </a>
              <a
                href="https://www.linkedin.com/in/adrianholzschuh/"
                target="_blank"
              >
                <img src="/assets/img/svg/linkedin.svg" alt="Linkedin" />
              </a>
              <a href="https://github.com/adrianholz" target="_blank">
                <img src="/assets/img/svg/github.svg" alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
