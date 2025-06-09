import './Navbar.css';
import logo from '../../assets/img/sandeep_logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container-fluid d-flex align-items-center">
        <Link className="navbar-brand d-flex align-items-center fw-bold text-white animate-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo me-2" />
          Sandeep Potteries
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse animate-links" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-white active" : "nav-link text-white"
                }
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-white active" : "nav-link text-white"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-white active" : "nav-link text-white"
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-white active" : "nav-link text-white"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;