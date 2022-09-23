import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>AP Bookstore</h1>
      <NavLink to="/" className="link">Books</NavLink>
      <NavLink to="/categories" className="link">Categories</NavLink>
    </header>
  );
}

export default Header;
