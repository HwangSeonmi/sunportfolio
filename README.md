# SUNWORK — 황선미 포트폴리오

2024년 Vite/HTML 포트폴리오를 Next.js App Router와 React로 옮긴 프로젝트입니다. 원본의 작업물, 이미지, 폰트와 시각 디자인을 유지합니다.

## 실행

Node.js 20.9 이상이 필요합니다. Node.js 24 LTS를 권장합니다.

```bash
npm ci
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

```bash
npm run build
npm start
```

## 구성

- `app/page.jsx`: 홈 화면과 드래그 오브젝트
- `app/work/page.jsx`: 웹/UI 작업물 11개
- `app/about/page.jsx`: 소개, 경력, 스킬, 연락처
- `app/view/page.jsx`: 디자인 작업물 갤러리와 이력서
- `components/Header.jsx`: 공통 메뉴와 모바일 내비게이션
- `components/PageEffects.jsx`: GSAP, Lenis, Splide, 드래그, 갤러리 동작과 정리
- `app/globals.css`: 원본 스타일과 반응형/접근성 보완
- `public/images`, `public/fonts`: 원본 정적 자산

기존 `/index.html`, `/work.html`, `/about.html`, `/view.html` 주소는 새 경로로 리디렉션됩니다.

PC Work 화면은 세로 스크롤에 따라 가로로 이동합니다. 모바일에서는 작업물을 세로로 나열하고 설명/링크를 항상 표시합니다. 갤러리는 이미지 클릭으로 열리며 닫기 버튼, 배경 클릭, Escape로 닫을 수 있습니다. 화면 이동 시 이벤트, 스크롤 애니메이션과 슬라이더를 정리합니다. 모션 감소 설정도 지원합니다.

## 배포

일반적인 Next.js 호스팅 환경에서 `npm run build` 후 `npm start`로 실행하거나, GitHub 저장소를 Vercel에 연결할 수 있습니다. 공유 미리보기용 배포 주소는 `.env.example`을 참고하여 `NEXT_PUBLIC_SITE_URL`에 설정합니다.

외부 작업물, Behance, Instagram 링크는 원본 주소를 유지하며 해당 서비스의 운영 여부에 따라 달라질 수 있습니다. 일부 웹폰트와 노이즈 텍스처는 원본 외부 URL을 사용합니다. 배포 전에 연락처와 이력서의 최신 여부 및 원본 이미지/폰트의 사용 권한을 확인하세요.

## 검증

- Next.js 프로덕션 빌드
- 홈 / Work / About / View 페이지 렌더링
- 모바일 메뉴 열기, 작업물 갤러리 열기/닫기
- 페이지와 CSS에서 참조하는 로컬 이미지/폰트 존재 여부
