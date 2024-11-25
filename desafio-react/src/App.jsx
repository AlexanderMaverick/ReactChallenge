import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('register');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderPage = () => {
    if (!isLoggedIn) {
      if (currentPage === 'register') {
        return <RegisterPage setCurrentPage={setCurrentPage} />;
      }
      return <LoginPage setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />;
    }
    return <Home />;
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};


export default App;