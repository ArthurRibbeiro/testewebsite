import '../estilos/carrocelservicos/carrocelservicos.css'
import Celulacarrocelservicos from './celulacarrocelservicos'

import "../estilos/carrocelservicos/carrocelservicos.css"



import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carrocelservicos(){
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed:500,
        slidesToShow:4,
        slidesToScroll:3,
    }
    
    return(
        <div className='carrocelServicosSpace'>
            <h2>Serviços</h2>

            <Slider style={{ width: "90%", margin: "0 auto" }} {...settings}>
                <Celulacarrocelservicos />
                <Celulacarrocelservicos />
                <Celulacarrocelservicos />
                <Celulacarrocelservicos />
                <Celulacarrocelservicos />
                <Celulacarrocelservicos />
                <Celulacarrocelservicos />
                <Celulacarrocelservicos />
                

            
            </Slider>
        </div>

    )
}

export default Carrocelservicos

