import React from 'react';
import { Link } from 'react-router-dom';
import './Tooltip.css';

const Tooltip = ({ cartItems, totalPrice, onGoToCart }) => {
  return (
    <div className="tooltip">
      <h3>Sepet</h3>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Toplam: ${totalPrice.toFixed(2)}</p>
      <Link to="/cart">
        <button onClick={onGoToCart}>Sepete Git</button>
      </Link>
    </div>
  );
};

export default Tooltip;