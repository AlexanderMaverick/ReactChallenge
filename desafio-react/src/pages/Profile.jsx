import "./Profile.css"; // Opcional para agregar estilos personalizados

const Profile = () => {
  // Email y función de cierre de sesión son estáticos por ahora
  const userEmail = "usuario@ejemplo.com";

  const handleLogout = () => {
    alert("Sesión cerrada (funcionalidad pendiente de implementar).");
  };

  return (
    <div className="profile-container">
      <h1>Perfil de Usuario</h1>
      <p>Email: <strong>{userEmail}</strong></p>
      <button className="logout-button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
