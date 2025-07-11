import React, { useState } from 'react';
import '../Navbar.css'; 

function Navbar() {
  const [mostrarBuscador, setMostrarBuscador] = useState(false);

  const toggleBuscador = () => {
    setMostrarBuscador(!mostrarBuscador);
  };

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
        <button className="icon-btn" onClick={toggleBuscador}>🔍</button>

        {mostrarBuscador && (
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="input-buscador" 
            autoFocus
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
