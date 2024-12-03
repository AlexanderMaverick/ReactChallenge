import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Cart from './components/Cart'; // Importar el carrito
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('register'); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [cart, setCart] = useState([]); 
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const pizzaExists = prevCart.find((item) => item.id === pizza.id);
      if (pizzaExists) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  const renderPage = () => {
    if (!isLoggedIn) {
      if (currentPage === 'register') {
        return <RegisterPage setCurrentPage={setCurrentPage} />;
      }
      return <LoginPage setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />;
    }

    if (currentPage === 'cart') {
      return <Cart cart={cart} setCart={setCart} />; 
    }

    return <Home addToCart={addToCart} />; 
  };

  return (
    <div>
      <Navbar
        setCurrentPage={setCurrentPage}
        cartCount={cart.length}
        total={cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
