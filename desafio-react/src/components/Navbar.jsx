import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pizzería Mamma Mía
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="btn btn-outline-primary me-2" to="/">
                🍕 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-primary me-2" to="/login">
                🔐 Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-outline-secondary"
                to="/register"
              >
                🔐 Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-success" to="/cart">
                🛒 Carrito
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
