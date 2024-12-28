import Link from "next/link";
import "./PostPreview.css";

type PostPreviewProps = {
  banner: string;
  title: string;
  author: string;
  time: string;
  contentPreview: string;
  type: string;
};

export default function PostPreview({
  banner,
  title,
  author,
  time,
  contentPreview,
  type,
}: PostPreviewProps) {
  return (
    <section className="post-preview">
      <img src={banner} alt={title} />
      <div className="post-content">
        <h1>{title}</h1>
        <p>{contentPreview}</p>
        <div className="post-info">
          <div className="post-meta">
            <div>
              <img src="/assets/img/svg/user.svg" alt="Author Icon" />
              <p>{author}</p>
            </div>
            <div>
              <img src="/assets/img/svg/clock.svg" alt="Time Icon" />
              <p>{time}</p>
            </div>
          </div>
          <Link href={`/news/${title.toLowerCase().replaceAll(" ", "-")}`}>
            Read Post
          </Link>
        </div>
      </div>
      <div className={`blur ${type} active`}></div>
    </section>
  );
}
