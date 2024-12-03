import PropTypes from 'prop-types';

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{item.name}</h5>
                <p>Precio: ${item.price.toLocaleString('es-CL')}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
              <div>
                <button
                  className="btn btn-outline-primary btn-sm me-2"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm me-2"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="mt-3">Total: ${total.toLocaleString('es-CL')}</h3>
      <button className="btn btn-success mt-3">Pagar</button>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;
