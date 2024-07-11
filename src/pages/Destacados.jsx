import React from 'react';
import './Destacados.css'; // Importa el CSS aquí
import slide5 from './../assets/images/banner5.jpg'
import slide6 from './../assets/images/banner6.jpg'
import slide7 from './../assets/images/banner7.jpg'
import slide8 from './../assets/images/banner8.jpg'
import slide9 from './../assets/images/banner9.jpg'
import slide10 from './../assets/images/banner10.jpg'
const Destacados = () => {
    const destacados = [
        {
            nombre: 'Torta de Chocolate',
            descripcion: 'Exquisita y deliciosa tarta de chocolate, elaborada con los más finos ingredientes para ofrecerte una experiencia de sabor incomparable.',
            img: slide9
        },
        {
            nombre: 'Cheesecake de Maracuyá',
            descripcion: 'Exquisito cheesecake de maracuyá, con su característico sabor tropical y una textura suave y cremosa que se deshace en cada bocado.',
            img: slide8
        },
        {
            nombre: 'Cupcakes de Vainilla',
            descripcion: 'Exquisitos cupcakes esponjosos, perfumados con la dulzura de la vainilla, y meticulosamente decorados con una crema sedosa que deleitará tu paladar.',
            img: slide5
        },
        {
            nombre: 'Pastel de Fresas',
            descripcion: 'Delicioso pastel esponjoso relleno con fresas frescas y cubierto con crema batida, perfecto para disfrutar de un dulce momento lleno de sabores frescos.',
            img: slide6
        },
        {
            nombre: 'Galletas de Mantequilla',
            descripcion: 'Descubre nuestras irresistibles galletas de mantequilla, perfectamente crujientes, ideales para deleitar en cualquier ocasión especial.',
            img: slide7
        },
        {
            nombre: 'Milhojas de Durazno',
            descripcion: 'Disfruta de nuestra deliciosa milhojas de durazno, con capas de hojaldre crujiente, suave crema pastelera y jugosos duraznos frescos.',
            img: slide10
        },
    ];

    return (
        <section id="destacados" className="destacados-section">
            <div className="container">
                <h2 className="section-title">Productos Destacados</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {destacados.map((producto, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100 shadow-sm">
                                <img 
                                    src={producto.img} 
                                    className="card-img-top destacado-img" 
                                    alt={producto.nombre} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destacados;
