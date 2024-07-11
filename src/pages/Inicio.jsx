import Envios from "../home/Envios"
import MainBanner from "../home/MainBanner"
import Destacados from "./Destacados"
import Nosotros from "../home/Nosotros"

function Inicio() {
    return (
        <>
            <MainBanner/>
            <Nosotros/>    
            <Destacados/>
            <Envios/>
        </>
    )
}

export default Inicio