"use client";
import { useState } from "react";
export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText("tjsal117@gmail.com");
      setCopied(true);
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <p className="eyebrow">
          <span className="status-dot" /> A GOOD CONVERSATION STARTS HERE
        </p>
        <span className="footer-note">
          함께 더 좋은 경험을 만들고 싶습니다.
        </span>
      </div>
      <a className="contact-title" href="mailto:tjsal117@gmail.com">
        LET’S MAKE
        <br />
        <span>SOMETHING.</span>
        <i>↗</i>
      </a>
      <div className="footer-links">
        <div>
          <a href="mailto:tjsal117@gmail.com">tjsal117@gmail.com ↗</a>
          <button onClick={copy}>{copied ? "Copied ✓" : "Copy email +"}</button>
          <span className="sr-only" role="status">
            {copied
              ? "이메일 주소를 복사했습니다."
              : failed
                ? "복사하지 못했습니다. 이메일 링크를 이용해 주세요."
                : ""}
          </span>
        </div>
        <div>
          <a
            href="https://www.behance.net/117sunmib5ec"
            target="_blank"
            rel="noreferrer"
          >
            Behance ↗
          </a>
          <a
            href="https://github.com/HwangSeonmi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SUNWORK — HWANG SEONMI</span>
        <span>DESIGNED WITH INTENT. BUILT WITH CARE.</span>
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            })
          }
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
}
