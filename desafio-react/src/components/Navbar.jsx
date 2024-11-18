const Navbar = () => {
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
                <button className="btn btn-outline-primary">🍕 Home</button>
              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <button className="btn btn-outline-primary">🔓 Profile</button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-danger">🔒 Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <button className="btn btn-outline-primary">🔐 Login</button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-secondary">🔐 Register</button>
                  </li>
                </>
              )}
              <li className="nav-item">
                <button className="btn btn-outline-success">🛒 Total: {total.toLocaleString('es-CL')}</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  