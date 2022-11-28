import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategorySideBar = () => {

     //! To Store API data
     const [categories, setCategories] = useState([]);

     //! To Load API data
     useEffect(()=>{
          fetch('http://localhost:5000/courses-categories')
         .then(res => res.json())
         .then(data => setCategories(data));
     },[])
 
    return (
        <div>
            <hr className="mt-3 dark:bg-white"/>
            <h4 className=''>All Category: {categories.length}</h4>
            <hr />
            <div className='p-2'>
                {
                    categories.map(category => <p key={category.id}>
                       <Link className="text-decoration-none text-white btn btn-outline-dark btn-secondary "
                        to={`/category/${category.id}`}>
                            {category.name}</Link>
                    </p>)
                }
            </div>
            <hr />
        </div>
    );
};

export default CategorySideBar;