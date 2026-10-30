import { projects } from "../../data/projects";
import ProjectIndex from "../../components/ProjectIndex";
export const metadata = { title: "Selected Work" };
export default function Work() {
  return (
    <div className="section-shell index-page">
      <div className="page-heading">
        <p className="eyebrow">01 / SELECTED WORKS</p>
        <h1 className="hero-line">
          <span>
            WORK<span className="accent">.</span>
            <sup>{projects.length}</sup>
          </span>
        </h1>
        <div className="page-heading-bottom">
          <p>
            브랜드의 감각을 화면으로,
            <br />
            화면의 가능성을 인터랙션으로.
          </p>
          <span>
            WEB DESIGN · UI/UX · PUBLISHING
            <br />
            2024 PORTFOLIO COLLECTION
          </span>
        </div>
      </div>
      <ProjectIndex projects={projects} />
    </div>
  );
}
