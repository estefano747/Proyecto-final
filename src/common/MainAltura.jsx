import './MainAltura.css';
import { Link } from "react-router-dom";
import logo from "./../assets/images/Logo.png"; 

function MainAltura() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">ID+</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/proveedores">Proveedores</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/directores">Directores</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/empleados">Empleados</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/seleccionados"><i className="bi bi-person-check"></i> Seleccionados</Link>
          </li>
          <li className="nav-item logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Paises">Paises</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tienda">Tienda</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Pedidos">Pedidos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/carrito"><i className="bi bi-basket"></i> Carrito</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/"><i className="bi bi-person"></i> Iniciar sesión</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default MainAltura
