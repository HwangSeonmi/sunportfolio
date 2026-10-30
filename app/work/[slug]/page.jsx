import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.name || "Project" };
}
export default async function Project({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <>
      <section className="case-intro section-shell">
        <Link href="/work" className="text-link">
          ← ALL PROJECTS
        </Link>
        <div className="case-heading">
          <p className="eyebrow">
            {project.type} / {project.year}
          </p>
          <h1>
            {project.name}
            <span className="accent">.</span>
          </h1>
          <p>{project.korean}</p>
        </div>
        <div className="case-info">
          <p>{project.description}</p>
          <div>
            <span className="eyebrow">TOOLS & FOCUS</span>
            <ul>
              {project.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className="case-actions">
            {project.site && (
              <a
                className="pill-link"
                href={project.site}
                target="_blank"
                rel="noreferrer"
              >
                LIVE WEBSITE ↗
              </a>
            )}
            {project.behance && (
              <a
                className="pill-link"
                href={project.behance}
                target="_blank"
                rel="noreferrer"
              >
                BEHANCE ↗
              </a>
            )}
            {project.figma && (
              <a
                className="text-link"
                href={project.figma}
                target="_blank"
                rel="noreferrer"
              >
                FIGMA ↗
              </a>
            )}
          </div>
        </div>
      </section>
      <div
        className={`case-visual project-${project.slug}`}
        style={{ background: project.color }}
      >
        <img
          src={`/images/${project.image}`}
          alt={`${project.name} 디자인 작업 화면`}
        />
      </div>
      <section className="case-story section-shell">
        <article data-reveal>
          <span className="eyebrow">01 / OVERVIEW</span>
          <div>
            <h2>프로젝트 소개</h2>
            <p>{project.summary}</p>
          </div>
        </article>
        <article data-reveal>
          <span className="eyebrow">02 / FOCUS</span>
          <div>
            <h2>집중한 부분</h2>
            <p>{project.focus}</p>
          </div>
        </article>
        <article data-reveal>
          <span className="eyebrow">03 / APPROACH</span>
          <div>
            <h2>디자인에서 구현으로</h2>
            <p>{project.approach}</p>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </article>
      </section>
      <section className="next-project section-shell">
        <p className="eyebrow">NEXT PROJECT / {next.number}</p>
        <Link href={`/work/${next.slug}`}>
          {next.name}
          <span>↗</span>
        </Link>
      </section>
    </>
  );
}
