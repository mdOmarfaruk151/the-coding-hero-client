import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategorySideBar = () => {
  //! To Store API data
  const [categories, setCategories] = useState([]);

  //! To Load API data
  useEffect(() => {
    fetch("https://the-coding-hero-server.vercel.app/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  //!...................................................
  //! Active Navbar
  const navNavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      border: isActive ? "2px solid orange" : "none",
    };
  };
  //!...............................................

  return (
    <div className="ml-2">
      <hr className="mt-3 dark:bg-white" />
      <h4 className="text-center">
        All Courses Category : {categories.length}
      </h4>
      <hr />
      <div className="p-2">
        {categories.map((category) => (
          <p key={category.id}>
            <NavLink
              className=" text-decoration-none text-white btn btn-outline-dark btn-secondary "
              to={`/category/${category.id}`}
              style={navNavLinkStyles}
            >
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default CategorySideBar;
