import Image from "next/image";
import "./Post.css";
import Link from "next/link";
import { useEffect, useState } from "react";

type PostProps = {
  title: string;
  image: string;
  alt: string;
  preview: string;
  author: string;
  time: string;
};

export default function Post({
  title,
  image,
  alt,
  preview,
  author,
  time,
}: PostProps) {
  const [mobile, setMobile] = useState(false);

  const call = (
    <div className="call">
      <div className="meta">
        <div>
          <Image
            src="/assets/img/svg/user.svg"
            alt="User Icon"
            width={25}
            height={25}
          />
          <p>{author}</p>
        </div>
        <div>
          <Image
            src="/assets/img/svg/clock.svg"
            alt="Time Icon"
            width={25}
            height={25}
          />
          <p>{time}</p>
        </div>
      </div>
      <Link href={`/news/${title.toLowerCase().replaceAll(" ", "-")}`}>
        Read post
      </Link>
    </div>
  );

  useEffect(() => {
    function handleResize() {
      if (window.matchMedia("(max-width: 1060px)").matches) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [preview]);

  return (
    <div className="post">
      <h2>{title}</h2>
      <div className="content">
        <div className="preview">
          <Image src={image} alt={alt} width={512} height={288} />
          <div className="preview-inner">
            <p>
              {mobile ? preview.split(" ").slice(0, 18).join(" ") : preview}...
            </p>
            {mobile ? call : null}
          </div>
          {!mobile ? call : null}
        </div>
      </div>
    </div>
  );
}
