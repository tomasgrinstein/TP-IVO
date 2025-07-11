import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Pollos from './components/Pollos'; 
import './App.css';
import Carrito from './components/Carrito';


function App() {
  const [showCart, setShowCart] = useState(false);
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    setProductosEnCarrito((prev) => {
      const index = prev.findIndex((p) => p.id === producto.id);
      if (index >= 0) {
        const nuevos = [...prev];
        nuevos[index].cantidad += 1;
        return nuevos;
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };
  const eliminarProducto = (id) => {
    setProductosEnCarrito((prev) => prev.filter((p) => p.id !== id));
  };
  

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <Navbar /> {}
  
      <main style={{ padding: '20px' }}>
        <h2>Nuestros Pollos</h2>
        <div>
          <button className="icon-btn" onClick={toggleCart}>
            🛒 ({productosEnCarrito.reduce((acc, p) => acc + p.cantidad, 0)})
          </button>
        </div>
  
        <Pollos agregarAlCarrito={agregarAlCarrito} />
      </main>
  
      {showCart && (
        <Carrito
          productosEnCarrito={productosEnCarrito}
          onCerrar={toggleCart}
          onEliminarProducto={eliminarProducto}
        />
      )}
    </div>
  );
}

export default App;
