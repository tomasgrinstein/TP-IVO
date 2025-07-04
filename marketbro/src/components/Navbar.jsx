import React from 'react';
import '../Navbar.css'; // Importa los estilos

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-btn">☰</button>
      </div>

      <div className="navbar-center">
        <span className="logo">
          Market<span className="logo-red">Bro</span>
        </span>
      </div>

      <div className="navbar-right">
        <button className="icon-btn">🔍</button>
        <button className="icon-btn">🛒</button>
      </div>
    </nav>
  );
}

export default Navbar;
