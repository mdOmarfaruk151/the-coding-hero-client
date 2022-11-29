import React from 'react';
import { Link } from 'react-router-dom';
import heroBusiness from '../../images/The-Coding-Hero-Business.png';

const Business = () => {
    return (
        <div>
            <div className="hero min-h-screen dark:bg-black bg-gray-500 dark:border text-white rounded-md border-sky-500">
  <div className="hero-content flex-col lg:flex-row ">
    <img src={heroBusiness} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 className="text-5xl font-bold">The Coding Hero Business</h1>
      <p className="py-6">Get unlimited access to 1,000+ of The Coding Hero's top courses for your team. Learn and improve skills across Web Development, Data Science, Mobile Development, and more.</p>
      <Link to='/' className='text-white '>
      <button className="p-3 bg-gray-700  text-xl hover:bg-red-700   rounded-md">Get The Coding Hero Business</button>
      </Link>
      
    </div>
  </div>
</div>    
        </div>
    );
};

export default Business;