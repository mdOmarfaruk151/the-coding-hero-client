import React from 'react';
import { toast } from 'react-hot-toast';

const SubscribeByEmail = () => {

   const handleSubscribe = ()=>{
    toast.success('Email Subscribed.')
   }

    return (
        <div className='ml-2 mb-5'>
          <hr />
             <div className=''>
    <h5 className="mb-2 dark:text-white text-center">Get Updates</h5> 
    <div className="p-3 w-full dark:bg-black border-2 dark:border-sky-600 border-gray-500 rounded-md ">
      <div className="text-center ">
        <p className=" dark:text-white mt-2">Enter your email address</p>
      </div> 
      <div className="text-center">
        <input type="text" placeholder="username@gmail.com" className="input input-bordered input-error w-full max-w-xs text-white  mb-2" /> 

        <button onClick={handleSubscribe} className="w-full hover:bg-red-700 p-2 mt-2 mb-2 bg-gray-700 hover:text-lg  rounded-md text-white text-xl">Subscribe</button>
      </div>
    </div>
  </div>
  <hr />

        </div>
    );
};

export default SubscribeByEmail;