import slide1 from "./../assets/images/banner1.jpg"
import slide2 from "./../assets/images/banner2.jpg"
import slide3 from "./../assets/images/banner3.jpg"
import slide4 from "./../assets/images/banner4.jpg"
import './MainBanner.css'; // Importa el archivo CSS
function MainBanner() {
  const carouselStyle = {
    maxHeight: '600px', 
    overflow: 'hidden'
  };

  const imgStyle = {
    width: '100%',
    height: '550px', 
    objectFit: 'cover'
  };

  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true" style={carouselStyle}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="..." style={imgStyle} />
          <div className="carousel-caption d-none d-md-block">
                            <h5>EXPERIENCIA INOLVIDABLE</h5>
                         
                        </div>
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="..." style={imgStyle} />
          <div className="carousel-caption d-none d-md-block">
                            <h5>INGREDIENTES DE PRIMERA</h5>
                            
                        </div>
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="..." style={imgStyle} />
          <div className="carousel-caption d-none d-md-block">
                            <h5>CALIDAD DEL MAS ALTO NIVEL</h5>
               
                        </div>
        </div>
        <div className="carousel-item">
          <img src={slide4} className="d-block w-100" alt="..." style={imgStyle} />
          <div className="carousel-caption d-none d-md-block">
                            <h5>COCINEROS EXPERTOS Y PROFESIONALES</h5>
                    
                        </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default MainBanner
