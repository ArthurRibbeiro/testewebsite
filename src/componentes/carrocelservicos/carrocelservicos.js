import '../estilos/carrocelservicos/carrocelservicos.css'
import Celulacarrocelservicos from './celulacarrocelservicos'

import "../estilos/carrocelservicos/carrocelservicos.css"



import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carrocelservicos(){
    const settings = {
        arrows:false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
                infinite: false,
              slidesToShow: 1,
              centerMode:true,
              centerPadding: '10%',
            },
          },
        ],
      };
    
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

