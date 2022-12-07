import React from 'react';
import { Carousel } from 'react-bootstrap';
import box from '../../../images/teams/box-dark.svg';
import eventbrite from '../../../images/teams/eventbrite-dark.svg';
import nasdaq from '../../../images/teams/nasdaq-dark.svg';
import netapp from '../../../images/teams/netapp-dark.svg';
import tcs from '../../../images/teams/tcs-dark.svg';
import volkswagen from '../../../images/teams/volkswagen-dark.svg';

const TopCompanies = () => {
    return (
        <div className='mb-2'>
                   <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-50 mx-auto "
          style={{height: '103.5px'}}
          src={box}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-50 mx-auto"
          src={eventbrite}
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-50 mx-auto"
          src={nasdaq}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-50 mx-auto"
          src={netapp}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-50 mx-auto"
          src={tcs}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-50 mx-auto"
          style={{height: '103.5px'}}
          src={volkswagen}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
        </div>
    );
};

export default TopCompanies;