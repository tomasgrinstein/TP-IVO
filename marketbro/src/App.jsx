import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Acá vamos a construir el resto de la página */}
      <main style={{ padding: '20px' }}>
        <h2>Nuestros Pollos</h2>
        {/* Después acá pondremos las tarjetas de productos */}
      </main>
    </div>
  );
}

export default App;
