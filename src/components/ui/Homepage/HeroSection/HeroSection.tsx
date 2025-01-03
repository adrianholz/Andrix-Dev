import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { services } from "../../../../data/home-data";
import "swiper/css";
import Post from "../Post/Post";
import { useContext, useRef } from "react";
import "./HeroSection.css";
import { ServiceContext } from "../../../../app/ServiceContext";
import { news } from "../../../../data/news-data";
import TypewriterComponent from "typewriter-effect";

export default function HeroSection() {
  const { imageRefs, service, handleTitleChange, typewriterRef, blurRefs } =
    useContext(ServiceContext)!;

  return (
    <main className="hero">
      <div className="container">
        <div>
          <span>Andrix is</span>
          <h1>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriterRef.current = typewriter;
                typewriter
                  .changeDelay(100)
                  .typeString("Front-End" + "<br>")
                  .typeString("Development")
                  .start();
              }}
            />
          </h1>
          <div className="orbit">
            <div className="orbit-images">
              {services.map((item, index) => (
                <Image
                  src={`/assets/img/svg/${item.file}.svg`}
                  style={{
                    animation: `wave 2s infinite alternate ease-in-out`,
                    animationDelay: `calc(${index} * -.5s)`,
                  }}
                  height={50}
                  width={50}
                  alt={`${item.name} Icon`}
                  className={`orbit-image ${
                    item.name === service.name ? "active" : ""
                  }`}
                  ref={(el) => {
                    if (el) {
                      imageRefs.current[index] = el;
                    }
                  }}
                  onMouseOver={() => {
                    handleTitleChange(item);
                  }}
                  key={index}
                />
              ))}
            </div>
            <div className="wave-container"></div>
          </div>
          <div
            className={`blur code active`}
            ref={(el) => {
              if (el && blurRefs.current) {
                blurRefs.current[2] = el;
              }
            }}
          ></div>
          <div
            className={`blur code active`}
            ref={(el) => {
              if (el && blurRefs.current) {
                blurRefs.current[3] = el;
              }
            }}
          ></div>
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        speed={800}
        slidesPerView="auto"
        centeredSlides
        grabCursor={true}
      >
        {news.map((post, index) => (
          <SwiperSlide key={index}>
            <Post
              title={post.title}
              image={post.banner}
              alt={post.title}
              preview={post.sections[0]
                .content!.split(" ")
                .slice(0, 42)
                .join(" ")}
              author={post.author}
              time={post.time}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
