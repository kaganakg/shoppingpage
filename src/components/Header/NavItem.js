import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ to, icon }) => {
  return (
    <li>
      <Link to={to} className="nav-icon">
        {icon}
      </Link>
    </li>
  );
};

export default NavItem;