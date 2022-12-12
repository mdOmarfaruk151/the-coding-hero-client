import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../images/education-hero.png';

const Education = () => {
    return (
        <div className="hero min-h-screen  dark:bg-black bg-gray-500 dark:border text-white rounded-md border-sky-500">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
      <div className='h-50'>
      <div className="mockup-phone ">
        <div className="camera"></div> 
        <div className="display">
          <div className="artboard artboard-demo phone-1">
          <img src={hero} 
          className="max-w-sm rounded-lg shadow-2xl w-60 " alt=''/>
          </div>
        </div>
      </div>
      
      </div>
          <div>
            <h1 className="text-5xl font-bold">Transform Your Life Through Education</h1>
            <p className="py-6">Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
            <Link to='/find-out-now' className='text-white '>
            <button className="p-3 bg-gray-700  text-xl hover:bg-red-700  rounded-md">Find Out How</button>
            </Link>
          </div>
        </div>
      </div>

    );
};

export default Education;