import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 페이지(라우트) 이동 시 스크롤 위치를 맨 위로 초기화.
// 없으면 Detail 페이지를 스크롤한 채로 다른 프로젝트로 이동했을 때
// 스크롤 위치가 그대로 유지되어 어색해 보임.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
