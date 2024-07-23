import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = ({ cartItemCount }) => {
  return (
    <li>
      <Link to="/cart" className="cart-icon">
        <FaShoppingCart />
        {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
      </Link>
    </li>
  );
};

export default CartIcon;