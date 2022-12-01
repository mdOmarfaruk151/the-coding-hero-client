import React from 'react';
import { Carousel } from 'react-bootstrap';
import Learning from '../../../src/images/home-top-slider/learning.jpg';
import people from '../../../src/images/home-top-slider/people.jpg';
import webDeveloper from '../../../src/images/home-top-slider/web-developer.jpg';

const TopSlideCover = () => {
    return (
        <div className='-mt-6 '>
             <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 "
          style={{height: '500px'}}
          src={Learning}
          alt="First slide"
        />
        <Carousel.Caption >
         <div className=''>
         <h3>Learning that gets you</h3>
          <p>Skills for your present and your future. Get started with us.</p>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 "
          style={{height: '500px'}}
          src={people}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div>
          <h3>Unlock the power of your people</h3>
          <p>The Coding Hero Business is trusted by 12.5K+ companies around the world. Find out what we can do for yours.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 "
          style={{height: '500px'}}
          src={webDeveloper}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div>
          <h3>Become A Web Developer</h3>
          <p>
          Becoming a web developer shouldn't be boring or frustrating. These  steps will help you gain much more clarity to take actions and work towards becoming a world class web developer and conquer your dream.
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
</div>
        
    );
};

export default TopSlideCover;