import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section-shell not-found">
      <p className="eyebrow">404 / A LITTLE OFF TRACK</p>
      <h1>
        LOST IN
        <br />
        <em>the details.</em>
      </h1>
      <p>페이지를 찾을 수 없습니다. 다른 작업을 둘러볼까요?</p>
      <Link className="pill-link" href="/work">
        BACK TO WORK ↗
      </Link>
    </section>
  );
}
