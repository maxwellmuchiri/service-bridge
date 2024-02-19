import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/">Home</a></li>
        <li className="navbar-item"><a href="/">About</a></li>
        <li className="navbar-item"><a href="/">Services</a></li>
        <li className="navbar-item"><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
