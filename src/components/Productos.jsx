import React, { useState } from "react";
import { useCarrito } from "../Context/CarritoContext";
import "./Productos.css"; // Asegúrate de importar correctamente el archivo CSS

function Productos({ productos }) {
  const { agregarAlCarrito } = useCarrito();
  const [cantidades, setCantidades] = useState(
    productos.reduce((acc, producto) => {
      acc[producto.id] = 0; // Inicializa cada producto con cantidad 0
      return acc;
    }, {})
  );

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const actualizarCantidad = (id, cantidad) => {
    setCantidades((prevCantidades) => ({
      ...prevCantidades,
      [id]: cantidad,
    }));
  };

  const abrirDetalleProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  const cerrarDetalleProducto = () => {
    setProductoSeleccionado(null);
  };

  const agregarProductoAlCarrito = (producto) => {
    if (cantidades[producto.id] > 0) {
      agregarAlCarrito(producto, cantidades[producto.id]);
      actualizarCantidad(producto.id, 0);
    } else {
      alert("Debe ingresar una cantidad válida mayor que cero.");
    }
  };

  return (
    <>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4 mb-4 producto" key={producto.id}>
            <div className="card">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
                onClick={() => abrirDetalleProducto(producto)}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text">Precio: S/ {producto.precio.toFixed(2)}</p>
                  <button
                    className="btn btn-link"
                    onClick={() => abrirDetalleProducto(producto)}
                  >
                    <i className="bi bi-eye"></i> Ver detalles
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar detalles del producto */}
      {productoSeleccionado && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{productoSeleccionado.nombre}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={cerrarDetalleProducto}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={productoSeleccionado.imagen}
                  className="img-fluid"
                  alt={productoSeleccionado.nombre}
                />
                <div>
                  {productoSeleccionado.descripcion && (
                    <p>{productoSeleccionado.descripcion}</p>
                  )}
                </div>
                <p>Precio: S/ {productoSeleccionado.precio.toFixed(2)}</p>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    value={cantidades[productoSeleccionado.id]}
                    onChange={(e) =>
                      actualizarCantidad(productoSeleccionado.id, parseInt(e.target.value))
                    }
                    min="0"
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => agregarProductoAlCarrito(productoSeleccionado)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Productos;
