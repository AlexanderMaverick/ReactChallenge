import Home from "./pages/Home";
import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (pizza) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === pizza.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/pizza/p001" element={<Pizza onAddToCart={handleAddToCart} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
