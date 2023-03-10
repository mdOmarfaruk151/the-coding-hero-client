import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Offers1 from '../../../../src/assets/Offers/11-11-offer.png';
import Offers2 from '../../../../src/assets/Offers/black-friday-offer.png';
import Offers3 from '../../../../src/assets/Offers/christmas-offer.jpg';


const OffersCarousel = () => {
    return (
        <div>
            <div className='mt-2 ml-2 mx-auto'>
      <Carousel className="ml-2 ">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: '190px'}}
            src={Offers1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: '190px'}}
            src={Offers2}
            alt="Second slide"
          />        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: '190px'}}
            src={Offers3}
            alt="Third slide"
          />        
        </Carousel.Item>
      </Carousel>
    </div>
        </div>
    );
};

export default OffersCarousel;