import React from 'react';
import './Nosotros.css'; // Archivo de estilos CSS para estilizar la página

function Nosotros() {
    return (
        <section className="nosotros-section">
            <div className="container">
                <h2 className="section-title">NOSOTROS</h2>
                <div className="row">
                    <article className="col-md-4">
                        <div className="nosotros-card">
                            <h3 className="card-title">¿Quiénes Somos?</h3>
                            <p className="card-text">Bienvenidos a Cokeliciosos, donde cada pastel narra una historia y cada mordisco es una fiesta. Somos una pastelería artesanal ubicada en el centro de la ciudad, dedicada a ofrecer experiencias inigualables a través de nuestros productos. Desde nuestras recetas clásicas hasta nuestras creaciones más innovadoras, todo lo hacemos con pasión y esmero.</p>
                        </div>
                    </article>
                    <article className="col-md-4">
                        <div className="nosotros-card">
                            <h3 className="card-title">Nuestra Historia</h3>
                            <p className="card-text">Nuestra dedicación a la pastelería se originó hace más de dos décadas en una modesta cocina familiar, donde las recetas tradicionales y el profundo aprecio por los ingredientes frescos eran fundamentales para cada creación. Desde aquellos primeros días, nuestra pasión por la excelencia culinaria ha sido el motor que impulsó nuestro camino hacia el éxito.</p>
                        </div>
                    </article>
                    <article className="col-md-4">
                        <div className="nosotros-card">
                            <h3 className="card-title">Nuestros Proyectos a Futuro</h3>
                            <p className="card-text">En Cokeliciosos, nos emociona el futuro tanto como nos apasiona la repostería. Estamos comprometidos a seguir deleitando a nuestros clientes con creaciones innovadoras y deliciosas. Para los próximos años, estamos enfocados en expandir nuestra línea de productos, para tener muchisimas mas variedad en la carta, sin sacrificar el sabor exquisito que nos caracteriza.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Nosotros;
