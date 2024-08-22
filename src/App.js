import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Navbar from './pages/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
