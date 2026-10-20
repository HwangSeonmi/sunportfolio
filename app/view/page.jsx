export const metadata = { title: "View | SUNWORK" };
export default function Page() {
  return (
    <div className="page-view">
      <section id="view">
        <div className="view_inner">
          <div className="view_wrap">
            <article className="stage1">
              <div className="inner">
                <a
                  className="view_box b1"
                  data-fancybox="gallery"
                  data-src="/images/view-somyeong.png"
                  data-caption="UX/UI App"
                  href="/images/view-somyeong.png"
                >
                  <img src="/images/view-somyeong.png" alt="somyeong 작업물" />
                </a>
                <a
                  className="view_box b2"
                  data-fancybox="gallery"
                  data-src="/images/view-so.png"
                  data-caption="Brand pop-up store"
                  href="/images/view-so.png"
                >
                  <img src="/images/view-so.png" alt="so 작업물" />
                </a>
                <div className="view_text">
                  <h3>{"All work"}</h3>
                  <p>
                    {"graphics, apps, illustrations, branding works "}
                    <br />
                    {
                      "\n                                자세한 작업물은 비핸스를 통해 확인하실 수 있습니다."
                    }
                  </p>
                  <p></p>
                  <div className="bt1">
                    <a href="https://www.behance.net/117sunmib5ec">
                      {"↖︎ behance"}
                    </a>
                  </div>
                  <div className="bt2">
                    <a
                      className="gallery-image"
                      href="/images/view-resume.png"
                      data-caption="이력서"
                    >
                      {"✸ resume"}
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <article className="stage2">
              <div className="inner">
                <ul>
                  <li>
                    <a
                      data-fancybox="gallery"
                      data-src="/images/view-sun.gif"
                      data-caption="graphic"
                      href="/images/view-sun.gif"
                    >
                      <img src="/images/view-sun.gif" alt="sun 작업물" />
                    </a>
                  </li>
                  <li className="b3">
                    <a
                      data-fancybox="gallery"
                      data-src="/images/view-goods.png"
                      data-caption="goods"
                      href="/images/view-goods.png"
                    >
                      <img src="/images/view-goods.png" alt="goods 작업물" />
                    </a>
                  </li>
                  <li>
                    <a
                      data-fancybox="gallery"
                      data-src="/images/view-illust2.png"
                      data-caption="illustration"
                      href="/images/view-illust2.png"
                    >
                      <img
                        src="/images/view-illust3.png"
                        alt="illust3 작업물"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      data-fancybox="gallery"
                      data-src="/images/view-reu.png"
                      data-caption="dfdf"
                      href="/images/view-reu.png"
                    >
                      <img src="/images/view-reu.png" alt="reu 작업물" />
                    </a>
                  </li>
                </ul>
                <ul className="size">
                  <li>
                    <a
                      data-fancybox="gallery"
                      data-src="/images/view-myself2.png"
                      data-caption="UX/UI App"
                      href="/images/view-myself2.png"
                    >
                      <img
                        src="/images/view-myself2.png"
                        alt="myself2 작업물"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      data-fancybox="gallery"
                      data-src="/images/view-grandma.png"
                      data-caption="Logo design"
                      href="/images/view-grandma.png"
                    >
                      <img
                        src="/images/view-grandma2.png"
                        alt="grandma2 작업물"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
