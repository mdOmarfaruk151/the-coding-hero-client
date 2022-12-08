import React from 'react';
import { Card } from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa';

const Cards = () => {
    return (
        <div className='d-flex mt-2 gap-2 '>
            <Card className='bg-primary font-bold text-white p-3 drop-shadow-lg'>
          <Card.Body >
            <Card.Title> Work With Us </Card.Title>
            <Card.Text>
              <p className='mb-5'>
              At Udemy, we're all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.
              </p>
              <div className='d-flex items-center'>
                <span className='-mt-1'>Join our team</span>
                <FaAngleRight/>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
            <Card className='bg-success text-white font-bold p-3 drop-shadow-lg'>
          <Card.Body>
            <Card.Title> See Our Research</Card.Title>
            <Card.Text>
              <p className='mb-5'>
              We're committed to improving lives through learning. Dig into our original research to learn about the forces that are shaping the modern workplace.
              </p>
              <div className='d-flex items-center'>
                <span className='-mt-1'>Learn More</span>
                <FaAngleRight/>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
            <Card className='bg-danger font-bold text-white p-3 drop-shadow-lg'>
          <Card.Body className='p-3 '>
            <Card.Title> Read Our Blog </Card.Title>
            <Card.Text>
              <p className='mb-5'>
              Want to know what we've been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more.
              </p>
              <div className='d-flex items-center'>
                <span className='-mt-1'>Read Now</span>
                <FaAngleRight/>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
           
        </div>
    );
};

export default Cards;