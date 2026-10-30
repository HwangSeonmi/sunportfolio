import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageEffects from "../components/PageEffects";
export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sunportfolio-ten.vercel.app",
  ),
  title: {
    default: "SUNWORK — 황선미 | Web Designer & Publisher",
    template: "%s — SUNWORK",
  },
  description:
    "디자인을 이해하고, 웹으로 구현합니다. 웹 디자이너·웹 퍼블리셔 황선미의 포트폴리오.",
  icons: { icon: "/images/pcon.ico" },
  openGraph: {
    title: "SUNWORK — 황선미 포트폴리오",
    description:
      "Thoughtful by design. 웹 디자인, 퍼블리싱, 그리고 작은 실험들.",
    images: ["/images/social-preview.png"],
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
        <Footer />
        <PageEffects />
      </body>
    </html>
  );
}
