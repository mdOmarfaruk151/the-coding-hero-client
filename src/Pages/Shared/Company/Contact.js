import React from 'react';
import { HiLocationMarker, HiOutlineMail, HiOutlinePhone, HiUserGroup } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import hang from '../../../images/hang.png';


const Contact = () => {

    
    return (
        <div className='container mt-2 mb-5'>
            <h2 className="text-center mb-3">Contact Us</h2>
           <div className='d-flex justify-center rounded-md border-2 dark:border-sky-500 border-gray-500 mb-3 font-bold'>
           <div className='mt-3 mb-3'>
            <div className='d-flex'>
                <HiLocationMarker></HiLocationMarker>
                <p className='ml-1 -mt-1'>Mirpur-1, Dhaka, 1216. </p>
            </div>
            <div className='d-flex'>
                <HiOutlineMail></HiOutlineMail>
                <p className='ml-1 -mt-1'>Official: <Link>web@the-coding-hero.com</Link></p>
            </div>
            <div className='d-flex '>
                <HiOutlinePhone></HiOutlinePhone>
                <p className='ml-1 -mt-1'>Helpline: 01300555444, 01900555444</p>
            </div>
            <div className='d-flex'>
                <HiUserGroup></HiUserGroup>
                <p className='-mt-1 ml-1'>Available: Sat-Thu, 10:00 AM to 7:00 PM</p>
            </div>
            </div>
            <div>
                <img className='w-60 -mt-10' src={hang} alt="" />
            </div>
           </div>

        <h2 className="text-center mb-4">Send Message Us</h2>
<div className='mt-2 text-white'>
<div className='justify-center'>
    <div className='d-flex justify-center gap-3 mb-3'>
    <input type="text" placeholder="Username" className="input input-bordered input-info w-full max-w-xs" />
    <input type="text" placeholder="name@gmail.com" className="input input-bordered input-info w-full max-w-xs" />
    </div>
    <div className='mb-3'> 
    <input type="text" placeholder="Subject" className="input input-bordered input-info w-full " />
    </div>
<div>
<textarea className="textarea textarea-info w-full h-60 mb-3" placeholder="Your Massage"></textarea>
</div>
</div>
<button className="btn btn-active btn-primary ">SEND MESSAGE</button>

</div>
        </div>
    );
};

export default Contact;