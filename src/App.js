import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Admin from './components/Admin/Admin';
import { ProductProvider } from './context/ProductContext'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </ProductProvider>
  );
}

export default App;