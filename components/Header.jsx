"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  const links = [
    ["/work", "Work"],
    ["/about", "About"],
    ["/view", "Playground"],
  ];
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="SUNWORK 홈">
        SUN<span>·</span>WORK<sup>®</sup>
      </Link>
      <nav
        className={open ? "site-nav is-open" : "site-nav"}
        aria-label="메인 메뉴"
        id="main-navigation"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            document.getElementById("menu-toggle")?.focus();
          }
        }}
      >
        {links.map(([url, label], i) => (
          <Link
            key={url}
            href={url}
            aria-current={pathname.startsWith(url) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            <span className="nav-index">0{i + 1}</span>
            {label}
          </Link>
        ))}
        <a className="nav-contact" href="mailto:tjsal117@gmail.com">
          Let’s talk <span>↗</span>
        </a>
      </nav>
      <button
        id="menu-toggle"
        className="menu-toggle"
        aria-controls="main-navigation"
        aria-expanded={open}
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
    </header>
  );
}
