import "./pbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">
          NETPRIME
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" key={0}>
              <NavLink
                to="/home"
                className="nav-link"
                activeClassName="active"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item" key={1}>
              <NavLink
                to="/feature"
                className="nav-link "
                activeClassName="active"
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item" key={2}>
              <NavLink
                to="pricing"
                className="nav-link "
                activeClassName="active"
              >
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
