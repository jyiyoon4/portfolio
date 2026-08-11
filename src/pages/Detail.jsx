import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import categories from '../data/categories';
import projects from '../data/projects';
import '../styles/detail.css';

function Detail() {
  const { id } = useParams();
  const index = projects.findIndex((project) => project.id === id);
  const project = projects[index];

  if (!project) {
    return (
      <div className="page not-found">
        <Header />
        <main>
          <h1>PROJECT NOT FOUND</h1>
          <Link to="/work">BACK TO WORK</Link>
        </main>
      </div>
    );
  }

  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="page detail-page">
      <Header />

      <main className="detail-main">
        <section className="detail-hero">
          <div className="detail-number">{project.number}</div>

          <div className="detail-heading">
            <h1>{project.title}</h1>

            <div className="detail-meta">
              <Meta label="YEAR" value={project.year} />
              <Meta label="CATEGORY" value={categories[project.category]} />
              <Meta label="ROLE" value={project.role} />
            </div>
          </div>

          <p className="detail-description">{project.description}</p>
        </section>

        <figure className="detail-hero-image">
          <img src={project.thumbnail} alt={project.title} />
        </figure>

        <section className="detail-sections">
          <DetailText title="BACKGROUND" text={project.background} />
          <figure className="detail-image detail-image-large">
            <img src={project.thumbnail} alt="" />
          </figure>

          <section className="detail-split">
            <figure className="detail-image">
              <img src={project.thumbnail} alt="" />
            </figure>
            <div className="material-card">
              <span className="eyebrow">MATERIAL / VISUAL PALETTE</span>
              <p>
                Typography, imagery, structure, and interaction are treated as
                one visual system.
              </p>
            </div>
          </section>

          <DetailText title="PROCESS" text={project.process} />

          <section className="detail-duo">
            <img src={project.thumbnail} alt="" />
            <img src={project.thumbnail} alt="" />
          </section>

          <DetailText title="OUTCOME" text={project.outcome} />
        </section>
      </main>

      <ProjectPager previous={previous} next={next} />
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div className="meta-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function DetailText({ title, text }) {
  return (
    <section className="detail-text">
      <span className="eyebrow">{title}</span>
      <p>{text}</p>
    </section>
  );
}

function ProjectPager({ previous, next }) {
  return (
    <nav className="project-pager" aria-label="Project navigation">
      <Link to={`/work/${previous.id}`} className="pager-item">
        <span className="eyebrow">PREVIOUS</span>
        <strong>{previous.title}</strong>
      </Link>

      <Link to="/work" className="pager-center">
        <span className="pager-mark">+</span>
        <span className="eyebrow">BACK TO WORK</span>
      </Link>

      <Link to={`/work/${next.id}`} className="pager-item pager-next">
        <span className="eyebrow">NEXT</span>
        <strong>{next.title}</strong>
      </Link>
    </nav>
  );
}

export default Detail;
