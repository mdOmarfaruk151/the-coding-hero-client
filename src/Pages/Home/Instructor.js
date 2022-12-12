import React from 'react';
import { Link } from 'react-router-dom';
import instructor from '../../images/instructor.png';

const Instructor = () => {
    return (
        <div>
            <div className="hero min-h-screen dark:bg-black bg-gray-500 dark:border text-white rounded-md border-sky-500">
  <div className="hero-content flex-col lg:flex-row">
    <img src={instructor} className="max-w-sm rounded-lg shadow-2xl " alt=''/>
    <div>
      <h1 className="text-5xl font-bold font-sans">Become An Instructor</h1>
      <p className="py-6 font-sans">Instructors from around the world teach millions of students on The Coding Hero. We provide the tools and skills to teach what you love.</p>
      <Link to='/start-teaching-today' className='text-white '>
      <button className="p-3 bg-gray-700 text-xl hover:bg-red-700  rounded-md">Start Teaching Today</button>
      </Link>
      
    </div>
  </div>
</div>    
        </div>
    );
};

export default Instructor;