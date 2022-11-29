import React from 'react';
import { Link } from 'react-router-dom';
import CountDown from '../Shared/CountDown/CountDown';
import heroBusiness from '../../images/The-Coding-Hero-Business.jpg';
import happy from '../../images/happy.png';
const Home = () => {
    return (
        <div className=' dark:bg-black container'>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="alert alert-success shadow-lg mt-2 mb-2">
            
  <div >
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 24 24" fill="none" stroke="#da1919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
    <span className='mr-8 text-xl'>Christmas Offers Ends Up !!🎉 </span>

  <CountDown />
  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  </div>
</div>

<section>
<div className="hero min-h-screen  dark:bg-black bg-gray-500 dark:border text-white rounded-md">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={happy} 
    className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Transform Your Life Through Education</h1>
      <p className="py-6">Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
      <Link to='/' className='text-white '>
      <button className="p-3 bg-gray-700 hover:text-lg  rounded-md">Find Out How</button>
      </Link>
    </div>
  </div>
</div>

</section>
<br />
<section>
<div className="hero min-h-screen dark:bg-black bg-gray-500 dark:border text-white rounded-md">
  <div className="hero-content flex-col lg:flex-row">
    <img src={heroBusiness}
    className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">The Coding Hero Business</h1>
      <p className="py-6">Get unlimited access to 1,000+ of The Coding Hero's top courses for your team. Learn and improve skills across Web Development, Data Science, Mobile Development, and more.</p>
      <Link to='/' className='text-white '>
      <button className="p-3 bg-gray-700 hover:text-lg  rounded-md">Get The Coding Hero Business</button>
      </Link>
      
    </div>
  </div>
</div>    
</section> 
<br />

        </div>
    );
};

export default Home;