import { useState } from 'react';
import Book from './Book';

function Shelf({ projects }) {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="shelf" aria-label="Selected works">
      <div className="shelf-row">
        {/* map(...)->프로젝트생기면 자동 생성 = 수정X */}
        {projects.map((project) => (
          <Book
            key={project.id}
            project={project}
            activeId={activeId}
            onActivate={setActiveId}
          />
        ))}
      </div>

      <div className="shelf-empty" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} />
        ))}
      </div>
    </section>
  );
}

export default Shelf;
