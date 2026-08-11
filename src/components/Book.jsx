import { useState } from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories';

function Book({ project, activeId, onActivate }) {
  const [touchOpen, setTouchOpen] = useState(false);
  const isActive = activeId === project.id || touchOpen;

  const handleClick = () => {
    if (window.matchMedia('(hover: none)').matches) {
      setTouchOpen((current) => !current);
      onActivate(project.id);
    }
  };

  return (
    <article
      className={`book${isActive ? ' is-active' : ''}`}
      onMouseEnter={() => onActivate(project.id)}
      onMouseLeave={() => onActivate(null)}
    >
      <Link
        to={`/work/${project.id}`}
        className="book-spine"
        onClick={handleClick}
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
