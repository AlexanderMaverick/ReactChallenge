import PropTypes from 'prop-types';

const CardPizza = ({ name, price, ingredients, img, desc, onAddToCart }) => {
  return (
    <div className="card mb-3 me-3" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>
        <p className="card-desc">{desc}</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text">
          <strong>Precio:</strong> ${price.toLocaleString('es-CL')}
        </p>
        <button className="btn btn-primary" onClick={onAddToCart}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string,
  onAddToCart: PropTypes.func.isRequired,
};

export default CardPizza;
