import { useEffect, useRef, useState } from 'react';
import Book from './Book';
import PromoTile from './PromoTile';

// 기본으로 보여줄 '빈 선반' 장식 칸 수 (책이 하나도 안 꽂혀 있을 때 기준)
const DEFAULT_EMPTY_SLOTS = 4;

function Shelf({ projects }) {
  const [activeId, setActiveId] = useState(null);
  const rowRef = useRef(null);
  const [bookRowCount, setBookRowCount] = useState(1);

  // shelf-row 안의 book들이 실제로 몇 줄로 꽂혀 있는지(줄바꿈 포함) 측정.
  // book들의 offsetTop을 비교해서 같은 줄에 있는지 판단 -> 고정 높이값에 의존하지 않아
  // 폰트/반응형 크기가 바뀌어도 안전함.
  useEffect(() => {
    const rowEl = rowRef.current;
    if (!rowEl) return;

    const measureRows = () => {
      const tops = Array.from(rowEl.children).map((el) => el.offsetTop);
      const uniqueRowCount = new Set(tops).size;
      setBookRowCount(uniqueRowCount || 1);
    };

    measureRows();

    const observer = new ResizeObserver(measureRows);
    observer.observe(rowEl);

    return () => observer.disconnect();
  }, [projects]);

  // 책이 두 번째 줄로 넘어갈 때마다, 그만큼 아래 장식용 빈 칸을 하나씩 줄여서
  // "책이 꽂히면 그 자리는 실제 선반 간격으로, 나머지는 기존 장식 간격 유지"가 되도록 함.
  const emptySlotCount = Math.max(0, DEFAULT_EMPTY_SLOTS - (bookRowCount - 1));

  return (
    <section className="shelf" aria-label="Selected works">
      <div className="shelf-row" ref={rowRef}>
        {/* map(...)->프로젝트생기면 자동 생성 = 수정 X */}
        {projects.map((project) => (
          <Book
            key={project.id}
            project={project}
            activeId={activeId}
            onActivate={setActiveId}
          />
        ))}
        <PromoTile />
      </div>

      <div className="shelf-empty" aria-hidden="true">
        {Array.from({ length: emptySlotCount }).map((_, index) => (
          <div key={index} />
        ))}
      </div>
    </section>
  );
}

export default Shelf;
