export const metadata = { title: "About | SUNWORK" };
export default function Page() {
  return (
    <div className="page-about">
      <section className="sect1" id="intro">
        <div className="intro_inner">
          <div className="intro_text">
            <div className="text">
              <h1 className="gradient">{"About"}</h1>
              <h1 className="gradient">{"me"}</h1>
            </div>
            <div className="img"></div>
          </div>
          <div className="scroll-1">
            <img src="/images/scroll.png" alt="" />
          </div>
          <div className="scroll-2">
            <img src="/images/scroll3.png" alt="" />
          </div>
          <div className="tcroll">
            {"Spin the strawberry\n        with the mouse wheel!"}
          </div>
        </div>
      </section>
      <section id="aboutme">
        <img className="flower rotate4" src="/images/Flower.png" alt="" />
        <div className="ab_inner">
          <div className="ab_wrap">
            <article className="ab_item s1 ">
              <span className="num">{"The goal"}</span>
              <div className="ab_text">
                <div>
                  {
                    "디자인과 개발을 조화롭게,\n              최적의 사용자 경험을 제공하고 싶습니다.\n            "
                  }
                </div>
              </div>
            </article>
            <article className="ab_item s2 ">
              <span className="num">{"Keyword"}</span>
              <div className="ab_text">
                <div>
                  {
                    "#사용자 경험 #creative #웹 접근성 #감각 #친화력 #design #소통\n              #자기개발 #development #책임감\n            "
                  }
                </div>
              </div>
            </article>
            <article className="ab_item s3">
              <span className="num">{"Period"}</span>
              <div className="ab_text">
                <div className="margin-t">
                  <p>{"2017~2023.05"}</p>
                  {"\n              UI/UX 디자이너\n              "}
                  <p>{"23.11~24.05"}</p>
                  {
                    "\n              UI/UX웹디자인 웹퍼블리셔 프론트엔드 전문가 양성 C\n            "
                  }
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="marquee">
        <div className="marquee_wrap">
          <article className="marquee">
            <em>{"Skills"}</em>
            <div className="i_am">
              <div className="flow_list">
                <div className="splide ltl" id="splide1">
                  <div className="splide__track splide__track-1">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <img src="/images/skill-1.png" alt="" />
                      </li>
                      <li className="splide__slide">
                        <img src="/images/skill-2.png" alt="" />
                      </li>
                      <li className="splide__slide">
                        <img src="/images/skill-3.png" alt="" />
                      </li>
                      <li className="splide__slide">
                        <img src="/images/skill-4.png" alt="" />
                      </li>
                      <li className="splide__slide">
                        <img src="/images/skill-5.png" alt="" />
                      </li>
                      <li className="splide__slide">
                        <img src="/images/skill-6.png" alt="" />
                      </li>
                      <li className="splide__slide">
                        <img src="/images/skill-7.png" alt="" />
                      </li>
                      <li className="splide__slide">
                        <img src="/images/skill-8.png" alt="" />
                      </li>
                      <li className="splide__slide">
                        <img src="/images/skill-9.png" alt="" />
                      </li>
                      <li className="splide__slide">
                        <img src="/images/skill-10.png" alt="" />
                      </li>
                      <li className="splide__slide">
                        <img src="/images/skill-11.png" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section id="career">
        <h2>{"✤ Designer career"}</h2>
        <div className="career_wrap">
          <article className="career_box1">
            <div className="career_text">
              <p className="p1">{"Packaging, "}</p>
              <p className="p2">{"Web Design and"}</p>
              <p className="p2">{"Development, "}</p>
              <p className="p3">{"Visual and "}</p>
              <p className="p3">{"Brand Identity, "}</p>
              <p className="p4">{"Photography, "}</p>
              <p className="p5">{"video editing,"}</p>
              <p className="p6">{"contents Design, "}</p>
              <p className="p7">{"UI/UX, "}</p>
              <p className="p8">{"Editor Design, "}</p>
              <p className="p9">{"Product design, "}</p>
              <p className="p10">{"Pop-up store"}</p>
            </div>
          </article>
          <article className="career_box2">
            <div className="career_text">
              <p>{"패키지,"}</p>
              <p>{"웹디자인,"}</p>
              <p>{"브랜딩 디자인,"}</p>
              <p>{"제품 촬영,"}</p>
              <p>{"비디오 편집,"}</p>
              <p>{"컨텐츠 디자인,"}</p>
              <p>{"편집디자인,"}</p>
              <p>{"제품 디자인,"}</p>
              <p>{"팝업스토어,"}</p>
              <p>{"UI/UX,"}</p>
              <p>{"인하우스,"}</p>
              <p>{"그래픽,"}</p>
              <p>{"app 개발"}</p>
            </div>
          </article>
        </div>
        <div className="career_img">
          <div className="berry">
            <img className="rotate2" src="/images/main-berry.png" alt="" />
          </div>
          <div className="camera">
            <img src="/images/camera-1.png" alt="" />
          </div>
          <div className="pearl">
            <img className="rotate3" src="/images/pearl.png" alt="" />
          </div>
          <div className="music">
            <img src="/images/music-1.png" alt="기본 이미지" />
            <img
              src="/images/music-2.png"
              alt="호버 이미지"
              className="hover-image"
            />
          </div>
          <div className="drop">
            <img src="/images/drop.png" alt="" />
          </div>
        </div>
        <div className="Total grain">
          <h3>{"Total : 6년"}</h3>
        </div>
      </section>
      <section className="sect5">
        <div className="me-photo">
          <img className="rotate" src="/images/fun4.png" alt="" />
        </div>
        <div className="video-img"></div>
        <em>
          {"The motifs of"}
          <br />
          {"my life are freedom, "}
          <br />
          {" joy, and love. "}
          <br />
          {" We can do anything!"}
        </em>
        <div className="contect grain">
          <p className="lasttitle1">{"Let's work together!"}</p>
          <p className="lasttitle2">
            {
              "웹 퍼블리셔와 프론트엔드 과정을 공부하며 만들어본 작업물들을 담았습니다."
            }
            <br />
            {
              "아직은 배울 게 많지만, 경험과 함께 성장하는 사람이 되고싶습니다. "
            }
          </p>
          <div className="icon">
            <li>
              <a
                className="icon1"
                href="https://www.instagram.com/sunstrawberryy/"
              >
                <img src="/images/icon-go.png" alt="_new" />
                {" instagram"}
              </a>
            </li>
            <li>
              <a className="icon2" href="mailto:tjsal117@gmail.com">
                <img src="/images/icon-go.png" alt="" />
                {" e-mail"}
              </a>
            </li>
            <li>
              <a className="icon3" href="tel:010-5678-9612">
                <img src="/images/icon-go.png" alt="" />
                {" call"}
              </a>
            </li>
          </div>
        </div>
        <div className="coment">
          <p>{"↙️ I am..❤️"}</p>
        </div>
        <div className="me-box">
          <img className="me-img" src="/images/fun2.png" alt="" />
          <img src="/images/fun3.png" alt="" />
        </div>
      </section>
    </div>
  );
}
