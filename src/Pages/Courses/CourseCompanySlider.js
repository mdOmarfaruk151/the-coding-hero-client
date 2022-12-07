import React from 'react';
import TopCompanies from '../Shared/TopCompanies/TopCompanies';

const CourseCompanySlider = () => {
    return (
        <div className=' text-center bg-gray-100 dark:bg-black mt-2 rounded-md p-4 border-2 dark:border-cyan-600 border-gray-500 -mr-3'>
                <h5>Top companies offer this course to their employees</h5>
                <p>This course was selected for our collection of top-rated courses trusted by businesses worldwide. </p>
                <TopCompanies/>
                </div>
    );
};

export default CourseCompanySlider;