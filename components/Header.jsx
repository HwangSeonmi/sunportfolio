"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header id="header">
      <div className="header_inner">
        <div className="header_logo">
          <Link href="/" aria-label="SUNWORK 홈" onClick={() => setOpen(false)}>
            <img src="/images/logo.png" alt="SUNWORK" />
          </Link>
        </div>
        <nav
          id="primary-menu"
          className={`header_nav${open ? " show" : ""}`}
          aria-label="메인 메뉴"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              document.getElementById("headerToggle")?.focus();
            }
          }}
        >
          <ul>
            {["Work", "About", "View"].map((label) => {
              const href = `/${label.toLowerCase()}`;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={pathname === href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          type="button"
          className="header_nav_mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={open}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen(!open)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
