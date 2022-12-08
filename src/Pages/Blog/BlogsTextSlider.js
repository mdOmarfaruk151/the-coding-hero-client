import React from 'react';
import { Carousel } from 'react-bootstrap';

const BlogsTextSlider = () => {
    return (
        <div className='mb-10 w-full '>
             <Carousel className=''>
      <Carousel.Item className=''>
      <h4 className='mb-10 ml-20 mr-20 ' style={{height:"90px", weight:"120px"}}> What is cors?</h4>
      </Carousel.Item>
      <Carousel.Item className='max-w-full'>
      <h4 className='mb-10 ml-20 mr-20' style={{height:"90px", weight:"120px"}}>Why are you using firebase? </h4>
      </Carousel.Item>

      <Carousel.Item className='max-w-full'>
      <h4 className='mb-10 ml-20 mr-20' style={{height:"90px", weight:"120px"}}>What other options do you have to implement authentication?</h4>
      </Carousel.Item>

      <Carousel.Item>
      <h4 className='mb-10 ml-20 mr-20' style={{height:"90px", weight:"120px"}}>How does the private route work?</h4>
      </Carousel.Item>

      <Carousel.Item>
      <h4 className='mb-10 ml-20 mr-20' style={{height:"90px", weight:"120px"}}>What is Node? </h4>
      </Carousel.Item>

      <Carousel.Item>
      <h4 className='mb-10 ml-20 mr-20' style={{height:"90px", weight:"120px"}}>How does Node work?</h4>
      </Carousel.Item>
      
    </Carousel>
        </div>
    );
};

export default BlogsTextSlider;