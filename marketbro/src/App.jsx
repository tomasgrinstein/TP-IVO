import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Pollos from './components/Pollos'; 
import './App.css';

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <Navbar />

      <main style={{ padding: '20px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <h2>Nuestros Pollos</h2>
          <div>
            <button className="icon-btn" onClick={toggleCart}>🛒</button>
            {showCart && (
              <div className="cart-popup">
                Este es tu carrito
              </div>
            )}
          </div>
        </div>

        {}
        <Pollos />
      </main>
    </div>
  );
}

export default App;
