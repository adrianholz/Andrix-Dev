import { CSSProperties } from "react";

export const services = [
  {
    name: "UX/UI Design",
    file: "uxui",
    short: "UX/UI",
    description:
      "Leverage the power of colors, typography, spacing and form to create the experience you desire for your users. Every single element and detail of your interface should have intention and purpose. So let's make them count.",
    process:
      "The first step of every UX/UI project is understanding the project's goals and target audience. This is followed by research, wireframing, prototyping, and a continuous testing process with potential users.",
    position: "bottom -70px right -80px",
  },
  {
    name: "Digital Artwork",
    file: "artwork",
    short: "Artwork",
    description:
      "With so little time to capture your audience's attention, you need to make sure your visuals are on point. That's what maximizes conversions and makes your brand stand out. Let's make it happen with stunning digital design.",
    process:
      "After reviewing the project's requirements, we start by creating a mood board to set the visual direction. Then it's time to sketch and make sure we got the right concept before applying the textures and adjustments.",
    position: "bottom -70px right -80px",
  },
  {
    name: "Visual Identity",
    file: "brand",
    short: "Brand",
    description:
      "Communication is key. By defining rules and foundations for designing your company's projects, we convey your ideas, values, and purposes. Visual identity brings your brand to life and also enhances client relationship.",
    process:
      "Starting out by analyzing your target audience and your brand's core values, we craft an effective logo design and proceed to choosing the brand's color palette, typography and imagery.",
    position: "bottom -70px right -80px",
  },
  {
    name: "Social Media",
    file: "social",
    short: "Social",
    description:
      "The digital space couldn't get more crowded nowadays. An effective social media strategy means that you can engage and, most importantly, retain your audience. Reach out to your audience and communicate with confidence.",
    process:
      "The first step is to determine what do you want to communicate and to whom. Then we create post prototypes based on your brand identity, refine them, and publish consistently, always keeping track of the results.",
    position: "bottom -70px right -80px",
  },
  {
    name: "Package Design",
    file: "packaging",
    short: "Packaging",
    description:
      "Your products deserve the same love as your digital content. Packaging design is there to make sure that, besides being functional, your products stand out on the shelves and in your customers' minds.",
    process:
      "We first have to determine the shape and size of the package, and in which material it will be applied to. Then we analyze the product itself and how we can convey, visually, the experience that's inside of the package.",
    position: "bottom -70px right -80px",
  },
  {
    name: "Video Editing",
    file: "video",
    short: "Video",
    description:
      "Having quality content also means having the possibility of refining it and turning it into something even more engaging. With video editing, turn your raw footage into a polished and professional visual experience.",
    process:
      "After sharing the raw material, we start by selecting the media that will be used, and then proceed to the stage of adding transitions, effects, color correction, masking and subtitles. Final step is exporting.",
    position: "bottom -70px right -80px",
  },
];

export const boxes = [
  {
    title: "Simple",
    styles: {
      previewImage: {
        background: "url('assets/img/webp/simple.webp') center / cover",
      },
    },
  },
  {
    title: "Elegant",
    styles: {
      preview: {
        borderRadius: "0",
        boxShadow: "0 5px 20px rgba(17, 12, 46, .15)",
      },
      previewImage: {
        background: "url('assets/img/webp/elegant.webp') center / cover",
        borderRadius: "0",
        boxShadow: "inset 0 0 0 8px var(--w1)",
      },
      content: {
        fontFamily: "var(--font-lora)",
      },
      button: {
        borderRadius: "0",
        textTransform: "uppercase",
        fontFamily: "var(--font-poppins)",
      },
    },
  },
  {
    title: "Fun",
    styles: {
      preview: {
        borderRadius: "20px",
        boxShadow:
          "0 48px 100px rgba(17, 12, 46, 0), inset 0 0 0 4px var(--b1)",
      },
      previewImage: {
        background: "url('assets/img/webp/fun.webp') center / cover",
        borderRadius: "20px",
        boxShadow: "inset 0 0 0 4px var(--b1)",
        transform: "scale(1.07)",
        margin: "0 10px 0 9px",
      },
      content: {
        fontFamily: "var(--font-livvic)",
      },
      button: {
        borderRadius: "40px",
        background: "0 0",
        color: "var(--b1)",
        border: "3px solid var(--b1)",
        fontWeight: "700",
        transition: ".2s ease",
      },
    },
  },
  {
    title: "Modern",
    styles: {
      preview: {
        borderRadius: "0",
        boxShadow:
          "0 48px 100px rgba(17, 12, 46, .1), inset 0 140px 0 var(--b2)",
      },
      previewImage: {
        background: "url('assets/img/webp/modern.webp') center / cover",
        borderRadius: "0",
        boxShadow: "8px 8px 0 var(--b2)",
        transform: "scale(.8) translateY(-15px)",
      },
      content: {
        fontFamily: "var(--font-robotoMono)",
      },
      title: {
        color: "var(--w1)",
      },
      button: {
        borderRadius: "0",
        textTransform: "uppercase",
      },
    },
  },
] as {
  title: string;
  styles: {
    preview: CSSProperties;
    previewImage: CSSProperties;
    content: CSSProperties;
    title?: CSSProperties;
    button: CSSProperties;
  };
}[];

export const tools = [
  {
    name: "Photoshop",
    blur: "#75b2df",
    drop: "#0091ff70",
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "Illustrator",
    blur: "#e04e39",
    drop: "#ff620070",
    link: "https://www.adobe.com/ca/products/illustrator.html",
  },
  {
    name: "InDesign",
    blur: "#fd4684",
    drop: "#fd468470",
    link: "https://www.adobe.com/ca/products/indesign.html",
  },
  {
    name: "Premiere Pro",
    blur: "#6f53fc",
    drop: "#6f53fc70",
    link: "https://www.adobe.com/products/premiere.html",
  },
  {
    name: "After Effects",
    blur: "#6f53fc",
    drop: "#6f53fc70",
    link: "https://www.adobe.com/products/aftereffects.html",
  },
  {
    name: "Lightroom",
    blur: "#75b2df",
    drop: "#0091ff70",
    link: "https://www.adobe.com/ca/products/photoshop-lightroom.html",
  },
  {
    name: "Adobe XD",
    blur: "#fd4684",
    drop: "#ff3bf270",
    link: "https://www.adobe.com/products/xd.html",
  },
  {
    name: "Vegas Pro",
    blur: "#4297ff",
    drop: "#4297ff70",
    link: "https://www.vegascreativesoftware.com/us/vegas-pro/",
  },
  {
    name: "Figma",
    blur: "#75b2df",
    drop: "#0091ff70",
    link: "https://www.figma.com",
  },
  {
    name: "Axure RP",
    blur: "#75b2df",
    drop: "#2be04070",
    link: "https://www.axure.com",
  },
  {
    name: "Coreldraw",
    blur: "#75b2df",
    drop: "#ffef0070",
    link: "https://www.coreldraw.com",
  },
  {
    name: "Davinci Resolve",
    blur: "#75b2df",
    drop: "#ffffff70",
    link: "https://www.blackmagicdesign.com/products/davinciresolve/",
  },
];
