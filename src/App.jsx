import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainFooter from './common/MainFooter'
import Inicio from './pages/Inicio'
import Proveedores from './pages/Proveedores'
import Empleados from './pages/Empleados'
import Tienda from './pages/Tienda'
import ProductoDetalle from './pages/ProductoDetalle'
import Carrito from './pages/Carrito'
import Directores from './pages/Directores'
import MainAltura from './common/MainAltura'
import Pedidos from './pages/Pedidos'
import PedidoDetalle from './pages/PedidoDetalle'
import Seleccionados from './pages/Seleccionados'
import Paises from './pages/Paises'
import { EmpleadosProvider } from './Context/EmpleadosContext'
import LibroDeReclamaciones from './pages/LibroDeReclamaciones'
import { CarritoProvider } from './Context/CarritoContext';
function App() {

  return (
    <>
      <BrowserRouter>
      <EmpleadosProvider>
      <MainAltura/>
      <CarritoProvider>
        
        <main>
          <Routes>

            <Route path='/' element={<Inicio/>} />
            <Route path='/proveedores' element={<Proveedores/>} />
            <Route path='/empleados' element={<Empleados/>} />
            <Route path='/tienda' element={<Tienda/>} />
            <Route path='/productodetalle/:idproducto' element={<ProductoDetalle/>} />
            <Route path='/carrito' element={<Carrito/>} />
            <Route path='/directores' element={<Directores/>} />
            <Route path='/pedidos' element={<Pedidos />} />
            <Route path='/pedidos/:idpedido' element={<PedidoDetalle />} />
            <Route path='/seleccionados' element={<Seleccionados empleadosSeleccionados={[]} />} />
            <Route path="/paises" element={<Paises />} /> 
            <Route path="/libro-reclamaciones" element={<LibroDeReclamaciones />} />
          </Routes>
        </main>

        <MainFooter/>
        </CarritoProvider>
        </EmpleadosProvider>
      </BrowserRouter>
    </>
  )
}

export default App
