import Link from "next/link";
import { CSSProperties } from "react";
import "./TechSection.css";

export default function Tech({
  link,
  blur,
  drop,
  name,
}: {
  link: string;
  blur: string;
  drop: string;
  name: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="tech"
      style={
        {
          "--blur-color": blur,
          "--drop-color": drop,
        } as CSSProperties
      }
    >
      <img
        src={`/assets/img/svg/${name.toLowerCase().replaceAll(" ", "-")}.svg`}
        alt={`${name} Icon`}
      />
    </Link>
  );
}
