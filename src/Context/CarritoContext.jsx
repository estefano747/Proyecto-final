import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => {
  return useContext(CarritoContext);
};

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    const itemEnCarrito = carrito.find((item) => item.id === producto.id);

    if (itemEnCarrito) {
      const nuevoCarrito = carrito.map((item) =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  const eliminarDelCarrito = (idProducto) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== idProducto);
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
