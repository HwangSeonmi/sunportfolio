import Link from "next/link";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-top">
          <p className="eyebrow">
            <span className="status-dot" /> WEB DESIGNER & PUBLISHER
          </p>
          <span className="eyebrow">PORTFOLIO — SELECTED WORKS</span>
        </div>
        <h1 className="hero-title">
          <span className="hero-line">
            <span>THOUGHTFUL</span>
          </span>
          <span className="hero-line hero-second">
            <span>
              <em>by</em> DESIGN<span className="hero-period">.</span>
            </span>
          </span>
        </h1>
        <div className="hero-bottom">
          <div className="hero-statement">
            <span className="little-star">✳</span>
            <div>
              <p>
                디자인을 이해하고,
                <br />
                웹으로 구현합니다.
              </p>
              <span>황선미 · Web Designer & Publisher</span>
            </div>
          </div>
          <div className="hero-seal" aria-hidden="true">
            <img src="/images/main-berry2.png" alt="" />
            <span>
              A LITTLE
              <br />
              UNEXPECTED.
            </span>
          </div>
          <Link className="hero-scroll" href="#selected-work">
            <span>SCROLL TO EXPLORE</span>
            <span>↓</span>
          </Link>
        </div>
      </section>
      <section className="selected-section section-shell" id="selected-work">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">01 / THE WORK</p>
            <h2>
              Selected work<span className="accent">.</span>
              <sup>03</sup>
            </h2>
          </div>
          <p className="section-intro">
            보기 좋은 화면에서 한 걸음 더.
            <br />
            브랜드의 감각과 사용자의 경험을 연결합니다.
          </p>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.slug} project={project} large={i === 0} />
          ))}
        </div>
        <Link className="all-work-link" href="/work">
          <span>EXPLORE ALL WORK</span>
          <span className="all-work-count">{projects.length} PROJECTS</span>
          <span>↗</span>
        </Link>
      </section>
      <section className="manifesto section-shell">
        <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
        <div className="manifesto-grid" data-reveal>
          <h2>
            감각 있는 디자인.
            <br />
            탄탄한 구현.
            <br />
            <span>그 사이를 잇는 사람.</span>
          </h2>
          <div>
            <p>
              디자인과 개발을 조화롭게 연결해 더 나은 사용자 경험을 만들고 싶은
              황선미입니다.
            </p>
            <p>
              UI/UX와 시각 디자인을 경험하고, 웹 퍼블리싱으로 표현의 범위를
              넓혀왔습니다. 디테일을 살피는 시선과 직접 구현하는 태도로
              작업합니다.
            </p>
            <Link href="/about" className="text-link">
              MORE ABOUT ME <span>↗</span>
            </Link>
          </div>
        </div>
        <div className="expertise-strip">
          <span>WEB DESIGN</span>
          <i>✳</i>
          <span>UI/UX</span>
          <i>✳</i>
          <span>PUBLISHING</span>
          <i>✳</i>
          <span>VISUAL DESIGN</span>
        </div>
      </section>
      <section className="play-teaser section-shell">
        <div data-reveal>
          <p className="eyebrow">03 / OFF THE GRID</p>
          <h2>
            A curious
            <br />
            <em>side of me.</em>
          </h2>
          <p>
            브랜딩, 일러스트, 그래픽.
            <br />
            분야를 넘나드는 시선과 작은 실험들.
          </p>
          <Link href="/view" className="pill-link">
            ENTER THE PLAYGROUND ↗
          </Link>
        </div>
        <Link
          href="/view"
          className="play-collage"
          aria-label="디자인 작업물 둘러보기"
        >
          <img src="/images/view-somyeong.png" alt="소명 앱 디자인" />
          <img src="/images/view-so.png" alt="브랜드 팝업 디자인" />
          <span>
            PLAY
            <br />
            IS PART
            <br />
            OF THE
            <br />
            <em>PROCESS.</em>
          </span>
          <i>↗</i>
        </Link>
      </section>
    </>
  );
}
