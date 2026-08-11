import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import '../styles/loading.css';

function Loading() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    const startedAt = performance.now();
    const minimumDuration = 1600;

    const preload = projects.map(
      (project) =>
        new Promise((resolve) => {
          const image = new Image();
          image.onload = image.onerror = resolve;
          image.src = project.thumbnail;
        }),
    );

    const timer = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const timeProgress = Math.min(100, (elapsed / minimumDuration) * 100);
      value = Math.floor(timeProgress);
      setProgress(value);

      if (value >= 100) {
        window.clearInterval(timer);
        Promise.all(preload).finally(() =>
          navigate('/work', { replace: true }),
        );
      }
    }, 16);

    return () => window.clearInterval(timer);
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
