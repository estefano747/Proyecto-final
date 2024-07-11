// pages/Empleados.js
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { EmpleadosContext } from "../Context/EmpleadosContext";

// Importa las imágenes de los empleados
import fotoEmpleado1 from "../assets/images/chef2.jpg";
import fotoEmpleado2 from "../assets/images/chef1.jpg";
import fotoEmpleado3 from "../assets/images/chef3.jpg";
import fotoEmpleado4 from "../assets/images/chef4.jpg";
import fotoEmpleado5 from "../assets/images/chef5.jpg";
import fotoEmpleado6 from "../assets/images/chef6.jpg";
import fotoEmpleado7 from "../assets/images/chef7.jpg";
import fotoEmpleado8 from "../assets/images/chef8.jpg";
import fotoEmpleado9 from "../assets/images/chef9.jpg";
import fotoEmpleado10 from "../assets/images/chef10.jpg";
import fotoEmpleado11 from "../assets/images/chef11.jpg";
import fotoEmpleado12 from "../assets/images/chef12.jpg";
import fotoEmpleado13 from "../assets/images/chef13.jpg";
import fotoEmpleado14 from "../assets/images/chef14.jpg";
import fotoEmpleado15 from "../assets/images/chef15.jpg";
import fotoEmpleado16 from "../assets/images/chef16.jpg";
import fotoEmpleado17 from "../assets/images/chef17.jpg";
import fotoEmpleado18 from "../assets/images/chef18.jpg";
import fotoEmpleado19 from "../assets/images/chef19.jpg";
import fotoEmpleado20 from "../assets/images/chef20.jpg";
// Añade más importaciones según sea necesario para cada empleado

