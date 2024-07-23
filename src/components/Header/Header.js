import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHome, FaUserShield } from 'react-icons/fa';
import { ProductContext } from '../../context/ProductContext';
import './Header.css';


const Header = () => {
  const { cartItems } = useContext(ProductContext);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price) || 0) * item.quantity, 0);

  return (
    <header className="header">
      <div className='logo'>
<a href="/">
<img src="\Logo.png" alt="Logo" className='logo' />
 </a>


      </div>
      
      <nav> 
        <ul>
          <li>
            <Link to="/" className="home-icon">
              <FaHome /> Ana Sayfa
            </Link>
          </li>
          <li>
            <Link to="/admin" className="admin-icon">
              <FaUserShield /> Admin
            </Link>
          </li>
          <li
            className="cart-icon-container"
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
          >
            <Link to="/cart" className="cart-icon">
              <FaShoppingCart /> Sepet
              {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
            </Link>
            {isTooltipVisible && (
              <div className="tooltip">
                <h3>Sepet</h3>
                <ul>
                  {cartItems.map(item => (
                    <li key={item.id}>
                      {item.name} - {item.quantity} x ${parseFloat(item.price).toFixed(2)}
                    </li>
                  ))}
                </ul>
                <p>Toplam: ${totalPrice.toFixed(2)}</p>
                <Link to="/cart">
                  <button onClick={() => setIsTooltipVisible(false)}>Sepete Git</button>
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;