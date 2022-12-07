import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCard from '.././Shared/CoursesSummaryCard/CoursesSummaryCard';


const CoursesPage = () => {
    const allCourses = useLoaderData();

    return (
        <div className='container mt-2 mb-5 '>
            <hr />
            <h2 className='text-center'>All Courses : {allCourses.length}</h2>
            <hr />
            <div className='grid grid-cols-3 gap-4 '>
            {
                allCourses.map(courses =><CoursesSummaryCard
                key={courses._id}
                courses={courses}
                ></CoursesSummaryCard>)
            }
            </div>
            
        </div>
    );
};

export default CoursesPage;