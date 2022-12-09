import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const GetPremiumAccess = () => {
    const checkout = useLoaderData();
    const {title,topic,price,image_url} = checkout;

    const handlePayNow =()=>{
      toast.success('Payment Done.')
    } 

    return (
        
        <div className="card w-96 border-2  shadow-xl  mt-2 mb-5  mx-auto bg-gray-700 ">
  <figure className="p-10 dark:bg-black bg-gray-600 border-2 dark:border-sky-600 border-gray-500">
    <img src={image_url} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body -mt-4 text-white bg-gray-700 ">
    <h6 className="badge ">{topic}</h6>
    <h2 className="card-title ">{title}</h2>
    <div className='d-flex items-center justify-between -mb-5'>
      <p>Price</p>
      <p className='ml-9'>${price}</p>
    </div>
    <hr />
    <div className='d-flex items-center justify-between -mt-2'>
      <p>Total Price</p>
      <p>${price}</p>
    </div>
    <div className="card-actions">
      <button onClick={handlePayNow} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 rounded-md">Pay Now</button>
    </div>
  </div>
</div>
        
    );
};

export default GetPremiumAccess;