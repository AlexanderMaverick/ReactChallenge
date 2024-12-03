import PropTypes from 'prop-types';

const Navbar = ({ setCurrentPage, cartCount, total, isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('home');
          }}
        >
          Pizzería Mamma Mía
        </a>
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
              <button
                className="btn btn-outline-primary me-2"
                onClick={() => setCurrentPage('home')}
              >
                🍕 Home
              </button>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-primary me-2"
                    onClick={() => setCurrentPage('profile')}
                  >
                    🔓 Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      setIsLoggedIn(false);
                      setCurrentPage('login');
                    }}
                  >
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-primary me-2"
                    onClick={() => setCurrentPage('login')}
                  >
                    🔐 Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setCurrentPage('register')}
                  >
                    🔐 Register
                  </button>
                </li>
              </>
            )}
            <li className="nav-item">
              <button
                className="btn btn-outline-success"
                onClick={() => setCurrentPage('cart')}
              >
                🛒 Carrito ({cartCount}) - Total: ${total.toLocaleString('es-CL')}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  cartCount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Navbar;
