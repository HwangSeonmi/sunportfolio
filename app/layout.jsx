import "@splidejs/splide/css";
import "./globals.css";
import Header from "../components/Header";
import PageEffects from "../components/PageEffects";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  description: "황선미의 웹 개발, UI/UX, 그래픽 디자인 포트폴리오",
  icons: { icon: "/images/pcon.ico" },
  openGraph: {
    title: "SUNWORK — 황선미 포트폴리오",
    description: "황선미의 웹 개발, UI/UX, 그래픽 디자인 포트폴리오",
    images: ["/images/thumbnail.png"],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#page-content">
          본문으로 이동
        </a>
        <Header />
        <main id="page-content" tabIndex={-1}>
          {children}
        </main>
        <PageEffects />
      </body>
    </html>
  );
}
