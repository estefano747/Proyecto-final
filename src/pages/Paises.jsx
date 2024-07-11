import React, { useState, useEffect } from 'react';
import { ApiWebURL } from '../utils'

function Paises() {
    const [listaPaises, setListaPaises] = useState([]);
    const [codpais, setCodPais] = useState('');
    const [pais, setPais] = useState('');
    const [capital, setCapital] = useState('');
    const [area, setArea] = useState('');
    const [poblacion, setPoblacion] = useState('');
    const [continente, setContinente] = useState('');

    useEffect(() => {
        leerPaises();
    }, []);

    const leerPaises = () => {
        const rutaServicio = ApiWebURL + 'paises.php';
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setListaPaises(data);
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const rutaInsertar = ApiWebURL + 'paisesinsert.php';
        const formData = new FormData();
        formData.append('codpais', codpais);
        formData.append('pais', pais);
        formData.append('capital', capital);
        formData.append('area', area);
        formData.append('poblacion', poblacion);
        formData.append('continente', continente);

        try {
            const response = await fetch(rutaInsertar, {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            console.log('Nuevo país insertado:', data);
            // Actualizar la lista de países después de insertar
            leerPaises();
            // Limpiar los campos del formulario
            setCodPais('');
            setPais('');
            setCapital('');
            setArea('');
            setPoblacion('');
            setContinente('');
        } catch (error) {
            console.error('Error al insertar país:', error);
        }
    };

    return (
        <section id='paises' className='padded'>
            <div className="container">
                <h2>Paises</h2>
                <div className="mb-3">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="codpais" className="form-label">Código de País:</label>
                            <input type="text" className="form-control" id="codpais" value={codpais} onChange={(e) => setCodPais(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pais" className="form-label">País:</label>
                            <input type="text" className="form-control" id="pais" value={pais} onChange={(e) => setPais(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="capital" className="form-label">Capital:</label>
                            <input type="text" className="form-control" id="capital" value={capital} onChange={(e) => setCapital(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="area" className="form-label">Área:</label>
                            <input type="number" className="form-control" id="area" value={area} onChange={(e) => setArea(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="poblacion" className="form-label">Población:</label>
                            <input type="number" className="form-control" id="poblacion" value={poblacion} onChange={(e) => setPoblacion(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="continente" className="form-label">Continente:</label>
                            <input type="text" className="form-control" id="continente" value={continente} onChange={(e) => setContinente(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Insertar País</button>
                    </form>
                </div>
                <h3>Lista de Países</h3>
                <div className="row">
                    {listaPaises.map((pais, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{pais.pais}</h5>
                                    <p className="card-text">Capital: {pais.capital}</p>
                                    <p className="card-text">Área: {pais.area}</p>
                                    <p className="card-text">Población: {pais.poblacion}</p>
                                    <p className="card-text">Continente: {pais.continente}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Paises
