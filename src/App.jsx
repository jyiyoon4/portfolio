import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

// Detail/About는 Home 다음에 필요하므로 lazy 로딩으로 분리해 초기 번들 크기를 줄임.
// Home은 첫 화면(로딩 연출 포함)이라 즉시 로드.
const Detail = lazy(() => import('./pages/Detail'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 예전 /work 링크로 들어와도 루트로 정리 */}
          <Route path="/work" element={<Navigate to="/" replace />} />
          <Route path="/work/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
