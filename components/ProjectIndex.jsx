"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
export default function ProjectIndex({ projects }) {
  const [filter, setFilter] = useState("All");
  const filtered = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );
  return (
    <>
      <div className="filter-bar">
        <div role="group" aria-label="프로젝트 유형">
          {["All", "Web", "UI/UX"].map((label) => (
            <button
              key={label}
              aria-pressed={filter === label}
              onClick={() => setFilter(label)}
            >
              {label}
              <sup>
                {label === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === label).length}
              </sup>
            </button>
          ))}
        </div>
        <span className="eyebrow">DESIGN + CODE / 2024</span>
      </div>
      <div role="status" className="sr-only">
        {filter} 프로젝트 {filtered.length}개
      </div>
      <div className="project-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
