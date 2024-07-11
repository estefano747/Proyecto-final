import './MainFooter.css';
import { BsFileText } from 'react-icons/bs'; // Importar el ícono de libro de reclamaciones
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom

function MainFooter() {
    return (
        <footer id='main-footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Navegación</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/tienda">Productos</a></li>
                            <li><a href="/empleados">Empleados</a></li>
                            <li><a href="/proveedores">Proveedores</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h5>Contacto</h5>
                        <ul className="list-unstyled">
                            <li>Dirección: Av. Tomas Duarte 134, Lima</li>
                            <li>Teléfono: +945230746</li>
                            <li>Email: Cokeliciosos321@gmail.com</li>
                            <li className="libro-reclamaciones">
                                <Link to="/libro-reclamaciones">Libro de Reclamaciones <BsFileText size="2em" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="text-center">2024 Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default MainFooter;