import React, { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";
import { Modal, Button } from "react-bootstrap"; // Importa componentes de react-bootstrap

function Proveedores() {
    const [listaProveedores, setListaProveedores] = useState([]);
    const [listaProveedoresFiltrados, setListaProveedoresFiltrados] = useState([]);
    const [textoBuscar, setTextoBuscar] = useState("");
    const [filasPagina, setFilasPagina] = useState(5);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [totalFilas, setTotalFilas] = useState(0);
    const [pagina, setPagina] = useState(0);
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "proveedores.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setListaProveedores(data);
                setListaProveedoresFiltrados(data);
                setTotalFilas(data.length);
                setTotalPaginas(Math.ceil(data.length / filasPagina));
            });
    };

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Empresa</th>
                        <th>Contacto</th>
                        <th>Ciudad</th>
                        <th>País</th>
                        <th>Detalles</th> {/* Nueva columna para el ícono */}
                    </tr>
                </thead>
                <tbody>
                    {listaProveedoresFiltrados.slice(pagina * filasPagina, (pagina + 1) * filasPagina).map(item =>
                        <tr key={item.idproveedor}>
                            <td>{item.idproveedor}</td>
                            <td>{item.nombreempresa}</td>
                            <td>{item.nombrecontacto}</td>
                            <td>{item.ciudad}</td>
                            <td>{item.pais}</td>
                            <td>
                                <button className="btn btn-link" onClick={() => mostrarDetallesProveedor(item)}>
                                    <i className="bi bi-eye"></i> {/* Ícono de ojito */}
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    };

    const buscarTexto = (event) => {
        let texto = event.target.value;
        setTextoBuscar(texto);
        console.log(texto);
        const resultado = listaProveedores.filter(item =>
            item["nombreempresa"].toUpperCase().includes(texto.toUpperCase()) ||
            item["nombrecontacto"].toUpperCase().includes(texto.toUpperCase()) ||
            item["pais"].toUpperCase().includes(texto.toUpperCase()) ||
            item["ciudad"].toUpperCase().includes(texto.toUpperCase())
        );
        setListaProveedoresFiltrados(resultado);
    };

    const dibujarPaginacion = () => {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#" onClick={() => retroceder()}>Retroceder</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#" onClick={() => avanzar()}>Avanzar</a></li>
                </ul>
            </nav>
        );
    };

    const retroceder = () => {
        if (pagina > 0) {
            setPagina(pagina - 1);
        }
    };

    const avanzar = () => {
        if (pagina < totalPaginas - 1) {
            setPagina(pagina + 1);
        }
    };

    const mostrarDetallesProveedor = (proveedor) => {
        setProveedorSeleccionado(proveedor);
        setShowModal(true); // Mostrar el modal al hacer clic en el ícono de ojito
    };

    const cerrarModal = () => {
        setShowModal(false); // Función para cerrar el modal
        setProveedorSeleccionado(null); // Limpiar el proveedor seleccionado
    };

    return (
        <section id='proveedores' className='padded'>
            <div className="container">
                <h2>Proveedores</h2>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Indique expresión a buscar"
                        value={textoBuscar} onChange={(event) => buscarTexto(event)} />
                </div>
                {dibujarTabla()}
                {dibujarPaginacion()}

                {/* Modal para mostrar los detalles del proveedor */}
                <Modal show={showModal} onHide={cerrarModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Detalles del Proveedor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {proveedorSeleccionado &&
                            <div>
                                <p><strong>Código:</strong> {proveedorSeleccionado.idproveedor}</p>
                                <p><strong>Empresa:</strong> {proveedorSeleccionado.nombreempresa}</p>
                                <p><strong>Contacto:</strong> {proveedorSeleccionado.nombrecontacto}</p>
                                <p><strong>Ciudad:</strong> {proveedorSeleccionado.ciudad}</p>
                                <p><strong>País:</strong> {proveedorSeleccionado.pais}</p>
                            </div>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={cerrarModal}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </section>
    );
}

export default Proveedores;