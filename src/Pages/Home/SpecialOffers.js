import React from 'react';
import { Link } from 'react-router-dom';
import christmas from '../../../src/images/merry-christmas.jpeg';
import CountDown from '../Shared/CountDown/CountDown';

const SpecialOffers = () => {
    return (
        <div className=' rounded-md  border'>
            <div className="hero min-h-screen " >
                <img className='rounded-md mx-auto lg:w-full'  src={christmas} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Christmas Offer Ends Up!!</h1>
      <CountDown className="text-white"/>
      <p className="mb-5"></p>
      <Link to='/get-more-info' className='text-white '>
            <button className="p-3 bg-gray-700  text-xl hover:bg-red-700   rounded-md">Get More Info</button>
            </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SpecialOffers;