import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import '../styles/loading.css';

function Loading() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timerId = null;
    let timeoutId = null;

    // 1. 숫자 카운트업 (0% -> 100%)
    const startedAt = performance.now();
    const minimumDuration = 1600;

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
          resolve(); // 100% 도달 완료
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

    // 3. 통합 실행: (100% 도달 + 이미지 로딩) 완료 후 1초 대기 -> 이동
    Promise.all([progressPromise, ...imagePromises]).then(() => {
      timeoutId = window.setTimeout(() => {
        navigate('/work', { replace: true });
      }, 1000); // ⭐ 100%가 찍힌 상태로 정확히 1초 유지
    });

    // 클린업: 언마운트 시 타이머 및 타임아웃 모두 해제
    return () => {
      if (timerId) window.clearInterval(timerId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <main className="loading-page">
      <div className="loading-content">
        <strong>{progress}%</strong>
        <span>OPENING ARCHIVE...</span>
      </div>
    </main>
  );
}

export default Loading;
