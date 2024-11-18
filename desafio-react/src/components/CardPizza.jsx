import PropTypes from 'prop-types';
const CardPizza = ({ name, price, ingredients, img }) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Ingredientes: {ingredients.join(', ')}</p>
          <p className="card-text">Precio: ${price.toLocaleString('es-CL')}</p>
          <button className="btn btn-primary">Ver más</button>
          <button className="btn btn-success ms-2">Añadir</button>
        </div>
      </div>
    );
  };
  CardPizza.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
  };
  export default CardPizza;
  