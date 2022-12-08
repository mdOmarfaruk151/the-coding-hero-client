import React from 'react';
import Teams from '../Home/Teams';
import Cards from './Cards';
import Growing from './Growing';
import Knowledge from './Knowledge';

const About = () => {
    return (
      <div className='mb-5 container'>
        <Knowledge/>
        <div className='dark:bg-black bg-gray-500 border-2 dark:border-sky-500 border-gray-500 text-white rounded-md  mt-2 text-center p-3'>
            <h2>Improving Lives Through Learning</h2>
            <p className=''>Whether you want to learn or to share what you know, you've come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
        </div>
        <Growing/>
        <Teams/>
        <div className='dark:bg-black bg-gray-800 border-2 dark:border-sky-500 border-gray-500 text-white rounded-md  mt-2 text-center p-3'>
          <h6>
          We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.
          </h6>
          <button type="button" className='mt-4  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 font-bold'>Learn More</button>
        </div>
        <Cards/>
      </div>
    );
};

export default About;