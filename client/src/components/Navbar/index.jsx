import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-light bg-light">
    <div className="container">
      <NavLink className="navbar-brand" to="/">
        PPL
      </NavLink>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className={navLinkClass} to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={navLinkClass} to="/signup">
            Signup
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
