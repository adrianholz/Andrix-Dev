import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { services } from "../../../../data/home-data";
import "swiper/css";
import Post from "../Post/Post";
import { useContext } from "react";
import "./HeroSection.css";
import { ServiceContext } from "../../../../app/ServiceContext";
import { news } from "../../../../data/news-data";

export default function HeroSection() {
  const { titleRefs, imageRefs, service, handleTitleChange, blurRefs } =
    useContext(ServiceContext)!;

  return (
    <main className="hero">
      <div className="container">
        <span>Andrix is</span>
        <h1>
          <span>
            <i
              className="active opaque"
              ref={(el) => {
                if (el) {
                  titleRefs.current[0] = el;
                }
              }}
            >
              {service.name.split(" ")[0]}
            </i>
          </span>
          <span
            className="separator active opaque"
            ref={(el) => {
              if (el) {
                titleRefs.current[1] = el;
              }
            }}
          ></span>
          <span
            className="active opaque"
            ref={(el) => {
              if (el) {
                titleRefs.current[2] = el;
              }
            }}
          >
            {service.name.split(" ")[1]}
          </span>
        </h1>
        <div className="orbit">
          <Image
            src="/assets/img/webp/orbit.webp"
            height={650}
            width={650}
            alt="Orbit Decorator"
            className="orbit-rings"
          />
          {services.map((item, index) => (
            <Image
              src={`/assets/img/svg/${item.file}.svg`}
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
              style={
                {
                  "--start-angle": `${60 * index}deg`,
                } as React.CSSProperties
              }
              onMouseOver={() => {
                handleTitleChange(item);
              }}
              key={index}
            />
          ))}
        </div>
        <div
          className={`blur uxui active`}
          ref={(el) => {
            if (el && blurRefs.current) {
              blurRefs.current[1] = el;
            }
          }}
        ></div>
      </div>
      <Swiper
        spaceBetween={0}
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
