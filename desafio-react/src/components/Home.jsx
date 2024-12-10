//import { pizzas } from '../data/pizzas';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardPizza from './CardPizza';
import Header from './Header';

const Home = ({ addToCart }) => {
  const [pizzas, setPizzas] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
   
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchPizzas();
  }, []); 

  if (loading) {
    return <div>Loading pizzas...</div>;
  }

  if (error) {
    return <div>Error loading pizzas: {error}</div>;
  }

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
