import { useState, useEffect } from 'react';
import CardPizza from './CardPizza'; 

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        if (!response.ok) {
          throw new Error('Failed to fetch pizza details');
        }
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []); 
  if (loading) return <div>Loading pizza...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="pizza-details">
     <CardPizza
  name={pizza.name}
  price={pizza.price}
  ingredients={pizza.ingredients}
  img={pizza.img}
  desc={pizza.desc}
  onAddToCart={() => console.log('Added to cart')} 
/>


    </div>
  );
};

export default Pizza;
