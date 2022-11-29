import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import box from '../../../src/images/teams/box-dark.svg';
import eventbrite from '../../../src/images/teams/eventbrite-dark.svg';
import nasdaq from '../../../src/images/teams/nasdaq-dark.svg';
import netapp from '../../../src/images/teams/netapp-dark.svg';
import tcs from '../../../src/images/teams/tcs-dark.svg';
import volkswagen from '../../../src/images/teams/volkswagen-dark.svg';

const Teams = () => {
    return (
        
     <div className=' container rounded-md ' >
        <h2 className='text-center mt-3'>Trusted by over 13,400 great teams</h2>
        <p className='text-center'>Leading companies use the same courses to help employees keep their skills fresh.</p>
        <div className='mb-3'>
           <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-50 mx-auto "
          style={{height: '168.5px'}}
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
          style={{height: '168.5px'}}
          src={volkswagen}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
     </div>
     </div>
    );
};

export default Teams;