import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrivals1 from './images/arrivals1.jpg';
import arrivals2 from './images/arrivals2.jpg';
import arrivals3 from './images/arrivlas3.jpg';
import arrivals4 from './images/arrivals4.jpg';
import arrivals5 from './images/arrivals5.jpg';
import arrivals6 from './images/arrivals6.jpg';

const NewArrivals = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <div className="slick-prev">Previous</div>, 
        nextArrow: <div className="slick-next">Next</div>,
    };
    return(
        <div className="new-arrivals">
            <h1 className="new-arrivals-h1">New Arrivlas</h1>
            <Slider {...settings}>
                <div className="carousel-cell-arrivals">
                    <img src={arrivals1} alt="Slide 1" />
                   <h3>Max Mesh</h3>
                   <h3>749/-</h3>
                   <strike>1999/-</strike>
                </div>

                <div className="carousel-cell-arrivals">
                    <img src={arrivals2} alt="Slide 2" />
                    <h3>Cushion Soft</h3>
                    <h3>749/-</h3>
                    <strike>1999/-</strike>
                    
                    
                </div>

                <div className="carousel-cell-arrivals">
                    <img src={arrivals3} alt="Slide 3" />
                    <h3>Cushion Soft</h3>
                    <h3>749/-</h3>
                    <strike>1999/-</strike>
                    
                </div>

                <div className="carousel-cell-arrivals">
                    <img src={arrivals4} alt="Slide 4" />
                    <h3>Cushion Soft</h3>
                    <h3>749/-</h3>
                    <strike>1999/-</strike>
                    
                </div>

                <div className="carousel-cell-arrivals">
                    <img src={arrivals5} alt="Slide 5" />
                    <h3>Cushion Soft</h3>
                    <h3>749/-</h3>
                    <strike>1999/-</strike>

                </div>

                <div className="carousel-cell-arrivals">
                    <img src={arrivals6} alt="Slide 6" />
                    <h3>Cushion Soft</h3>
                    <h3>749/-</h3>
                    <strike>1999/-</strike>
                    

                </div>
            </Slider>
       </div>
    );
}
export default NewArrivals;