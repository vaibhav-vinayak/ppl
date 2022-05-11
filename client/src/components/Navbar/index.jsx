import { Link } from "react-router-dom";

const Navbar = () => (
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">
        Navbar
      </Link>
    </div>
  </nav>
);

export default Navbar;
