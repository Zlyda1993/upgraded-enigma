import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="nav nav-tabs">
      <div className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </div>
      <div className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </div>
    </div>
  );
}

export default NavTabs;
