import React from "react";
import { useCarrito } from "../Context/CarritoContext";

function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();

  // Función para calcular el total a pagar
  const calcularTotal = () => {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    return total;
  };

  const handleEliminarProducto = (idProducto) => {
    eliminarDelCarrito(idProducto);
  };

  const handleVaciarCarrito = () => {
    vaciarCarrito();
  };

  return (
    <section className="padded">
      <div className="container">
        <h2>Carrito de compras</h2>
        <div className="row">
          {carrito.length === 0 ? (
            <div className="alert alert-warning" role="alert">
              Su carrito de compras está vacío
            </div>
          ) : (
            <div className="col-lg-8">
              <table className="table">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Producto</th>
                    <th className="text-end">Precio</th>
                    <th className="text-end">Cantidad</th>
                    <th className="text-end">Subtotal</th>
                    <th className="text-center">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((producto) => (
                    <tr key={producto.id}>
                      <td>{producto.id}</td>
                      <td>{producto.nombre}</td>
                      <td className="text-end">{producto.precio.toFixed(2)}</td>
                      <td className="text-end">{producto.cantidad}</td>
                      <td className="text-end">{(producto.precio * producto.cantidad).toFixed(2)}</td>
                      <td className="text-center">
                        <button className="btn btn-sm btn-danger" onClick={() => handleEliminarProducto(producto.id)}>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4" className="text-end">Total</td>
                    <td className="text-end">{calcularTotal().toFixed(2)}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="5" className="text-end">
                      <button className="btn btn-danger" onClick={handleVaciarCarrito}>
                        Vaciar Carrito
                      </button>
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Carrito
