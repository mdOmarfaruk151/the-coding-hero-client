import React from 'react';
import { Accordion } from 'react-bootstrap';
import { FaPlayCircle } from 'react-icons/fa';

const CourseContent = ({singleCourse}) => {
    const {course_content, course_content_text} =singleCourse;

    return (
        <div className='mt-2  bg-gray-100 dark:bg-black rounded-md p-4 border-2 dark:border-cyan-600 border-gray-500 '>
        <h3 className=''>Course Content</h3>
        <hr />
    <Accordion>
<Accordion.Item eventKey="0">
<Accordion.Header className=''>{course_content.intro}</Accordion.Header>
<Accordion.Body className='dark:bg-black dark:text-white bg-gray-200'>
<div className='d-flex'>
    <FaPlayCircle className='me-2'/>
    <p className='-mt-1'>{course_content_text}</p>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
<Accordion.Header>{course_content.a}</Accordion.Header>
<Accordion.Body className='dark:bg-black dark:text-white bg-gray-200'>
<div className='d-flex'>
    <FaPlayCircle className='me-2'/>
    <p className='-mt-1'>{course_content_text}</p>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
<Accordion.Header>{course_content.b}</Accordion.Header>
<Accordion.Body className='dark:bg-black dark:text-white bg-gray-200'>
<div className='d-flex'>
    <FaPlayCircle className='me-2'/>
    <p className='-mt-1'>{course_content_text}</p>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="3">
<Accordion.Header>{course_content.c}</Accordion.Header>
<Accordion.Body className='dark:bg-black dark:text-white bg-gray-200'>
<div className='d-flex'>
    <FaPlayCircle className='me-2'/>
    <p className='-mt-1'>{course_content_text}</p>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="4">
<Accordion.Header>{course_content.d}</Accordion.Header>
<Accordion.Body className='dark:bg-black dark:text-white bg-gray-200'>
<div className='d-flex'>
    <FaPlayCircle className='me-2'/>
    <p className='-mt-1'>{course_content_text}</p>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="5">
<Accordion.Header>{course_content.e}</Accordion.Header>
<Accordion.Body className='dark:bg-black dark:text-white bg-gray-200'>
<div className='d-flex'>
    <FaPlayCircle className='me-2'/>
    <p className='-mt-1'>{course_content_text}</p>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="6">
<Accordion.Header>{course_content.f}</Accordion.Header>
<Accordion.Body className='dark:bg-black dark:text-white bg-gray-200'>
<div className='d-flex'>
    <FaPlayCircle className='me-2'/>
    <p className='-mt-1'>{course_content_text}</p>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="7">
<Accordion.Header>{course_content.g}</Accordion.Header>
<Accordion.Body className='dark:bg-black dark:text-white bg-gray-200'>
<div className='d-flex'>
    <FaPlayCircle className='me-2'/>
    <p className='-mt-1'>{course_content_text}</p>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="8">
<Accordion.Header>{course_content.h}</Accordion.Header>
<Accordion.Body className='dark:bg-black dark:text-white bg-gray-200'>
<div className='d-flex'>
    <FaPlayCircle className='me-2'/>
    <p className='-mt-1'>{course_content_text}</p>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="9">
<Accordion.Header>{course_content.i}</Accordion.Header>
<Accordion.Body className='dark:bg-black dark:text-white bg-gray-200'>
<div className='d-flex'>
    <FaPlayCircle className='me-2'/>
    <p className='-mt-1'>{course_content_text}</p>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="10">
<Accordion.Header>{course_content.j}</Accordion.Header>
<Accordion.Body className='dark:bg-black dark:text-white bg-gray-200'>
<div className='d-flex'>
    <FaPlayCircle className='me-2'/>
    <p className='-mt-1'>{course_content_text}</p>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="11">
<Accordion.Header>{course_content.k}</Accordion.Header>
<Accordion.Body className='dark:bg-black dark:text-white bg-gray-200'>
<div className='d-flex'>
    <FaPlayCircle className='me-2'/>
    <p className='-mt-1'>{course_content_text}</p>
</div>
</Accordion.Body>
</Accordion.Item>
</Accordion>
    </div>
    );
};

export default CourseContent;