import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Shelf from '../components/Shelf';
import projects from '../data/projects';
import '../styles/home.css';
import '../styles/loading.css';

// 이 문서를 브라우저가 "진짜로" 처음 불러왔을 때의 실제 경로가 Home("/")이었는지 판단.
// (basename 접두사를 뗀 뒤 비교. 이 값은 모듈이 로드되는 시점, 즉 새로고침/최초 접속
// 시점의 URL을 그대로 반영하고, 이후 클라이언트 사이드 라우팅으로는 바뀌지 않음)
const base = import.meta.env.BASE_URL;
const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
const initialPathname = window.location.pathname;
const initialRelativePath = initialPathname.startsWith(normalizedBase)
  ? initialPathname.slice(normalizedBase.length) || '/'
  : initialPathname;
const wasHomeOnInitialLoad =
  initialRelativePath === '/' || initialRelativePath === '';

// 이 세션에서 로딩 연출 여부를 이미 한 번 판단했는지 (Home이 여러 번 마운트돼도
// 딱 한 번만 판단하기 위함).
let introDecided = false;

function Home() {
  const [showIntro, setShowIntro] = useState(() => {
    if (introDecided) return false;
    introDecided = true;
    // Home이 새로고침으로 직접 로드된 경우에만 인트로 재생.
    // 다른 페이지가 새로고침된 뒤 Home으로 넘어온 경우는 재생하지 않음.
    return wasHomeOnInitialLoad;
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!showIntro) return undefined;

    let timerId = null;
    let timeoutId = null;

    // 1. 숫자 카운트업 (0% -> 100%)
    const startedAt = performance.now();
    const minimumDuration = 800;

    const progressPromise = new Promise((resolve) => {
      timerId = window.setInterval(() => {
        const elapsed = performance.now() - startedAt;
        const timeProgress = Math.min(
          100,
          Math.floor((elapsed / minimumDuration) * 100),
        );

        setProgress(timeProgress);

        if (timeProgress >= 100) {
          window.clearInterval(timerId);
          resolve();
        }
      }, 16);
    });

    // 2. 이미지 프리로드
    const imagePromises = projects.map(
      (project) =>
        new Promise((resolve) => {
          const image = new Image();
          image.onload = image.onerror = resolve;
          image.src = project.thumbnail;
        }),
    );

    // 3. 통합 실행: (100% 도달 + 이미지 로딩) 완료 후 1초 대기 -> 실제 콘텐츠 표시
    Promise.all([progressPromise, ...imagePromises]).then(() => {
      timeoutId = window.setTimeout(() => {
        setShowIntro(false);
      }, 1000);
    });

    return () => {
      if (timerId) window.clearInterval(timerId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [showIntro]);

  if (showIntro) {
    return (
      <main className="loading-page">
        <div className="loading-content">
          <strong>{progress}%</strong>
          <span>OPENING ARCHIVE...</span>
        </div>
      </main>
    );
  }

  return (
    <div className="page home-page">
      <Header />

      <main className="home-main">
        <Shelf projects={projects} />
      </main>

      <footer className="site-footer">
        <span>© 2026 WORK LIBRARY. ALL RIGHTS RESERVED.</span>
        {/* <div>
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
          <a href="#" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="#" aria-label="Behance">
            Behance
          </a>
        </div> */}
      </footer>
    </div>
  );
}

export default Home;
