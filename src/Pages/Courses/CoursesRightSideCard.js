import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaAward, FaCode, FaFileDownload, FaInfinity, FaMobileAlt, FaVideo } from 'react-icons/fa';

const CoursesRightSideCard = ({singleCourse}) => {
    const { image_url, price, course_includes} =singleCourse;

    return (
        <div >
        <Card className='mt-2 '>
<Card.Img variant="top" src={image_url} className="w-20"/>
<Card.Body className='dark:bg-black border-2 dark:border-cyan-600 border-gray-500 rounded-md rounded-t-none bg-gray-100'>
<Card.Title> <h2>${price}</h2> </Card.Title>
<div className=''>
<Button variant="primary" className='mb-2 me-2'>ADD TO CART</Button>
<Button variant="primary" className='mb-2 '>GET PREMIUM ACCESS</Button>
</div>
<Card.Text className='mt-0'>
   <hr />
    <h5 className='p-1'>This Course Includes:</h5>
    <hr />
        <div className='mt-3'>
        <div className='d-flex '>
            <FaVideo className='me-2 items-center'/>
            <p className='-mt-1'>{course_includes?.a}</p>
         </div>
         <div className='d-flex'>
            <FaFileDownload className='me-2 items-center'/>
         <p className='-mt-1'>{course_includes?.b}</p>
         </div>
         <div className='d-flex '>
            <FaCode className='me-2 items-center'/>
         <p className='-mt-1'>{course_includes?.c}</p>
         </div>
         <div className='d-flex'>
            <FaInfinity className='me-2 items-center'/>
         <p className='-mt-1'>{course_includes?.d}</p>
         </div>
         <div className='d-flex'>
            <FaMobileAlt className='me-2 items-center'/>
         <p className='-mt-1'>{course_includes?.e}</p>
         </div>
         <div className='d-flex'>
            <FaAward className='me-2 items-center'/>
         <p className='-mt-1'>{course_includes?.f}</p>
         </div>
        </div>
</Card.Text> 
</Card.Body>
</Card>
        </div>
    );
};

export default CoursesRightSideCard;