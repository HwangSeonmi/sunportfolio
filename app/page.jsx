export const metadata = { title: "SUNWORK — 황선미 포트폴리오" };
export default function Page() {
  return (
    <div className="page-home">
      <div id="main">
        <div className="main-top">
          <img src="/images/intro.gif" alt="SUNWORK — 황선미 포트폴리오" />
        </div>
      </div>
      <img
        className="draggable"
        id="imgObj1"
        src="/images/main-love.png"
        alt="Image 1"
      />
      <img
        className="draggable"
        id="imgObj2"
        src="/images/main-berry2.png"
        alt="Image 2"
      />
      <img
        className="draggable"
        id="imgObj3"
        src="/images/main-cat.png"
        alt="Image 3"
      />
      <img
        className="draggable"
        id="imgObj4"
        src="/images/main-flower.png"
        alt="Image 3"
      />
      <img
        className="draggable"
        id="imgObj5"
        src="/images/main-power.png"
        alt="Image 3"
      />
      <img
        className="draggable"
        id="imgObj6"
        src="/images/main-tree.png"
        alt="Image 3"
      />
      <img
        className="draggable"
        id="imgObj7"
        src="/images/main-egg.png"
        alt="Image 3"
      />
      <img
        className="draggable"
        id="imgObj8"
        src="/images/main-cookie.png"
        alt="Image 3"
      />
      <div id="draggableElement" className="draggable">
        <img src="/images/camera-1.png" alt="" />
      </div>
    </div>
  );
}
