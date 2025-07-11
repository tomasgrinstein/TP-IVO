import React from "react";

function Carrito({ productosEnCarrito, onCerrar, onEliminarProducto }) {
  const total = productosEnCarrito.reduce(
    (acc, prod) => acc + parseFloat(prod.precio.replace('$', '')) * prod.cantidad,
    0
  );

  return (
    <div
      style={{
        position: "absolute",
        top: "40px",
        right: "0",
        width: "300px",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <button
        onClick={onCerrar}
        style={{
          background: "none",
          border: "none",
          fontSize: "18px",
          float: "right",
          cursor: "pointer",
        }}
      >
        ×
      </button>
      <h3>Tu carrito</h3>
      {productosEnCarrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        productosEnCarrito.map((prod) => (
          <div
            key={prod.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>
              {prod.nombre} x {prod.cantidad}
            </span>
            <span>${(parseFloat(prod.precio.replace("$", "")) * prod.cantidad).toFixed(2)}</span>
            <button
              onClick={() => onEliminarProducto(prod.id)}
              style={{
                backgroundColor: "#d32f2f",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Eliminar
            </button>
          </div>
        ))
      )}
      <hr />
      <p>
        <strong>Total: </strong>${total.toFixed(2)}
      </p>
    </div>
  );
}

export default Carrito;
