import { gallery } from "../../data/projects";
import Gallery from "../../components/Gallery";
export const metadata = { title: "Playground" };
export default function View() {
  return (
    <div className="section-shell index-page playground">
      <div className="page-heading">
        <p className="eyebrow">03 / VISUAL EXPLORATIONS</p>
        <h1 className="hero-line">
          <span>
            PLAY<span className="accent">.</span>
          </span>
        </h1>
        <div className="page-heading-bottom">
          <p>
            때로는 자유롭게, 때로는 엉뚱하게.
            <br />
            호기심에서 시작한 또 다른 작업들.
          </p>
          <span>
            GRAPHIC · BRANDING · UI/UX
            <br />
            CLICK TO TAKE A CLOSER LOOK
          </span>
        </div>
      </div>
      <Gallery items={gallery} />
      <div className="archive-more">
        <p>더 많은 작업이 궁금하다면</p>
        <a
          className="text-link"
          href="https://www.behance.net/117sunmib5ec"
          target="_blank"
          rel="noreferrer"
        >
          EXPLORE MY BEHANCE ↗
        </a>
      </div>
    </div>
  );
}
