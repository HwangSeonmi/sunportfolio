import Link from "next/link";
export default function ProjectCard({ project, large = false }) {
  return (
    <article
      className={`project-card${large ? " project-card-large" : ""}`}
      data-reveal
    >
      <Link
        href={`/work/${project.slug}`}
        className={`project-image project-${project.slug}`}
        style={{ "--project-color": project.color }}
        aria-label={`${project.name} 프로젝트 자세히 보기`}
      >
        <span className="project-number">/{project.number}</span>
        <img
          src={`/images/${project.image}`}
          alt={`${project.korean} 작업 화면`}
          loading="lazy"
        />
        <span className="case-label">
          VIEW PROJECT <span>↗</span>
        </span>
      </Link>
      <div className="project-meta">
        <div>
          <p className="eyebrow">
            {project.type} <span> / {project.year}</span>
          </p>
          <h3>
            <Link href={`/work/${project.slug}`}>{project.name}</Link>
          </h3>
          <p className="project-caption">{project.korean}</p>
        </div>
        <Link
          href={`/work/${project.slug}`}
          className="circle-link"
          aria-label={`${project.name} 상세 보기`}
        >
          ↗
        </Link>
      </div>
    </article>
  );
}
