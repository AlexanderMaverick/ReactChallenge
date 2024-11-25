import PropTypes from 'prop-types';

const Navbar = ({ setCurrentPage }) => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería Mamma Mía</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-outline-primary" onClick={() => setCurrentPage('home')}>
                🍕 Home
              </button>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-primary" onClick={() => setCurrentPage('profile')}>
                    🔓 Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger">
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-primary" onClick={() => setCurrentPage('login')}>
                    🔐 Login
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-secondary" onClick={() => setCurrentPage('register')}>
                    🔐 Register
                  </button>
                </li>
              </>
            )}
            <li className="nav-item">
              <button className="btn btn-outline-success">
                🛒 Total: {total.toLocaleString('es-CL')}
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
};

export default Navbar;
