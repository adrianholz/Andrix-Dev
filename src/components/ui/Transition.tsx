import Marquee from "./Marquee";
import "./Transition.css";

export default function Transition() {
  return (
    <div id="transition" aria-hidden="true">
      <Marquee
        gap="10px"
        page="Andrix Design"
        title="Andrix Design"
        time="30s"
        reverse={false}
      />
      <div className="transition-title">
        <p></p>
      </div>
      <Marquee
        gap="10px"
        page="Andrix Design"
        title="Andrix Design"
        time="30s"
        reverse={true}
      />
    </div>
  );
}
