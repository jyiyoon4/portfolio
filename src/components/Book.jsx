import { Link } from 'react-router-dom';
import homecategories from '../data/homecategories';

function Book({ project, activeId, onActivate }) {
  // 마우스가 book 위에 있을 때만 open, 벗어나면 즉시 close.
  const isActive = activeId === project.id;

  // 타이틀에 \n을 넣으면 그 자리에서 줄바꿈됨 (원하는 만큼 여러 줄 가능).
  // 예: title: 'PROJECT 01\nPROJECT ddd' -> 2줄
  const titleLines = project.title.split('\n');

  return (
    <article
      className={`book${isActive ? ' is-active' : ''}`}
      style={{ '--title-lines': titleLines.length }}
      onMouseEnter={() => onActivate(project.id)}
      onMouseLeave={() => onActivate(null)}
    >
      <Link
        to={`/work/${project.id}`}
        className="book-spine"
        aria-label={`Open ${project.title}`}
      >
        <span className="book-number">{project.number}</span>
        <span className="book-title">
          {titleLines.map((line, index) => (
            <span className="book-title-line" key={index}>
              {line}
            </span>
          ))}
        </span>
        <span className="book-category">
          {homecategories[project.category] || project.category}
        </span>
      </Link>

      <div className="book-preview" aria-hidden={!isActive}>
        <img src={project.thumbnail} alt="" loading="lazy" draggable="false" />
        <div className="book-preview-overlay">
          <div>
            <h2>
              {titleLines.map((line, index) => (
                <span className="preview-title-line" key={index}>
                  {line}
                </span>
              ))}
            </h2>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Book;
