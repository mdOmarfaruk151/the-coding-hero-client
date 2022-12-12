import React from 'react';
import { FaFacebook, FaGraduationCap, FaInstagram, FaLaptopCode, FaRegClock, FaRegIdBadge } from 'react-icons/fa';
import { HiLocationMarker, HiOutlineMail, HiOutlinePhone} from 'react-icons/hi';


const DevelopedBy = () => {
    return (
        <div className='container mt-2 mb-5 justify-center '>
            <hr />
             <h2 className="text-center mb-3">Developed By</h2>
             <hr />
           <div className='d-flex justify-center rounded-md border-2 dark:border-sky-500 border-gray-500 mb-3 font-bold p-5 shadow-2xl'>
           <div className='mt-3 mb-3 '>
            
           <div className='d-flex'>
                <FaRegIdBadge></FaRegIdBadge>
                <p className='ml-1 -mt-1'>Name: Mohammad Omar Faruk</p>
            </div>
           <div className='d-flex'>
                <FaGraduationCap></FaGraduationCap>
                <p className='ml-1 -mt-1'>Education: BBA -Major Marketing - Runing Student</p>
            </div>
           <div className='d-flex'>
                <FaLaptopCode></FaLaptopCode>
                <p className='ml-1 -mt-1'>Skill Set: Full Stack Junior Developer</p>
            </div>
            <hr />
            <div className='d-flex'>
                <HiLocationMarker></HiLocationMarker>
                <p className='ml-1 -mt-1'>Mirpur-1, Dhaka - 1216, Bangladesh. </p>
            </div>
            <div className='d-flex'>
                <HiOutlineMail></HiOutlineMail>
                <p className='ml-1 -mt-1'>Mail: <a  href="https://www.gmail.com" target="_blank" rel="noopener noreferrer" className='no-underline ' >mdomar28151@gmail.com</a></p>
               
            </div>
            <div className='d-flex '>
                <HiOutlinePhone></HiOutlinePhone>
                <p className='ml-1 -mt-1'>Phone: 01952751879</p>
            </div>
            <div className='d-flex'>
                <FaRegClock></FaRegClock>
                <p className='-mt-1 ml-1 me-2'>Available: 10:00 AM to 10:00 PM</p>
            </div>
            <hr />
            <div className='d-flex'>
                <FaFacebook></FaFacebook>
                <p className='-mt-1 ml-1 me-2'>Facebook: <a  href="https://www.facebook.com/Mohammad.Omar.Faruk007" target="_blank" rel="noopener noreferrer" className='no-underline ' >Mohammad Omar Faruk</a></p>
            </div>
            <div className='d-flex'>
                <FaInstagram></FaInstagram>
                <p className='-mt-1 ml-1 me-2'>Instagram: <a  href="https://www.instagram.com/omar.bd.0/" target="_blank" rel="noopener noreferrer" className='no-underline ' >Mohammad Omar Faruk</a></p>
            </div>
            </div>

            <div>
                <img className='w-60 ml-3 shadow-2xl rounded-3xl' src={'https://i.ibb.co/BqZGPhh/52702568-243722699865416-4654489155693182976-n.jpg'} alt="" />
            </div>

           </div>
           
        </div>
    );
};

export default DevelopedBy;