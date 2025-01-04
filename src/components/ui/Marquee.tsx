import "./Marquee.css";

type MarqueeProps = {
  gap: string;
  title: string;
  page?: string;
  time: string;
  reverse: boolean;
};

export default function Marquee({
  gap,
  title,
  page,
  time,
  reverse,
}: MarqueeProps) {
  return (
    <div
      className="marquee"
      style={
        {
          "--gap": gap,
          "--time": time,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <div
        className="marquee-content"
        style={reverse ? { animationDirection: "reverse" } : {}}
      >
        <span>{page} ▪ </span>
        <span>{title} ▪ </span>
        <span>{page} ▪ </span>
        <span>{title} ▪ </span>
        <span>{page} ▪ </span>
        <span>{title} ▪ </span>
      </div>
      <div
        className="marquee-content"
        style={reverse ? { animationDirection: "reverse" } : {}}
      >
        <span>{page} ▪ </span>
        <span>{title} ▪ </span>
        <span>{page} ▪ </span>
        <span>{title} ▪ </span>
        <span>{page} ▪ </span>
        <span>{title} ▪ </span>
      </div>
    </div>
  );
}
