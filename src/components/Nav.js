import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>AP Bookstore</h1>
      <div className="h-links">
        <NavLink to="/" className="link">Books</NavLink>
        <NavLink to="/categories" className="link">Categories</NavLink>
      </div>
    </header>
  );
}

export default Header;