function Empleados() {
  const [listaEmpleados, setListaEmpleados] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [pageSize, setPageSize] = useState(10); // Tamaño de página (empleados por página)
  const { empleadosSeleccionados, setEmpleadosSeleccionados } = useContext(EmpleadosContext);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    // Simulando la carga de datos desde un servicio
    const data = [
      { idempleado: 1, nombres: "Juan", apellidos: "Gomez", cargo: "Chef-Pastelero" },
      { idempleado: 2, nombres: "Camila", apellidos: "Castillo", cargo: "Chef-Pastelera" },
      { idempleado: 3, nombres: "Elena", apellidos: "Bologni", cargo: "Chef-Pastelera" },
      { idempleado: 4, nombres: "Patrick", apellidos: "Torres", cargo: "Chef-Pastelero" },
      { idempleado: 5, nombres: "Cesar", apellidos: "Martínez", cargo: "Decorador de Pasteles" },
      { idempleado: 6, nombres: "Ana", apellidos: "Bogani", cargo: "Decoradora de Pasteles" },
      { idempleado: 7, nombres: "Carlos", apellidos: "López", cargo: "Cajero" },
      { idempleado: 8, nombres: "Maria", apellidos: "Rodríguez", cargo: "Cajera" },
      { idempleado: 9, nombres: "Alejandro", apellidos: "Sánchez", cargo: "Mesero" },
      { idempleado: 10, nombres: "Laura", apellidos: "Fernández", cargo: "Mesera" },
      { idempleado: 11, nombres: "Miguel", apellidos: "Ramírez", cargo: "Mesero" },
      { idempleado: 12, nombres: "Diego", apellidos: "Díaz", cargo: "Personal de Limpieza" },
      { idempleado: 13, nombres: "Martín", apellidos: "Nuñez", cargo: "Personal de Limpieza" },
      { idempleado: 14, nombres: "Paula", apellidos: "González", cargo: "Personal de Limpieza" },
      { idempleado: 15, nombres: "Manuel", apellidos: "Ruiz", cargo: "Gerente" },
      { idempleado: 16, nombres: "Javier", apellidos: "Castro", cargo: "Supervisor" },
      { idempleado: 17, nombres: "Marina", apellidos: "Flores", cargo: "Supervisora" },
      { idempleado: 18, nombres: "Rafael", apellidos: "Jiménez", cargo: "Encargado del Marketing" },
      { idempleado: 19, nombres: "Gabriela ", apellidos: "Santos", cargo: "Encargada del area de ventas" },
      { idempleado: 20, nombres: "Claudia ", apellidos: "Herrera", cargo: "Encargada del area de atencion al cliente" }
      // Añade más empleados según sea necesario
    ];

    // Asigna las imágenes a cada empleado
    const empleadosConFotos = data.map(empleado => ({
      ...empleado,
      foto: determinarFotoParaEmpleado(empleado.idempleado)
    }));

    setListaEmpleados(empleadosConFotos);
  };

  const determinarFotoParaEmpleado = (idEmpleado) => {
    // Define la URL de la foto para cada empleado basado en su id
    switch (idEmpleado) {
      case 1:
        return fotoEmpleado1;
      case 2:
        return fotoEmpleado2;
      case 3:
        return fotoEmpleado3;
      case 4:
        return fotoEmpleado4;
      case 5:
        return fotoEmpleado5;
      case 6:
        return fotoEmpleado6;
      case 7:
        return fotoEmpleado7;
      case 8:
        return fotoEmpleado8;
      case 9:
        return fotoEmpleado9;
      case 10:
        return fotoEmpleado10;
      case 11:
        return fotoEmpleado11;
      case 12:
        return fotoEmpleado12;
      case 13:
        return fotoEmpleado13;
      case 14:
        return fotoEmpleado14;
      case 15:
        return fotoEmpleado15;
      case 16:
        return fotoEmpleado16;
      case 17:
        return fotoEmpleado17;
      case 18:
        return fotoEmpleado18;
      case 19:
        return fotoEmpleado19;
      case 20:
        return fotoEmpleado20;
      // Añade más casos según sea necesario
      default:
        return ""; // Puedes devolver una foto por defecto si no se encuentra una específica
    }
  };

  const toggleEmpleadoSeleccionado = (idEmpleado) => {
    const empleadoIndex = empleadosSeleccionados.findIndex(e => e.idempleado === idEmpleado);
    if (empleadoIndex !== -1) {
      const updatedSelection = [...empleadosSeleccionados];
      updatedSelection.splice(empleadoIndex, 1);
      setEmpleadosSeleccionados(updatedSelection);
    } else {
      const empleado = listaEmpleados.find(e => e.idempleado === idEmpleado);
      if (empleado) {
        setEmpleadosSeleccionados([...empleadosSeleccionados, empleado]);
      }
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getTotalPages = () => {
    return Math.ceil(listaEmpleados.length / pageSize);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return listaEmpleados.slice(startIndex, endIndex);
  };

  const dibujarCuadricula = () => {
    const pageData = getPageData();
    return (
      <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2 g-4">
        {pageData.map(item =>
          <div className="col" key={item.idempleado}>
            <div className="card h-100"> {/* Agregado h-100 para asegurar que todas las tarjetas tengan la misma altura */}
              <img 
                src={item.foto} // Usa la propiedad foto definida en el estado
                className="card-img-top img-fluid" // Agregado img-fluid para imágenes responsivas
                style={{ height: '200px', objectFit: 'cover' }} // Establece un tamaño fijo para la imagen
                alt={item.nombres} 
              />
              <div className="card-body text-center"> {/* Agregado text-center para centrar el contenido */}
                <h5 className="card-title">{item.nombres} {item.apellidos}</h5>
                <p className="card-text">Cargo: {item.cargo}</p>
                <input
                  type="checkbox"
                  onChange={() => toggleEmpleadoSeleccionado(item.idempleado)}
                  checked={empleadosSeleccionados.some(e => e.idempleado === item.idempleado)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderPagination = () => {
    const totalPages = getTotalPages();
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Retroceder</button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Avanzar</button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <section id='empleados' className='padded'>
      <div className="container">
        <h2>Empleados</h2>
        {dibujarCuadricula()}
        {renderPagination()}
        <Link to="/seleccionados" className="btn btn-primary">
          Ver Seleccionados ({empleadosSeleccionados.length})
        </Link>
      </div>
    </section>
  );
}

export default Empleados;
