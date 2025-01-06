import { Link } from "react-router-dom";
import "./NotFound.css"; // Puedes agregar estilos personalizados aquí

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" className="back-home-link">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
