type HeadingProps = {
  theme: string;
  heading: string;
  subheading: string;
  highlight: string;
  children?: React.ReactNode;
};

import "./Heading.css";

export default function Heading({
  theme,
  heading,
  subheading,
  highlight,
  children,
}: HeadingProps) {
  return (
    <div className={`heading ${theme}`}>
      <h1>{heading}</h1>
      <div>
        <h2>
          {subheading} <span>{highlight}</span>
        </h2>
        {children ? children : null}
      </div>
    </div>
  );
}
