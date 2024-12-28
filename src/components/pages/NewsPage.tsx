"use client";

import { news } from "../../data/news-data";
import PostPreview from "../ui/News/PostPreview/PostPreview";
import "../ui/News/NewsPage.css";

export default function NewsPage() {
  return (
    <main className="news-page">
      <div className="container">
        {news.map((post, index) => (
          <PostPreview
            title={post.title}
            banner={post.banner}
            author={post.author}
            time={post.time}
            contentPreview={post.sections[0].content!}
            type={post.type}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
