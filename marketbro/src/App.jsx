import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main style={{ padding: '20px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2>Nuestros Productos</h2>
          <button className="icon-btn">🛒</button>
        </div>

        {/* Después acá pondremos las tarjetas de productos */}
      </main>
    </div>
  );
}

export default App;
