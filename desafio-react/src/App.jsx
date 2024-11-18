import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
