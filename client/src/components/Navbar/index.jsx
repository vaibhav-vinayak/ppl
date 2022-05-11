import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
    </div>
  </nav>
);

export default Navbar;
