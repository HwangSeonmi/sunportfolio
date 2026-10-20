"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function PageEffects() {
  const pathname = usePathname();
  const cursor = useRef(null);
  const dialog = useRef(null);
  const image = useRef(null);
  const caption = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const controller = new AbortController();
    const { signal } = controller;
    const on = (el, type, fn, options = {}) =>
      el.addEventListener(type, fn, { ...options, signal });
    document.body.dataset.page = pathname === "/" ? "home" : pathname.slice(1);
    let frame;
    let lenis;
    let slider;
    if (!reduced && pathname !== "/") {
      lenis = new Lenis({ duration: 1 });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    }
    on(document, "pointermove", (event) => {
      if (cursor.current) {
        cursor.current.style.opacity = "1";
        cursor.current.style.transform = `translate3d(${event.clientX + 4}px, ${event.clientY + 4}px, 0)`;
      }
    });
    const context = gsap.context(() => {
      if (reduced) return;
      if (pathname === "/about") {
        gsap.to(".intro_text .img", {
          backgroundPosition: "-5000px 0",
          ease: "steps(10)",
          scrollTrigger: {
            trigger: "#intro",
            start: "top top",
            end: "+=5000",
            pin: true,
            scrub: true,
          },
        });
        gsap.from(".ab_item", {
          y: 90,
          autoAlpha: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".ab_wrap",
            start: "top 85%",
            end: "bottom 70%",
            scrub: true,
          },
        });
      }
      if (pathname === "/work") {
        const match = gsap.matchMedia();
        match.add("(min-width: 769px)", () => {
          const wrap = document.querySelector(".work_wrap");
          const distance = () =>
            Math.max(
              0,
              wrap.scrollWidth + wrap.offsetLeft - window.innerWidth + 60,
            );
          gsap.to(".work_wrap", {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: "#work",
              start: "top top",
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        });
      }
      if (pathname === "/view") {
        gsap.utils.toArray(".view_box").forEach((box) =>
          ScrollTrigger.create({
            trigger: box,
            start: "top 80%",
            end: "bottom 20%",
            toggleClass: "active",
          }),
        );
      }
    });
    if (pathname === "/about") {
      slider = new Splide("#splide1", {
        type: "loop",
        drag: true,
        autoWidth: true,
        pagination: false,
        focus: "center",
        arrows: false,
        autoScroll: {
          speed: reduced ? 0 : 1,
          pauseOnHover: true,
          pauseOnFocus: true,
        },
      }).mount({ AutoScroll });
    }
    document.querySelectorAll(".draggable").forEach((el) => {
      let start;
      on(el, "pointerdown", (event) => {
        if (event.button !== 0) return;
        event.preventDefault();
        start = {
          x: event.clientX,
          y: event.clientY,
          left: el.offsetLeft,
          top: el.offsetTop,
        };
        el.style.transition = "none";
        el.setPointerCapture(event.pointerId);
      });
      on(el, "pointermove", (event) => {
        if (!start) return;
        el.style.left = `${Math.max(0, Math.min(window.innerWidth - el.offsetWidth, start.left + event.clientX - start.x))}px`;
        el.style.top = `${Math.max(0, Math.min(window.innerHeight - el.offsetHeight, start.top + event.clientY - start.y))}px`;
        el.style.bottom = "auto";
      });
      const stop = () => {
        if (!start) return;
        start = null;
        el.style.transition = reduced ? "none" : "top 0.5s ease-out";
        el.style.top = `${window.innerHeight - el.offsetHeight}px`;
      };
      on(el, "pointerup", stop);
      on(el, "pointercancel", stop);
    });
    let opener;
    on(document, "click", (event) => {
      const target = event.target.closest("a[data-fancybox], a.gallery-image");
      if (!target || !dialog.current) return;
      event.preventDefault();
      opener = target;
      image.current.src = target.dataset.src || target.getAttribute("href");
      image.current.alt = target.dataset.caption || "포트폴리오 작업물";
      caption.current.textContent =
        target.dataset.caption || "포트폴리오 작업물";
      dialog.current.showModal();
      lenis?.stop();
      document.body.classList.add("gallery-open");
    });
    const modal = dialog.current;
    on(modal, "close", () => {
      document.body.classList.remove("gallery-open");
      lenis?.start();
      opener?.focus();
    });
    on(modal, "click", (event) => {
      if (event.target === modal) modal.close();
    });
    const refresh = () => ScrollTrigger.refresh();
    document.querySelectorAll("img").forEach((img) => {
      if (!img.complete) on(img, "load", refresh, { once: true });
    });
    document.fonts.ready.then(() => {
      if (!signal.aborted) refresh();
    });
    refresh();
    return () => {
      modal.close();
      controller.abort();
      if (frame) cancelAnimationFrame(frame);
      lenis?.destroy();
      slider?.destroy(true);
      context.revert();
      document.body.classList.remove("gallery-open");
      delete document.body.dataset.page;
    };
  }, [pathname]);

  return (
    <>
      <div ref={cursor} className="cursor" aria-hidden="true">
        <img src="/images/berry.gif" alt="" />
      </div>
      <dialog
        className="portfolio-dialog"
        ref={dialog}
        aria-labelledby="gallery-caption"
        data-lenis-prevent
      >
        <button
          type="button"
          className="gallery-close"
          aria-label="갤러리 닫기"
          onClick={() => dialog.current.close()}
        >
          ✕
        </button>
        <figure>
          <img ref={image} alt="" />
          <figcaption id="gallery-caption" ref={caption} />
        </figure>
      </dialog>
    </>
  );
}
