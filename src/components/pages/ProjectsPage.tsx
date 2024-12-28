"use client";

import "../ui/Projects/ProjectsPage.css";
import Filters from "../ui/Projects/Filters/Filters";
import { useState } from "react";
import Projects from "../ui/Projects/Projects/Projects";

export default function ProjectsPage() {
  const [tags, setTags] = useState<Tags>({
    search: "",
    scale: [],
    category: [],
    technology: [],
  });

  return (
    <main className="projects-page">
      <div className="container">
        <Filters setTags={setTags} />
        <Projects tags={tags} />
      </div>
    </main>
  );
}
