import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummaryCard from '../../Shared/CoursesSummaryCard/CoursesSummaryCard';


const Courses = () => {
    const allCourses = useLoaderData();

    return (
        <div className='container mt-2 mb-5'>
            <h2>All Courses: {allCourses.length}</h2>
            {
                allCourses.map(courses =><CoursesSummaryCard
                key={courses._id}
                courses={courses}
                ></CoursesSummaryCard>)
            }
        </div>
    );
};

export default Courses;