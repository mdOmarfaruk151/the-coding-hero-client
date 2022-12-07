import React from 'react';
import { FaEye, FaFilter, FaGlobe, FaInfoCircle, FaStar, FaTag, FaUserGraduate } from 'react-icons/fa';


const CourseTopBox = ({singleCourse, ref}) => {
    const {title, sub_details, rating, students,language, author,total_view, topic, badge} =singleCourse;
    return (
      <>
        <div className='bg-black text-white mt-2 rounded-md p-4 border-2 dark:border-cyan-600 border-gray-500' >
        <h3>{title} <span className="badge badge-warning text-black animate-bounce p-0 badge-lg "><>{badge}</></span></h3>
        
        <p>{sub_details}</p>

      <div className='d-flex justify-content-between align-items-center '>
      <div className=''>
       <div className='d-flex items-center '>
         <FaStar className='text-warning me-1 '></FaStar>
         <span>{rating.number}</span><span className='ml-1'>{rating.people}</span>
       </div>
       <div className='d-flex items-center  '>
         <FaUserGraduate className='bg-Sky-500 mr-1 '></FaUserGraduate>
         <span className='mr-1'>{students}</span><span>Students</span>
       </div>
       <div className='d-flex items-center'>
             <FaEye className='text-warning mr-1 '/>
             <span>{total_view}</span>
          </div>
         </div>

         <div className=''>
         <div className='d-flex items-center '>
             <FaInfoCircle className='me-2 text-info'></FaInfoCircle>
             <span className='me-2'>Last updated</span><span>{author.Last_updated}</span>
         </div>
         <div className='d-flex items-center '>
             <FaGlobe className='me-2 '></FaGlobe>
             <span>{language}</span>
         </div>
         <div className='d-flex items-center '>
             <FaTag className='me-2 '></FaTag>
             <span>{rating?.badge}</span>
         </div>
         </div>
      </div>

        <div className='d-flex mt-3'>
             <img className='w-8 h-8 rounded-full me-2 ' src={author.img} alt="" />
             <p className='mt-1'>{author.name}</p>

             
         </div>
         <div className='d-flex items-center badge badge-info badge-lg'>
             <FaFilter className='me-2 '></FaFilter>
             <span className='text-black'>{topic}</span>
         </div>
       </div>
       <div>
           
             </div>
      </>
    );
};

export default CourseTopBox;