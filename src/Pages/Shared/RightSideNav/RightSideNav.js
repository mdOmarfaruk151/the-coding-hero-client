import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
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
            <h4>All Category: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                       <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideNav;