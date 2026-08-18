import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Work', to: '/' },
  { label: 'About', to: '/about' },
];

function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" end className="site-logo" aria-label="Work Library home">
        WORK LIBRARY
      </NavLink>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `nav-link${isActive ? ' is-active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}

        <a
          className="nav-link nav-connect"
          href="mailto:jyiyoon.design@gmail.com"
        >
          Connect
        </a>
      </nav>
    </header>
  );
}

export default Header;
