import Image from "next/image";
import "./Footer.css";
import Link from "next/link";
import { useContext } from "react";
import { ServiceContext } from "../../app/ServiceContext";
import { ContactContext } from "../../app/ContactContext";
import TransitionLink from "../ui/TransitionLink";

export default function Footer({ type }: { type?: string }) {
  const { blurRefs } = useContext(ServiceContext)!;
  const { setContact } = useContext(ContactContext)!;

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <Link href="/">
            <Image
              src="/assets/img/svg/Andrix.svg"
              height={124.8}
              width={160}
              alt="Andrix Logo"
            />
          </Link>
          <div className="footer-contact">
            <h2>Contact</h2>
            <a href="tel:+16046792058">+1 (604) 679-2058</a>
            <a href="mailto:adrian.holzschuh@gmail.com">
              adrian.holzschuh@gmail.com
            </a>
            <span></span>
            <address>
              Vancouver, BC <br />
              Canada
            </address>
            <span></span>
            <ul className="social-media">
              <li>
                <a href="https://github.com/adrianholz" target="_blank">
                  <Image
                    src="/assets/img/svg/github.svg"
                    height={35}
                    width={35}
                    alt="Github Logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adrianholzschuh/"
                  target="_blank"
                >
                  <Image
                    src="/assets/img/svg/linkedin.svg"
                    height={35}
                    width={35}
                    alt="LinkedIn Logo"
                  />
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/adrianholzschuh" target="_blank">
                  <Image
                    src="/assets/img/svg/dribbble.svg"
                    height={35}
                    width={35}
                    alt="Dribbble Logo"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h2>Andrix</h2>
            <ul>
              <li>
                <TransitionLink name="Home" href="/">
                  Homepage
                </TransitionLink>
              </li>
              <li>
                <TransitionLink name="Projects" href="/projects">
                  Projects
                </TransitionLink>
              </li>
              <li>
                <TransitionLink name="About me" href="/about">
                  About me
                </TransitionLink>
              </li>
              <li>
                <TransitionLink name="News" href="/news">
                  News
                </TransitionLink>
              </li>
              <li>
                <p onClick={() => setContact(true)}>Contact</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>Andrix Design © All rights reserved.</p>
        </div>
      </div>
      <div
        className={`blur ${type ? type : "uxui"} active`}
        ref={(el) => {
          if (el && blurRefs.current) {
            blurRefs.current[0] = el;
          }
        }}
      ></div>
    </footer>
  );
}
