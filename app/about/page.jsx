import Link from "next/link";
export const metadata = { title: "About Me" };
export default function About() {
  return (
    <div className="about-page">
      <section className="section-shell about-intro">
        <p className="eyebrow">02 / THE PERSON BEHIND THE WORK</p>
        <h1 className="hero-title">
          <span className="hero-line">
            <span>DESIGN EYE.</span>
          </span>
          <span className="hero-line">
            <span>
              <em>Builder’s</em> MIND<span className="accent">.</span>
            </span>
          </span>
        </h1>
        <div className="about-intro-grid">
          <div className="about-portrait">
            <img src="/images/sun.jpg" alt="SUNWORK 심볼" />
            <span>
              HWANG SEONMI
              <br />
              황선미
            </span>
            <i>✳</i>
          </div>
          <div className="about-copy">
            <h2>
              디자인의 의도를 이해하고,
              <br />
              끝까지 구현하는 사람.
            </h2>
            <p>
              안녕하세요. 웹 디자이너·웹 퍼블리셔 황선미입니다. UI/UX부터
              패키지, 브랜딩, 콘텐츠까지 다양한 디자인을 경험하며 시각적으로
              표현하는 힘을 길렀습니다.
            </p>
            <p>
              웹 디자인과 퍼블리싱을 공부하며, 디자인의 의도를 실제 화면과
              인터랙션으로 이어가는 일에 관심을 넓혔습니다. 감각과 구조가 함께
              작동하는 웹을 만들고 싶습니다.
            </p>
            <div className="about-actions">
              <a
                className="pill-link"
                href="/images/view-resume.png"
                target="_blank"
                rel="noreferrer"
              >
                VIEW RESUME ↗
              </a>
              <a className="text-link" href="mailto:tjsal117@gmail.com">
                GET IN TOUCH ↗
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="experience section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPERIENCE / LEARNING</p>
            <h2>
              The journey<span className="accent">.</span>
            </h2>
          </div>
          <p className="section-intro">
            다양한 디자인 경험 위에
            <br />
            웹을 구현하는 역량을 더합니다.
          </p>
        </div>
        <div className="timeline">
          <article data-reveal>
            <span>2017 — 2023.05</span>
            <div>
              <h3>UI/UX 디자이너</h3>
              <p>
                UI/UX, 웹·콘텐츠 디자인, 브랜드 아이덴티티, 패키지, 편집 및 제품
                디자인 등 다양한 시각 경험.
              </p>
            </div>
            <span>DESIGN EXPERIENCE</span>
          </article>
          <article data-reveal>
            <span>2023.11 — 2024.05</span>
            <div>
              <h3>웹 디자인 & 프론트엔드 교육</h3>
              <p>
                UI/UX 웹디자인·웹퍼블리셔·프론트엔드 전문가 양성과정. HTML, CSS,
                JavaScript를 활용한 웹 화면과 인터랙션 구현.
              </p>
            </div>
            <span>LEARNING & PRACTICE</span>
          </article>
        </div>
      </section>
      <section className="capabilities section-shell">
        <p className="eyebrow">WHAT I BRING TO THE TABLE</p>
        {[
          [
            "01",
            "Design with context",
            "목적을 읽는 디자인",
            "브랜드의 분위기와 콘텐츠의 맥락을 살피고, 화면 안에서 시각적 위계를 만듭니다.",
            "UI/UX · WEB DESIGN · BRANDING",
          ],
          [
            "02",
            "Build with detail",
            "디테일을 살리는 구현",
            "레이아웃, 반응형 화면, 인터랙션을 구현하며 디자인의 의도가 전달되는 과정을 고민합니다.",
            "HTML · CSS · JAVASCRIPT · JQUERY",
          ],
          [
            "03",
            "Stay curious",
            "표현의 경계를 넓히는 태도",
            "새로운 도구와 표현 방식을 배우고, 작은 실험을 작업에 연결합니다.",
            "FIGMA · GSAP · RESPONSIVE WEB",
          ],
        ].map(([n, title, ko, desc, tools]) => (
          <article className="capability-row" key={n} data-reveal>
            <span className="eyebrow">/{n}</span>
            <h3>{title}</h3>
            <div>
              <h4>{ko}</h4>
              <p>{desc}</p>
              <span className="eyebrow">{tools}</span>
            </div>
          </article>
        ))}
      </section>
      <section className="about-end section-shell">
        <p className="eyebrow">NEXT UP</p>
        <Link href="/work">
          Less talk.
          <br />
          <em>More work.</em>
          <span>↗</span>
        </Link>
      </section>
    </div>
  );
}
