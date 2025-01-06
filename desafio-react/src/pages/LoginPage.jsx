import { useState } from 'react';
import PropTypes from 'prop-types';

const LoginPage = ({ setCurrentPage, setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!email || !password) {
        setMessage('Todos los campos son obligatorios');
        return;
      }
      if (password.length < 6) {
        setMessage('La contraseña debe tener minimo 6 caracteres');
        return;
      }
  
      setMessage('Inicio de sesión exitoso, redirigiendo al Home...');
      setTimeout(() => {
        setIsLoggedIn(true); 
        setCurrentPage('home');
      }, 2500);
    };
  
    return (
      <div className="container mt-5">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>
        {message && <p className="mt-3">{message}</p>}
      </div>
    );
  };

  LoginPage.propTypes = {
    setCurrentPage: PropTypes.func.isRequired, 
    setIsLoggedIn: PropTypes.func.isRequired,
  };
export default LoginPage;
