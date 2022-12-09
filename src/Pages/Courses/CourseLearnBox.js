import React from 'react';
import { FaCheck } from 'react-icons/fa';

const CourseLearnBox = ({singleCourse}) => {
    const {learn} =singleCourse;

    return (
        <div className='bg-gray-100 dark:bg-black mt-2 rounded-md p-4 border-2 dark:border-cyan-600 border-gray-500 -mr-3'>
        <h3 className='mb-3'>What You'll Learn</h3>
        <hr />
        <div className='d-flex'>
       <FaCheck className='me-2'/>
       <p className='-mt-1'>{learn.a}</p>
        </div>
        <div className='d-flex'>
       <FaCheck className='me-2'/>
       <p className='-mt-1'>{learn.b}</p>
        </div>
        <div className='d-flex'>
       <FaCheck className='me-2'/>
       <p className='-mt-1'>{learn.c}</p>
        </div>
        <div className='d-flex'>
       <FaCheck className='me-2'/>
       <p className='-mt-1'>{learn.d}</p>
        </div>
        <div className='d-flex'>
       <FaCheck className='me-2'/>
       <p className='-mt-1'>{learn.e}</p>
        </div>
        <div className='d-flex'>
       <FaCheck className='me-2'/>
       <p className='-mt-1'>{learn.f}</p>
        </div>
        <div className='d-flex'>
       <FaCheck className='me-2'/>
       <p className='-mt-1'>{learn.g}</p>
        </div>
       </div>
    );
};

export default CourseLearnBox;