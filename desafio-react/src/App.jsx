import { useState } from 'react';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Cart from './components/Cart';

import './App.css'; // solo endpoint de Pizza.jsx
import 'bootstrap/dist/css/bootstrap.min.css'; // solo endpoint de Pizza.jsx
import Pizza from './components/Pizza'; // solo endpoint de Pizza.jsx
import Navbar from './components/Navbar'; // solo endpoint de Pizza.jsx
import Footer from './components/Footer'; // solo endpoint de Pizza.jsx


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

    if (currentPage === 'pizza') {
      return <Pizza />;
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


// solo endpoint de Pizza.jsx

/*
const App = () => {
  return (
    <div>
      <Navbar
        setCurrentPage={() => console.log('Set page')}
        cartCount={0}
        total={0}
        isLoggedIn={false}
        setIsLoggedIn={() => console.log('Set login state')}
      />
      <Pizza/>
      <Footer/>
    </div>
  );
};
*/

export default App;
