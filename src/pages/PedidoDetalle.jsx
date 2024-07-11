// pages/PedidoDetalle.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiWebURL } from '../utils';

// Importa todas las imágenes
import slide10 from "../assets/images/banner10.jpg";
import slide9 from "../assets/images/banner9.jpg";
import slide8 from "../assets/images/banner8.jpg";
import slide7 from "../assets/images/banner7.jpg";
import slide6 from "../assets/images/banner6.jpg";
import slide5 from "../assets/images/banner5.jpg";
import slide11 from "../assets/images/banner11.jpg";
import slide12 from "../assets/images/banner12.jpg";
import slide13 from "../assets/images/banner13.jpg";
import slide14 from "../assets/images/banner14.jpg";
import slide15 from "../assets/images/banner15.jpg";
import slide16 from "../assets/images/banner16.jpg";
import slide17 from "../assets/images/banner17.jpg";
import slide18 from "../assets/images/banner18.jpg";
import slide19 from "../assets/images/banner19.jpg";
import slide20 from "../assets/images/banner20.jpg";
import slide21 from "../assets/images/banner21.jpg";
import slide22 from "../assets/images/banner22.jpg";
import slide23 from "../assets/images/banner23.jpg";
import slide24 from "../assets/images/banner24.jpg";
import slide25 from "../assets/images/banner25.jpg";
import slide26 from "../assets/images/banner26.jpg";
import slide27 from "../assets/images/banner27.jpg";
import slide28 from "../assets/images/banner28.jpg";
import slide29 from "../assets/images/banner29.jpg";
import slide30 from "../assets/images/banner30.jpg";
import slide31 from "../assets/images/banner31.jpg";
import slide32 from "../assets/images/banner32.jpg";
import slide33 from "../assets/images/banner33.jpg";
import slide34 from "../assets/images/banner34.jpg";
import slide35 from "../assets/images/banner35.jpg";
import slide36 from "../assets/images/banner36.jpg";
import slide37 from "../assets/images/banner37.jpg";
import slide38 from "../assets/images/banner38.jpg";
import slide39 from "../assets/images/banner39.jpg";
import slide40 from "../assets/images/banner40.jpg";
import slide41 from "../assets/images/banner41.jpg";
import slide42 from "../assets/images/banner42.jpg";
import slide43 from "../assets/images/banner43.jpg";
import slide44 from "../assets/images/banner44.jpg";
import slide45 from "../assets/images/banner45.jpg";
import slide46 from "../assets/images/banner46.jpg";
import slide47 from "../assets/images/banner47.jpg";
import slide48 from "../assets/images/banner48.jpg";
import slide49 from "../assets/images/banner49.jpg";
import slide50 from "../assets/images/banner50.jpg";
import slide51 from "../assets/images/banner51.jpg";
import slide52 from "../assets/images/banner52.jpg";
import slide53 from "../assets/images/banner53.jpg";
import slide54 from "../assets/images/banner54.jpg";
import slide55 from "../assets/images/banner55.jpg";
import slide56 from "../assets/images/banner56.jpg";
import slide57 from "../assets/images/banner57.jpg";
import slide58 from "../assets/images/banner58.jpg";

function PedidoDetalle() {
    const { idpedido } = useParams();
    const [detalles, setDetalles] = useState([]);

    useEffect(() => {
        fetchDetallesPedido();
    }, []);

    const fetchDetallesPedido = () => {
        fetch(`${ApiWebURL}pedidosdetalle.php?idpedido=${idpedido}`)
            .then(response => response.json())
            .then(data => {
                setDetalles(data);
            })
            .catch(error => console.error('Error fetching detalles del pedido:', error));
    };
    const obtenerImagenAleatoria = () => {
        const imagenesDisponibles = [
            slide5, slide6, slide7, slide8, slide9, slide10,
            slide11, slide12, slide13, slide14, slide15, slide16,
            slide17, slide18, slide19, slide20, slide21, slide22,
            slide23, slide24, slide25, slide26, slide27, slide28,
            slide29, slide30, slide31, slide32, slide33, slide34,
            slide35, slide36, slide37, slide38, slide39, slide40,
            slide41, slide42, slide43, slide44, slide45, slide46,
            slide47, slide48, slide49, slide50, slide51, slide52,
            slide53, slide54, slide55, slide56, slide57, slide58
        ];
    
        // Obtener imágenes no utilizadas en el pedido actual
        const imagenesNoUsadas = imagenesDisponibles.filter(img => !detalles.some(detalle => `${ApiWebURL}fotos/${detalle.foto}` === img));
    
        if (imagenesNoUsadas.length === 0) {
            return slide5; // Imagen por defecto si todas están usadas (puedes cambiar esto según tus necesidades)
        }
    
        const indiceAleatorio = Math.floor(Math.random() * imagenesNoUsadas.length);
        return imagenesNoUsadas[indiceAleatorio];
    };
    

    return (
        <section id="pedido-detalle" className="padded">
            <div className="container">
                <h2>Detalles del Pedido {idpedido}</h2>
                <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2 g-4">
                    {detalles.map(detalle => (
                        <div className="col" key={detalle.iddetalle}>
                            <div className="card">
                            <img 
    src={`${ApiWebURL}fotos/${detalle.foto}`} 
    className="card-img-top" 
    alt={detalle.producto} 
    style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Establecer dimensiones fijas para todas las imágenes
    onError={(e) => e.target.src = obtenerImagenAleatoria()} // Imagen aleatoria si falla la carga
/>

                                <div className="card-body">
                                    <h5 className="card-title">{detalle.producto}</h5>
                                    <p className="card-text">Cantidad: {detalle.cantidad}</p>
                                    <p className="card-text">Precio: ${detalle.precio}</p>
                                    <p className="card-text">Descripción: {detalle.descripcion}</p>
                                    {/* Agrega más detalles según la estructura de tu API */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PedidoDetalle;
