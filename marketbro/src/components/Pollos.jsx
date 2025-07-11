import React from 'react';
import pollo1 from './pollo1.jpeg';
import pollo2 from './pollo2.jpeg';
import pollo3 from './pollo3.jpeg';
import pollo4 from './pollo4.jpeg';

const productos = [
  {
    id: 1,
    nombre: 'Pechuga de Pollo Sin Hueso',
    descripcion: 'Pechuga de pollo fresca, sin hueso y sin piel. Ideal para preparaciones saludables.',
    precio: '$8.99',
    imagen: pollo1,
  },
  {
    id: 2,
    nombre: 'Muslos de Pollo',
    descripcion: 'Muslos de pollo jugosos y tiernos, perfectos para guisos y preparaciones al horno.',
    precio: '$6.99',
    imagen: pollo2,
  },
  {
    id: 3,
    nombre: 'Alas de Pollo',
    descripcion: 'Alas de pollo frescas, ideales para barbacoas y preparaciones picantes.',
    precio: '$6.99',
    imagen: pollo3,
  },
  {
    id: 4,
    nombre: 'Pechuga Rellena de Jamón y Queso',
    descripcion: 'Pechuga de pollo rellena artesanalmente con jamón y queso, lista para hornear.',
    precio: '$15.99',
    imagen: pollo4,
  },
];

function Pollos({ agregarAlCarrito }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '40px',
        paddingTop: '40px',
      }}
    >
      {productos.map((producto) => (
        <div
          key={producto.id}
          style={{
            width: '220px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{
              width: '100%',
              borderRadius: '10px',
              objectFit: 'cover',
              marginBottom: '10px',
            }}
          />
          <h4 style={{ margin: '0 0 6px 0', textAlign: 'center' }}>{producto.nombre}</h4>
          <p style={{ fontSize: '14px', textAlign: 'center', color: '#333' }}>
            {producto.descripcion}
          </p>
          <p style={{ fontWeight: 'bold', color: '#d32f2f', marginTop: '8px' }}>{producto.precio}</p>
          <button
            onClick={() => agregarAlCarrito(producto)}
            style={{
              backgroundColor: '#c62828',
              color: 'white',
              padding: '8px 12px',
              border: 'none',
              borderRadius: '6px',
              marginTop: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

export default Pollos;
