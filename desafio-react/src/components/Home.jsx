import PropTypes from 'prop-types';

import { pizzas } from '../data/pizzas';
import CardPizza from './CardPizza';
import Header from './Header';

const Home = ({ addToCart }) => {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-around flex-wrap">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
            onAddToCart={() => addToCart(pizza)} 
          />
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;
