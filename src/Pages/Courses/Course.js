import React from 'react';
import {  Alert, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCompanySlider from './CourseCompanySlider';
import CourseContent from './CourseContent';
import CourseLearnBox from './CourseLearnBox';
import CoursesRightSideCard from './CoursesRightSideCard';
import CourseTopBox from './CourseTopBox';
import ReactToPdf from 'react-to-pdf';
import { FaFilePdf } from 'react-icons/fa';

const ref = React.createRef();
const options = {
    orientation: 'Portrait',
    unit: 'in',
    format: [28,9]
};

const Course = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse)
    const { details, title} =singleCourse;
  
    return (
       <>
       <div className='container -mb-12 mt-2 text-end'>
            <ReactToPdf targetRef={ref} filename={`${title}.pdf`}  options={options} x={.5} y={.5} scale={0.8}>
        {({toPdf}) => (
            <button onClick={toPdf} >
                <div className='d-flex '>
                <FaFilePdf className='me-1 text-danger'/>
                <p className='-mt-1 mr-2 text-white '>Download PDF</p>
                </div>
                </button>
        )}
    </ReactToPdf>
            </div>
        <div className='container mt-2 mb-5 ' ref={ref} >
         
            <CourseTopBox singleCourse={singleCourse} />
            <Row className=''>
                {/* details box */}
            <Col lg='8'>
               <CourseLearnBox singleCourse={singleCourse}/>

                <CourseCompanySlider/>
                </Col>

                {/* right side card */}
                <Col lg='4'>
               <CoursesRightSideCard singleCourse={singleCourse}/>
                </Col>

                <Col lg-12>
               <CourseContent singleCourse={singleCourse}/>

               <div className='bg-gray-100 dark:bg-black mt-2 rounded-md p-4 border-2 dark:border-cyan-600 border-gray-500 '>
                <h3>Requirements</h3>
                <hr />
                <div>
                <p>{details.requirements}</p>
                </div>
               </div>

               <div className='mt-2 -mb-2'>
               <Alert  variant={'success'}>
                {details.msg}
              </Alert>
               </div>

               <div className='bg-gray-100 dark:bg-black mt-1 rounded-md p-4 border-2 dark:border-cyan-600 border-gray-500 text-justify '>
                <h3>Description</h3>
                <hr />
                <p>{details.description.a}</p>
                <p>{details.description.b}</p>
                <p>{details.description.c}</p>
               </div>

               <div className='bg-gray-100 dark:bg-black mt-2 rounded-md p-4 border-2 dark:border-cyan-600 border-gray-500 text-justify'>
                <h3>Who This Course Is For:</h3>
                <hr />
                <p>{details.course_for.a}</p>
                <p>{details.course_for.b}</p>
                <p>{details.course_for.c}</p>
                <p>{details.course_for.d}</p>
                <p>{details.course_for.e}</p>
                <p>{details.course_for.f}</p>
                <p>{details.course_for.g}</p>
                <p>{details.course_for.h}</p>
               </div>
                </Col>
            </Row>
            
        </div>
       </>
    );
};

export default Course;

