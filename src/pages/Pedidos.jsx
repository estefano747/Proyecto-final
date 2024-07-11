// pages/Pedidos.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiWebURL } from '../utils';
import defaultImage from '../assets/images/Logo.png';

function Pedidos() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        fetchPedidos();
    }, []);

    const fetchPedidos = () => {
        fetch(ApiWebURL + 'pedidos.php')
            .then(response => response.json())
            .then(data => {
                const pedidosConFechas = data.map(pedido => ({
                    ...pedido,
                    fecha: generarFechaAleatoria()
                }));
                setPedidos(pedidosConFechas);
            })
            .catch(error => console.error('Error fetching pedidos:', error));
    };

    const generarFechaAleatoria = () => {
        const inicio = new Date();
        const fin = new Date(2024, 12, 7);
        const fecha = new Date(inicio.getTime() + Math.random() * (fin.getTime() - inicio.getTime()));
        const dia = String(fecha.getDate()).padStart(2, '0');
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
        const año = fecha.getFullYear();
        return `${dia}/${mes}/${año}`;
    };

    return (
        <section id="pedidos" className="padded">
            <div className="container">
                <h2>Pedidos</h2>
                <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2 g-4">
                    {pedidos.map(pedido => (
                        <div className="col" key={pedido.idpedido}>
                            <div className="card shadow-sm h-100">
                                <img 
                                    src={defaultImage} // Usando una imagen por defecto
                                    className="card-img-top img-fluid" 
                                    style={{ height: '200px', objectFit: 'cover' }}
                                    alt={`Pedido ${pedido.idpedido}`} 
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{pedido.idpedido}</h5>
                                    <p className="card-text">Fecha: {pedido.fecha}</p>
                                    <Link to={`/pedidos/${pedido.idpedido}`} className="btn btn-primary">Ver Detalles</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pedidos;
