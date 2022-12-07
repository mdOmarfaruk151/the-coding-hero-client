import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaEye, FaStar, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CoursesSummaryCard = ({courses}) => {
    const {_id} = courses;
    return (
        <div className=''>
            <Card className='dark:border-cyan-500 border-4 ' style={{hight:"30px"}}>
      <Card.Img variant="top" className='h-40 w-full' src={courses?.image_url} />
      
      <Card.Body className='dark:bg-black bg-sky-100 rounded-b-md'>
      <span className="badge badge-info text-black -mt-2 -mb-1">{courses.topic}</span>
      
        <Card.Title>
        <p className=''>{courses?.title} <span className="badge badge-warning badge-lg text-black p-1 animate-bounce"><>{courses?.badge}</></span></p>  
        </Card.Title>
        <Card.Text>
          
          <div>
            <h2 className='-mt-5 mb-3'>${courses?.price}</h2>
          </div>
          <div className='d-flex items-center -mt-2'>
            <FaStar className='text-warning me-1 '></FaStar>
            <span>{courses?.rating.number}</span><span className='ml-1'>{courses?.rating.people}</span>
          </div>
          <div className='d-flex items-center'>
            <FaUserGraduate className='text-success mr-1 '></FaUserGraduate>
            <span className='mr-1'>{courses?.students}</span><span>Students</span>
          </div>
          <div className='d-flex items-center'>
             <FaEye className='text-warning mr-1 '/>
             <span>{courses?.total_view}</span>
          </div>
          
        </Card.Text>
        <Button variant="success" className='-mt-3'><Link className='text-white font-bold no-underline' to={`/course/${_id}`}>View Full Details</Link> </Button>
      </Card.Body>
    </Card>
            </div>
    );
};

export default CoursesSummaryCard;