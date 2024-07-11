// pages/Seleccionados.js
import React, { useContext } from "react";
import { EmpleadosContext } from "../Context/EmpleadosContext";

function Seleccionados() {
  const { empleadosSeleccionados } = useContext(EmpleadosContext);

  return (
    <section id='seleccionados' className='padded'>
      <div className="container">
        <h2 className="fs-4">Empleados Seleccionados</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {empleadosSeleccionados.map(item =>
            <div className="col mb-3" key={item.idempleado}>
              <div className="card h-100 text-center"> {/* Añadido text-center para centrar contenido */}
                <img 
                  src={item.foto} 
                  className="card-img-top img-thumbnail mx-auto" 
                  alt={item.nombres} 
                  style={{ objectFit: 'cover', height: '80px', width: '100%', maxWidth: '100px' }} // Ajuste de tamaño de imagen
                />
                <div className="card-body p-2 d-flex flex-column justify-content-center">
                  <h6 className="card-title fs-6 mb-0">{item.nombres} {item.apellidos}</h6> {/* Ajuste de tamaño de texto */}
                  <p className="card-text fs-7 text-center">{item.cargo}</p> {/* Ajuste de tamaño de texto y centrado */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Seleccionados;
