"use client";

import "../../../components/ui/News/Post.css";
import { ContactContextProvider } from "../../../app/ContactContext";
import { ServiceContextProvider } from "../../../app/ServiceContext";
import Footer from "../../../components/layout/Footer";
import Header from "../../../components/layout/Header";
import Marquee from "../../../components/ui/Marquee";
import { news } from "../../../data/news-data";
import Image from "next/image";
import { use } from "react";
import SEO from "../../../app/SEO";

type PostParams = {
  post: string;
};

export default function Post({ params }: { params: Promise<PostParams> }) {
  const { post } = use(params);

  const postMatch = news.filter((item) => {
    const fullName = item.title.toLowerCase().replaceAll(" ", "-");
    return fullName.includes(post);
  });

  const postData = postMatch[0];

  return (
    <SEO
      title={`${postData.title} | Andrix Design`}
      description={postData.sections[0].content!}
      url={`https://www.andrix.design/news/${postData.title
        .toLowerCase()
        .replaceAll(" ", "-")}`}
    >
      <ContactContextProvider>
        <ServiceContextProvider>
          <Marquee
            gap="10px"
            page={postData.title}
            title="Andrix Development"
            time="30s"
            reverse={false}
          />
          <Header type={postData.type} />
          <div className="single-post">
            <div className="container">
              <Image
                width={16}
                height={9}
                layout="responsive"
                alt={postData.title}
                src={postData.banner}
              />
              <div className="post-intro">
                <h1>{postData.title}</h1>
                <div className="post-meta">
                  <div>
                    <img src="/assets/img/svg/user.svg" alt="Author Icon" />
                    <p>{postData.author}</p>
                  </div>
                  <div>
                    <img src="/assets/img/svg/clock.svg" alt="Time Icon" />
                    <p>{postData.time}</p>
                  </div>
                </div>
              </div>
              {postData.sections.map((section, index) => {
                switch (section.title) {
                  case "ParagraphSection":
                    return <p key={index}>{section.content}</p>;
                  case "ImageSection":
                    return (
                      <Image
                        width={16}
                        height={9}
                        layout="responsive"
                        alt={"alt" in section ? (section.alt! as string) : ""}
                        src={
                          "image" in section ? (section.image! as string) : ""
                        }
                        key={index}
                        className="post-media"
                      />
                    );
                  case "VideoSection":
                    return (
                      <video
                        src={
                          "video" in section ? (section.video! as string) : ""
                        }
                        autoPlay
                        muted
                        loop
                        disablePictureInPicture
                        key={index}
                        className="post-media"
                      ></video>
                    );
                  case "CallSection":
                    return (
                      <div className="post-calls" key={index}>
                        {section.calls?.map((call, index) => (
                          <a href={call.link} key={index} target="_blank">
                            {call.call}
                          </a>
                        ))}
                      </div>
                    );
                }
              })}
            </div>
          </div>
          <Footer type={postData.type} />
          <Marquee
            gap="10px"
            page={postData.title}
            title="Andrix Development"
            time="30s"
            reverse={true}
          />
        </ServiceContextProvider>
      </ContactContextProvider>
    </SEO>
  );
}
