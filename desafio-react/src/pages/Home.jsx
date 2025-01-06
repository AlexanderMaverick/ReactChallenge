import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardPizza from '../components/CardPizza';
import Header from '../components/Header';

const Home = ({ onAddToCart }) => {
  const [pizzas, setPizzas] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [message, setMessage] = useState(""); 

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

  const handleAddToCart = (pizza) => {
    onAddToCart(pizza);
    setMessage(`Se agregó "${pizza.name}" al carrito.`);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  if (loading) {
    return <div>Loading pizzas...</div>;
  }

  if (error) {
    return <div>Error loading pizzas: {error}</div>;
  }

  return (
    <div>
      <Header />
      {message && <div className="alert alert-success">{message}</div>}

      <div className="d-flex justify-content-around flex-wrap">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
            onAddToCart={() => handleAddToCart(pizza)} 
          />
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default Home;
