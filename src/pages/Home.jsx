import Header from '../components/Header';
import Shelf from '../components/Shelf';
import projects from '../data/projects';
import '../styles/home.css';

function Home() {
  return (
    <div className="page home-page">
      <Header />

      <main className="home-main">
        <Shelf projects={projects} />
      </main>

      <footer className="site-footer">
        <span>© 2026 WORK LIBRARY. ALL RIGHTS RESERVED.</span>
        <div>
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
          <a href="#" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="#" aria-label="Behance">
            Behance
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
