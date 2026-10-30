"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function PageEffects() {
  const pathname = usePathname();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const headline = document.querySelectorAll(".hero-line > span");
      if (headline.length)
        gsap.from(headline, {
          yPercent: 110,
          rotate: 2,
          duration: 1.05,
          stagger: 0.12,
          ease: "power4.out",
          clearProps: "transform",
        });
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: { trigger: el, start: "top 94%", once: true },
          },
        );
      });
    });
    return () => context.revert();
  }, [pathname]);
  return null;
}
