import React, { useEffect, useState } from "react";
import Productos from "../components/Productos";
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
function Tienda() {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("postres");
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6;

  useEffect(() => {
    leerProductos();
  }, [categoriaSeleccionada]); // Actualizar productos cuando cambia la categoría seleccionada

  const leerProductos = () => {
    // Simular carga de productos desde una API o URL externa
    let productosData = [];

    switch (categoriaSeleccionada) {
      case "postres":
        productosData = [
            {
                id: 1,
                nombre: "Torta de Chocolate",
                imagen: slide9,
                precio: 5.00,
                descripcion: "Keke húmedo de chocolate, fudge, manjarblanco, chocolate bitter y almíbar.",
              },
              {
                id: 2,
                nombre: "Torta de chocolate (entera)",
                imagen: slide11,
                precio: 55.50,
                descripcion: "Rica, húmeda y cubierta con un glaseado suave. ¡Una indulgencia perfecta para los amantes del chocolate! (de 10 a 12 porciones)",
              },
              {
                id: 3,
                nombre: "Galletas de mantequilla",
                imagen: slide7,
                precio: 15.00,
                descripcion: "Clásica Galletas, elaboradas con ingredientes de primerea (5 porciones)",
              },
              {
                id: 4,
                nombre: "Milhojas de Durazno",
                imagen: slide10,
                precio: 4.50,
                descripcion: "Capas crujientes de hojaldre, suave crema pastelera y jugosos duraznos frescos.",
              },
              {
                id: 5,
                nombre: "Pastel de Fresas",
                imagen: slide6,
                precio: 5.00,
                descripcion: "Esponjoso bizcocho, crema suave y fresas frescas en cada capa.",
              },
              {
                id: 6,
                nombre: "Pastel de fresa (entero)",
                imagen: slide12,
                precio: 55.50,
                descripcion: "Capas de bizcocho tierno, relleno cremoso y fresas jugosas. Nuestro pastel de fresa entero es ideal para cualquier celebración (De 10 a 12 porciones).",
              },
              {
                id: 7,
                nombre: "Cheesecake de Maracuya",
                imagen: slide8,
                precio: 9.00,
                descripcion: "cremoso, con un toque de acidez y una base crujiente. ¡Un postre refrescante y delicioso!",
              },
              {
                id: 8,
                nombre: "Cupcake de Vainilla",
                imagen: slide5,
                precio: 4.00,
                descripcion: "Delicado y esponjoso, nuestro cupcake de vainilla es ideal para un capricho dulce.",
              },
              {
                id: 9,
                nombre: "Piono de Manjarblanco",
                imagen: slide13,
                precio: 8.50,
                descripcion: "Nuestro pionono de manjarblanco es una delicia dulce y suave, con un bizcocho ligero enrollado y relleno de manjarblanco cremoso.",
              },
              {
                id: 10,
                nombre: "Alfajor de Maicena",
                imagen: slide14,
                precio: 6.00,
                descripcion: "Delicadas galletas de maicena rellenas de dulce de leche cremoso. Un bocado irresistible.",
              },
              {
                id: 11,
                nombre: "Copa de Tres Leches",
                imagen: slide15,
                precio: 8.00,
                descripcion: "Bizcocho empapado en tres tipos de leche, coronado con crema batida. Un postre cremoso y delicioso.",
              },
              {
                id: 12,
                nombre: "Suspiro a la Limeña",
                imagen: slide16,
                precio: 10.00,
                descripcion: "Manjar blanco sobre dulce de leche, cubierto con merengue dorado y canela. Un clásico dulce y cremoso.",
              },
              {
                id: 13,
                nombre: "Tartaleta de Fresas con Chantilly",
                imagen: slide17,
                precio: 12.50,
                descripcion: "Base crujiente, fresas frescas y chantilly ligero. Una combinación perfecta de texturas y sabores para un dulce momento.",
              },
              {
                id: 14,
                nombre: "Tartaleta de Fresas con Chantilly (Grande)",
                imagen: slide18,
                precio: 130.00,
                descripcion: "Base crujiente, fresas frescas y una generosa capa de crema chantilly. Ideal para disfrutar en compañía en cualquier celebración (De 10 a 12 porciones).",
              },
              {
                id: 15,
                nombre: "Tiramisú",
                imagen: slide19,
                precio: 13.50,
                descripcion: "Capas de bizcochos de café y crema de mascarpone, espolvoreado con cacao. Un clásico italiano irresistible.",
              },
              {
                id: 16,
                nombre: "Tiramisú (Grande)",
                imagen: slide20,
                precio: 140.00,
                descripcion: "Capas generosas de bizcochos de café empapados en licor, cremosa mascarpone y cacao en polvo. Ideal para compartir en una reunión especial (De 10 a 12 porciones).",
              },
              {
                id: 17,
                nombre: "Pie de Limón",
                imagen: slide21,
                precio: 8.00,
                descripcion: "Base crujiente de galleta, relleno de crema suave de limón y coronado con merengue dorado. Un postre refrescante y perfecto para cualquier ocasión.",
              },
              {
                id: 18,
                nombre: "Pie de Limón (entero)",
                imagen: slide22,
                precio: 62.50,
                descripcion: "Base de galleta crujiente, relleno cremoso de limón y merengue dorado encima. Perfecto para disfrutar en compañía en cualquier celebración (8 porciones).",
              },
              {
                id: 19,
                nombre: "Profiterol de Caramelo",
                imagen: slide23,
                precio: 11.50,
                descripcion: "Bolitas de masa rellenas de crema y cubiertas con salsa de caramelo. Deliciosamente dulce y cremoso.",
              },
              {
                id: 20,
                nombre: "Profiterol de Pistacho",
                imagen: slide24,
                precio: 12.50,
                descripcion: "Bolitas de masa rellenas de crema de pistacho y bañadas en salsa de pistacho. Deliciosamente cremoso y lleno de sabor a pistacho.",
              },
              {
                id: 21,
                nombre: "Budin de Pan",
                imagen: slide25,
                precio: 9.50,
                descripcion: "Hecho con trozos de pan suave, pasas jugosas y una mezcla de huevos, leche y azúcar. Horneado hasta obtener una textura dorada con un toque de canela.",
              },
              {
                id: 22,
                nombre: "Keke de Zanahoria",
                imagen: slide26,
                precio: 4.00,
                descripcion: "Bizcocho esponjoso de zanahoria con nueces y especias, cubierto con glaseado de queso crema. Delicioso y aromático.",
              },
              {
                id: 23,
                nombre: "Keke de Zanahoria (entero)",
                imagen: slide27,
                precio: 30.00,
                descripcion: "Bizcocho de zanahoria con trozos de nueces y especias, cubierto con un glaseado suave de queso crema. Ideal para disfrutar en compañía en cualquier celebración (8 porciones).",
              },
              {
                id: 24,
                nombre: "Mini Siete Sabores",
                imagen: slide28,
                precio: 40.00,
                descripcion: "Pasta de hojaldre, bizcochuelo de vainilla, crema pastelera, chocolate bitter, crocante de castañas, duraznos al jugo, fresas, viruta de hojaldre y salsa de limón (4 porciones).",
              },
              {
                id: 25,
                nombre: "Mini Milhojas de Profiteroles y Fresas",
                imagen: slide29,
                precio: 40.00,
                descripcion: "Masa hojaldre, manjarblanco, crema pastelera, viruta de hojaldre y profiteroles de chocolate (4 porciones).",
              },
    
              {
                id: 26,
                nombre: "Pie de Manzana",
                imagen: slide30,
                precio: 7.50,
                descripcion: "Base de masa quebrada rellena de manzanas con canela y nuez moscada, horneado hasta dorarse. Delicioso caliente o frío.",
              },
    
              {
                id: 27,
                nombre: "Pie de Manzana (entero)",
                imagen: slide31,
                precio: 60.00,
                descripcion: "Base de masa quebrada, relleno abundante de manzanas con canela y nuez moscada, horneado hasta dorarse. Perfecto para compartir en cualquier ocasión especial (8 porciones)",
              },
    
        ];
        break;
      case "bebidasCalientes":
        productosData = [
            {
                id: 28,
                nombre: "Café Americano",
                imagen: slide32,
                precio: 7.90,
                descripcion: "El café americano es una bebida clásica elaborada con espresso y agua caliente, resultando en una taza suave y aromática, ideal para disfrutar en cualquier momento del día.",
              },
              {
                id: 29,
                nombre: "Café con leche",
                imagen: slide33,
                precio: 8.90,
                descripcion: "Café espresso suavizado con leche vaporizada, creando una mezcla cremosa y reconfortante, perfecta para cualquier momento del día.",
              },
    
              {
                id: 30,
                nombre: "Chocolate Caliente",
                imagen: slide34,
                precio: 11.90,
                descripcion: "Bebida cremosa de leche caliente con chocolate de alta calidad. Perfecta para días fríos y momentos dulces.",
              },
              {
                id: 31,
                nombre: "Cappuccino",
                imagen: slide35,
                precio: 11.00,
                descripcion: "Espresso con leche vaporizada y espuma, una mezcla reconfortante y deliciosa para cualquier momento.",
              },
              {
                id: 32,
                nombre: "Mocaccino",
                imagen: slide36,
                precio: 10.00,
                descripcion: "Espresso suave con una mezcla cremosa de chocolate y leche vaporizada, resultando en una bebida indulgente y llena de aroma.",
              },
              {
                id: 33,
                nombre: "Café latte",
                imagen: slide37,
                precio: 10.00,
                descripcion: "Espresso suave con leche vaporizada, creando una textura cremosa y equilibrada.",
              },
              {
                id: 34,
                nombre: "Café espresso",
                imagen: slide38,
                precio: 7.90,
                descripcion: "Bebida concentrada y aromática, obtenida al forzar agua caliente a través de granos de café finamente molidos.",
              },
              {
                id: 35,
                nombre: "Té negro",
                imagen: slide39,
                precio: 6.00,
                descripcion: "Infusión robusta y clásica, con un sabor fuerte y notas astringentes.",
              },
              {
                id: 36,
                nombre: "Té Verde",
                imagen: slide40,
                precio: 6.50,
                descripcion: "Infusión ligera y refrescante, conocida por su sabor herbáceo y propiedades antioxidantes.",
              },
    
        ];
        break;
      case "jugosBebidas":
        productosData = [
            {
                id: 37,
                nombre: "Chica Morada",
                imagen: slide41,
                precio: 7.50,
                descripcion: "Bebida peruana de maíz morado con aromas de frutas y especias. Dulce y refrescante.",
              },
              {
                id: 38,
                nombre: "Jugo de Fresa con Leche",
                imagen: slide42,
                precio: 14.00,
                descripcion: "Una mezcla refrescante de jugo de fresa natural con leche, creando una bebida dulce y cremosa.",
              },
              {
                id: 39,
                nombre: "Jugo de Piña",
                imagen: slide43,
                precio: 13.50,
                descripcion: "Bebida refrescante y tropical elaborada con jugo natural de piña, perfecta para disfrutar en días calurosos.",
              },
              {
                id: 40,
                nombre: "Jugo de Papaya",
                imagen: slide44,
                precio: 10.00,
                descripcion: "Refrescante bebida tropical elaborada con jugo natural de papaya, ideal para disfrutar como una opción saludable y deliciosa.",
              },
              {
                id: 41,
                nombre: "Jugo Surtido",
                imagen: slide45,
                precio: 12.0,
                descripcion: "Mezcla refrescante de varios jugos naturales de frutas, ofreciendo una explosión de sabores dulces y refrescantes en cada sorbo.",
              },
              {
                id: 42,
                nombre: "Americano Helado",
                imagen: slide46,
                precio: 7.50,
                descripcion: "Una versión refrescante del clásico café americano, servido sobre hielo para disfrutar en días calurosos, manteniendo su sabor robusto y aromático.",
              },
              {
                id: 43,
                nombre: "Cafe Helado",
                imagen: slide47,
                precio: 7.00,
                descripcion: "Una bebida refrescante preparada con café espresso y servida sobre hielo, ideal para disfrutar en días calurosos, combinando el sabor intenso del café con una textura fresca y cremosa.",
              },
              {
                id: 44,
                nombre: "Moka Helado",
                imagen: slide48,
                precio: 8.50,
                descripcion: "Una deliciosa bebida fría elaborada con café espresso, chocolate y leche, servida sobre hielo, perfecta para disfrutar como un refrescante capricho dulce y cremoso.",
              },
              {
                id: 45,
                nombre: "Refresco De Naranja",
                imagen: slide49,
                precio: 4.00,
                descripcion: "Una bebida refrescante y cítrica, preparada con jugo natural de naranja y agua, ideal para calmar la sed en cualquier momento del día.",
              },
              {
                id: 46,
                nombre: "Refresco De Maracuya",
                imagen: slide50,
                precio: 4.00,
                descripcion: "Bebida refrescante y tropical elaborada con jugo natural de maracuyá, perfecta para disfrutar en días calurosos con su sabor dulce y ligeramente ácido.",
              },
              {
                id: 47,
                nombre: "Inca Kola (Personal)",
                imagen: slide51,
                precio: 3.50,
                descripcion: "Gaseosa de color amarillo dorado con un sabor dulce y distintivo, con notas aromáticas únicas.",
              },
              {
                id: 48,
                nombre: "Inca Kola Zero (Personal)",
                imagen: slide52,
                precio: 3.50,
                descripcion: "Variante sin azúcar de la Inca Kola, con el mismo sabor distintivo y aroma, pero sin calorías adicionales.",
              },
              {
                id: 49,
                nombre: "Coca Cola (Personal)",
                imagen: slide53,
                precio: 3.50,
                descripcion: "Refresco carbonatado de sabor dulce, conocido mundialmente por su receta única y burbujeante.",
              },
              {
                id: 50,
                nombre: "Coca Cola Zero (Personal)",
                imagen: slide54,
                precio: 3.50,
                descripcion: "Variante de Coca-Cola sin azúcar, con el mismo sabor clásico pero sin calorías adicionales.",
              },
              {
                id: 51,
                nombre: "San Mateo sin Gas",
                imagen: slide55,
                precio: 3.00,
                descripcion: "Agua mineral natural sin gas, refrescante y perfecta para disfrutar en cualquier ocasión.",
              },
              {
                id: 52,
                nombre: "San Mateo con Gas",
                imagen: slide56,
                precio: 3.00,
                descripcion: "Agua mineral natural con gas, refrescante y burbujeante, ideal para acompañar comidas o refrescarse en cualquier momento.",
              },
              {
                id: 53,
                nombre: "Limonada Frozen (Vaso)",
                imagen: slide57,
                precio: 5.00,
                descripcion: "Una bebida refrescante y congelada de limón, servida en vaso para disfrutar en días calurosos, perfecta para suavizar la sed con su sabor cítrico y refrescante.",
              },
              {
                id: 54,
                nombre: "Limonada Frozen (Jarra)",
                imagen: slide58,
                precio: 20.00,
                descripcion: "Refrescante bebida congelada de limón servida en una jarra, ideal para compartir y disfrutar en días calurosos con su sabor cítrico y refrescante.",
              },
    
        ];
        break;
      default:
        productosData = [];
        break;
    }

    setProductos(productosData);
    setPaginaActual(1); // Reiniciar a la página 1 al cambiar la categoría
  };

  // Calcular el índice del primer y último producto de la página actual
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosPagina = productos.slice(indicePrimerProducto, indiceUltimoProducto);

  // Cambiar a la página siguiente
  const avanzarPagina = () => {
    if (paginaActual < Math.ceil(productos.length / productosPorPagina)) {
      setPaginaActual(paginaActual + 1);
    }
  };

  // Cambiar a la página anterior
  const retrocederPagina = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <section id="tienda" className="padded">
      <div className="container">
        <h2>Tienda</h2>
        <div className="btn-group mb-3" role="group" aria-label="Categorías">
          <button
            type="button"
            className={`btn ${
              categoriaSeleccionada === "postres" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setCategoriaSeleccionada("postres")}
          >
            Postres
          </button>
          <button
            type="button"
            className={`btn ${
              categoriaSeleccionada === "bebidasCalientes" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setCategoriaSeleccionada("bebidasCalientes")}
          >
            Bebidas Calientes
          </button>
          <button
            type="button"
            className={`btn ${
              categoriaSeleccionada === "jugosBebidas" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setCategoriaSeleccionada("jugosBebidas")}
          >
            Jugos y Bebidas
          </button>
        </div>
        <div className="row">
          <Productos productos={productosPagina} />
        </div>
        {/* Paginación */}
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${paginaActual === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={retrocederPagina}>
                Anterior
              </button>
            </li>
            {[...Array(Math.ceil(productos.length / productosPorPagina)).keys()].map((numero) => (
              <li key={numero + 1} className={`page-item ${paginaActual === numero + 1 ? "active" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => setPaginaActual(numero + 1)}
                >
                  {numero + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${paginaActual === Math.ceil(productos.length / productosPorPagina) ? "disabled" : ""}`}>
              <button className="page-link" onClick={avanzarPagina}>
                Siguiente
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Tienda;
