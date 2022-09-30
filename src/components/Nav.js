import React from 'react';
import { NavLink } from 'react-router-dom';
import userImg from '../media/user-img.png';

function Header() {
  return (
    <header>
      <div className="h-links">
        <h1>Bookstore CMS</h1>
        <NavLink to="/" className="link">Books</NavLink>
        <NavLink to="/categories" className="link">Categories</NavLink>
      </div>
      <div id="user-pic">
        <img src={userImg} alt="profile-pic" />
      </div>
    </header>
  );
}

export default Header;
