import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import error from "../../images/Page-not-found.png";

const ErrorPage = () => {
    return (
        <div className="mt-0 mb-0  bg-red-200 max-w-full">
            <div className="alert alert-error shadow-lg justify-center ">
  <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#da1919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <span className='font-bold text-2xl text-black'>Error 404 !! Page Not Found .</span>
    
  </div>
</div>
         <div className='text-center no-underline'>
         <Link to={"./"} className="no-underline">
              <p className="text-center hover:text-4xl text-black font-bold text-3xl  justify-center d-flex  ">
              <HiOutlineHome className='mr-1 mt-1'/>
                Back To Home
              </p>
            </Link>
         </div>

          <img className="mx-auto " src={error} alt="" />
          
        </div>
      );
};

export default ErrorPage;