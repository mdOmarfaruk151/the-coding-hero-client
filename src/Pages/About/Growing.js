import React from 'react';

const Growing = () => {
    return (
        <>
        <div className='dark:bg-black bg-gray-800  text-white rounded-md border-2 dark:border-sky-500 border-gray-500 mt-2 text-center p-5 '>

        <div className=' text-center mt-2'>
            <h1 className='text-center'>We Just Keep Growing</h1>
            <p>Our global community and our course catalog get bigger every day. Check out our latest numbers as of July 2022.</p>
        </div>
        <div className='d-flex text-center justify-between'>
            <div>
             <h2>54M+</h2>
             <p className='-mt-3 -ml-5'>Learners</p>
            </div>
            <div>
             <h2>71K+</h2>
             <p className='-mt-3 -ml-2'>Instructors</p>
            </div>
            <div>
              <h2>204K+</h2>
              <p className='-mt-3 -ml-4'>Courses</p>
            </div>
            <div>
             <h2>741M+</h2>
             <p className='-mt-3'>Course Enrollments</p>
            </div>
            
        </div>
        <div className='d-flex text-center justify-between ml-40 mr-40'>
            <div>
             <h2>75</h2>
             <p className='-mt-3'>Languages</p>
            </div>
            <div >
             <h2>12,500+</h2>
             <p className='-mt-3'>Enterprise Customers</p>
            </div>
        </div>
        </div>
       
        </>      
    );
};

export default Growing;