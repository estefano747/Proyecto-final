import React, { useState } from 'react';
import './LibroDeReclamaciones.css'; // Archivo de estilos CSS para estilizar la página

function LibroDeReclamaciones() {
    const [fechaReclamacion, setFechaReclamacion] = useState('');
    const [cliente, setCliente] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [enviado, setEnviado] = useState(false); // Estado para controlar si se ha enviado el reclamo
    const [respuesta, setRespuesta] = useState('');

    // Lista de respuestas posibles
    const respuestas = [
        'Se procedió a reprogramar el envío del pedido.',
        'Se está investigando el problema reportado.',
        'Lamentamos los inconvenientes y estamos trabajando en resolverlo.',
        'El departamento correspondiente se pondrá en contacto para resolver su reclamo.',
        'Su reclamo ha sido registrado y será procesado en las próximas 48 horas.'
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí podrías enviar los datos del reclamo a tu servidor o realizar alguna acción con ellos
        console.log('Fecha de Reclamación:', fechaReclamacion);
        console.log('Cliente:', cliente);
        console.log('Descripción:', descripcion);

        // Simulación de respuesta aleatoria después de 2 segundos
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * respuestas.length);
            setRespuesta(respuestas[randomIndex]);
            setEnviado(true);
        }, 2000);
    };

    return (
        <div className="libro-de-reclamaciones">
            <header className="header">
                <h1>Libro de Reclamaciones</h1>
                <p>Número de Reclamación: 492971951</p>
            </header>
            <main className="content">
                <section className="reclamacion">
                    <h2>Detalle de la Reclamación</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fechaReclamacion">Fecha de Reclamación:</label>
                            <input type="date" id="fechaReclamacion" value={fechaReclamacion} onChange={(e) => setFechaReclamacion(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cliente">Cliente:</label>
                            <input type="text" id="cliente" value={cliente} onChange={(e) => setCliente(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descripcion">Descripción:</label>
                            <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                        </div>
                        <button type="submit">Enviar Reclamación</button>
                    </form>
                </section>
                {enviado && (
                    <section className="respuesta">
                        <h2>Respuesta del Establecimiento</h2>
                        <p><strong>Fecha de Respuesta:</strong> {new Date().toLocaleDateString()}</p>
                        <p><strong>Detalle:</strong> {respuesta}</p>
                    </section>
                )}
            </main>
            <footer className="footer">
                <p>Para más información, visita <a href="https://librodereclamacionesperu.com/">Libro de Reclamaciones Perú</a>.</p>
            </footer>
        </div>
    );
}

export default LibroDeReclamaciones;
