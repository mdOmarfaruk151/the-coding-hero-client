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
    <h5 className="mb-2 dark:text-white">Get Updates By Email</h5> 
    <div className="form-control w-80 dark:bg-black">
      <label className="label">
        <span className=" dark:text-white">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@gmail.com" className="input input-bordered input-error w-full max-w-xs text-white mt-1 " /> 

        <button onClick={handleSubscribe} className="w-full hover:bg-red-700 p-2 mt-2 mb-2 bg-gray-700 hover:text-lg  rounded-md text-white text-xl">Subscribe</button>
      </div>
    </div>
  </div>
  <hr />

        </div>
    );
};

export default SubscribeByEmail;