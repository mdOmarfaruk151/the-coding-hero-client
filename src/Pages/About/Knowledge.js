import React from 'react';
import knowledge from '../../images/about-us.png';

const Knowledge = () => {
    return (
       
      <div className="hero min-h-screen  pl-4 pr-4  dark:bg-black bg-gray-800 border-2 border-gray-500 dark:border-sky-500 text-white rounded-md  mt-2 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={knowledge} className="max-w-sm rounded-lg shadow-2xl" alt='knowledge'/>
    <div>
      <h1 className="text-5xl font-bold">We Share Knowledge With The World</h1>
      
    </div>
  </div>
</div>
     
    );
};

export default Knowledge;