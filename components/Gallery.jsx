"use client";
import { useState, useRef, useEffect } from "react";
export default function Gallery({ items }) {
  useEffect(() => () => document.body.classList.remove("modal-open"), []);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(0);
  const modal = useRef(null);
  const opener = useRef(null);
  const shown = items.filter(
    (item) => filter === "All" || item.category === filter,
  );
  const current = shown[selected];
  function open(index, event) {
    opener.current = event.currentTarget;
    setSelected(index);
    modal.current.showModal();
    document.body.classList.add("modal-open");
  }
  function close() {
    modal.current.close();
  }
  return (
    <>
      <div className="filter-bar">
        <div role="group" aria-label="디자인 작업 유형">
          {["All", "UI/UX", "Branding", "Graphic"].map((label) => (
            <button
              key={label}
              aria-pressed={filter === label}
              onClick={() => {
                setFilter(label);
                setSelected(0);
              }}
            >
              {label}
              <sup>
                {label === "All"
                  ? items.length
                  : items.filter((i) => i.category === label).length}
              </sup>
            </button>
          ))}
        </div>
        <span className="eyebrow">A FEW THINGS I’VE MADE</span>
      </div>
      <div className="archive-grid">
        {shown.map((item, index) => (
          <button
            className="archive-card"
            key={item.src}
            onClick={(e) => open(index, e)}
            aria-label={`${item.title} 확대 보기`}
          >
            <div>
              <img
                src={`/images/${item.src}`}
                alt={item.title}
                loading="lazy"
              />
              <span className="archive-plus">+</span>
            </div>
            <span className="archive-card-meta">
              <strong>{item.title}</strong>
              <span>{item.subtitle} ↗</span>
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={modal}
        className="gallery-dialog"
        aria-label="디자인 작업물 확대"
        onClick={(e) => {
          if (e.target === modal.current) close();
        }}
        onClose={() => {
          document.body.classList.remove("modal-open");
          opener.current?.focus();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight")
            setSelected((selected + 1) % shown.length);
          if (e.key === "ArrowLeft")
            setSelected((selected - 1 + shown.length) % shown.length);
        }}
      >
        <button
          className="modal-close"
          onClick={close}
          aria-label="갤러리 닫기"
        >
          CLOSE ✕
        </button>
        {current && (
          <figure>
            <img
              src={`/images/${current.full || current.src}`}
              alt={current.title}
            />
            <figcaption>
              <button
                onClick={() =>
                  setSelected((selected - 1 + shown.length) % shown.length)
                }
                aria-label="이전 작업물"
              >
                ←
              </button>
              <span>
                {current.title}{" "}
                <small>
                  {selected + 1} / {shown.length}
                </small>
              </span>
              <button
                onClick={() => setSelected((selected + 1) % shown.length)}
                aria-label="다음 작업물"
              >
                →
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
