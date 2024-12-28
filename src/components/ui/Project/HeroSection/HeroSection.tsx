import "./HeroSection.css";

type ProjectHeroProps = {
  title: string;
  secondTitle: string;
  description?: string;
  style: Record<string, any>;
  preview: string;
  video: boolean;
  call?: { name: string; link: string }[];
};

export default function HeroSection({
  title,
  secondTitle,
  description,
  style,
  video,
  preview,
  call,
}: ProjectHeroProps) {
  return (
    <section
      style={
        video === false
          ? {
              background: `url(${preview}) no-repeat top`,
              backgroundSize: "cover",
            }
          : {}
      }
      className="project-hero"
    >
      <div>
        <h1 style={style}>
          {title}
          {secondTitle ? <span>{secondTitle}</span> : null}
        </h1>
        <p>{description}</p>
        {call && call.length > 0 && (
          <div className="project-calls">
            {call.map((action, index) => (
              <a href={action.link} key={index} target="_blank">
                {action.name}
              </a>
            ))}
          </div>
        )}
      </div>
      {video ? (
        <video
          src={preview}
          autoPlay
          muted
          loop
          disablePictureInPicture
        ></video>
      ) : null}
    </section>
  );
}
