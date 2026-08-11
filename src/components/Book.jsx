import { Link } from 'react-router-dom';
import categories from '../data/categories';

function Book({ project, activeId, onActivate }) {
  // 마우스가 book 위에 있을 때만 open, 벗어나면 즉시 close.
  const isActive = activeId === project.id;

  return (
    <article
      className={`book${isActive ? ' is-active' : ''}`}
      onMouseEnter={() => onActivate(project.id)}
      onMouseLeave={() => onActivate(null)}
    >
      <Link
        to={`/work/${project.id}`}
        className="book-spine"
        aria-label={`Open ${project.title}`}
      >
        <span className="book-number">{project.number}</span>
        <span className="book-title">{project.title}</span>
        <span className="book-category">
          {categories[project.category] || project.category}
        </span>
      </Link>

      <div className="book-preview" aria-hidden={!isActive}>
        <img src={project.thumbnail} alt="" loading="lazy" draggable="false" />
        <div className="book-preview-overlay">
          <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Book;
