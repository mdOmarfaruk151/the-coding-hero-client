import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavLinkOptions = () => {
     //! Active Navbar
  const navNavLinkStyles =({ isActive }) =>{
    return{
     fontWeight: isActive ? 'bold' : 'normal',
     border: isActive ? '2px solid orange': 'none',
     
    }
 }
 //!...............................................
    return (
        <>
            <Nav>
              <div className="me-auto mb-3 mt-3  ">
                <NavLink
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="/"
                  style={navNavLinkStyles}
                >
                  Home
                </NavLink>
                <NavLink
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="/courses"
                  style={navNavLinkStyles}
                >
                  Courses
                </NavLink>
                <NavLink
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="my-classes"
                  style={navNavLinkStyles}
                >
                  My Classes
                </NavLink>
                <NavLink
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="/support"
                  style={navNavLinkStyles}
                >
                  Support
                </NavLink>
                <NavLink
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="/blog"
                  style={navNavLinkStyles}
                >
                  Blog
                </NavLink>
                <NavLink
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="/faq"
                  style={navNavLinkStyles}
                >
                  FAQ
                </NavLink>

                <NavLink
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="/about"
                  style={navNavLinkStyles}
                >
                  About
                </NavLink>
              </div>
            </Nav>
        </>
    );
};

export default NavLinkOptions;