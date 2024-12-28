import Image from "next/image";
import "./DescriptionSection.css";

type DescriptionSectionProps = {
  heading?: string;
  theme: string;
  position: string;
  video: boolean;
  videoStyle?: {};
  animation: boolean;
  preview: string;
  text: string[];
};

export default function DescriptionSection({
  heading,
  theme,
  position,
  video,
  videoStyle,
  animation,
  preview,
  text,
}: DescriptionSectionProps) {
  return (
    <section className={`project-description ${theme} ${position}`}>
      <div>
        <div className="container">
          {video ? (
            <video
              className="preview"
              src={preview}
              style={videoStyle ? videoStyle : {}}
              autoPlay
              muted
              loop
              disablePictureInPicture
            ></video>
          ) : (
            <Image
              className={`preview ${animation ? "animate" : ""}`}
              alt={heading ? heading : "Project Image"}
              width={16}
              height={9}
              layout="responsive"
              src={preview}
            />
          )}
          <div className="description-content">
            {heading ? <h1>{heading}</h1> : null}
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
