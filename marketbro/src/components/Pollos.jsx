import React from 'react';

// Importar imágenes con extensión .jpeg
import pollo1 from './pollo1.jpeg';
import pollo2 from './pollo2.jpeg';
import pollo3 from './pollo3.jpeg';
import pollo4 from './pollo4.jpeg';

const productos = [
  {
    id: 1,
    nombre: 'Pechuga de Pollo Sin Hueso',
    imagen: pollo1,
  },
  {
    id: 2,
    nombre: 'Muslos de Pollo',
    imagen: pollo2,
  },
  {
    id: 3,
    nombre: 'Alas de Pollo',
    imagen: pollo3,
  },
  {
    id: 4,
    nombre: 'Pechuga Rellena de Jamón y Queso',
    imagen: pollo4,
  },
];

function Pollos() {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {productos.map((producto) => (
        <div key={producto.id} style={{ width: '250px' }}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
      ))}
    </div>
  );
}

export default Pollos;
