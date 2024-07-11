import React, { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";
import "./Envios.css"; // Asegúrate de tener estilos CSS correspondientes

function Envios() {
  const [listaEnvios, setListaEnvios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + "envios.php";
    fetch(rutaServicio)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la lista de envíos.");
        }
        return response.json();
      })
      .then((data) => {
        // Simulación de datos ficticios para dirección y email
        const dataConExtras = data.map((item) => ({
          ...item,
          direccion: `Calle ${Math.floor(Math.random() * 100)}`,
          email: `user${item.idempresaenvio}@hotmail.com`
        }));
        console.log(dataConExtras);
        setListaEnvios(dataConExtras);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <p className="loading">Cargando envíos...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <section className="envios-section">
      <div className="container">
        <h2 className="section-title">Envíos</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Dirección</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {listaEnvios.map((item) => (
              <tr key={item.idempresaenvio}>
                <td>{item.idempresaenvio}</td>
                <td>{item.nombre}</td>
                <td>{item.telefono}</td>
                <td>{item.latitud}</td>
                <td>{item.longitud}</td>
                <td>{item.direccion}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Envios;
