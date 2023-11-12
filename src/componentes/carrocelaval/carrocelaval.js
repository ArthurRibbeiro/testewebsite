import '../estilos/carrocelaval/carrocelaval.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Celulacarrocelaval from "./celulacarrocelaval";

function Carrocelaval() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding: '30%',
        arrows:false,
        responsive: [
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '10%',
        },
      },
    ],
        
      };

    return (
        <div className='carrocelaval'>
        <div className='tituloaval'><h2 className='tituloescuro'>Quem já contratou </h2><h2 className='tituloclaro'>recomenda</h2></div>
        <Slider {...settings}>
        <Celulacarrocelaval />
        <Celulacarrocelaval />
        <Celulacarrocelaval />
        <Celulacarrocelaval />
        <Celulacarrocelaval />
        </Slider>
            
        </div>
    )
}

export default Carrocelaval;