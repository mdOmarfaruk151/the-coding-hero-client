import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../../../images/logo.png";
import CategorySideBar from "../CategorySideBar/CategorySideBar";
import { NavNavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import NotificationSVG from "./NotificationSVG";
import AddToCardSVG from "./AddToCardSVG";
import DarkMoodSVG from "./DarkMoodSVG";
import NavLinkOptions from "./NavLinkOptions";

const Header = () => {

 
 //! for user
const {user,logOut} = useContext(AuthContext);
console.log(user)

//!.......................................
//! for logOut
const handleLogOut= () =>{
  logOut()
  .then(()=>{})
  .catch(error=> console.error(error))
}

  return (
    <div>
      <Navbar
        collapseOnSelect
        className="mb-0 "
        expand="lg"
        bg="dark"
        variant="light"
      >
        <Container>
          <Navbar.Brand >
            
            <NavLink  className="text-decoration-none  p-0 text-white " to="/">
              <div className="d-flex  mr-5">
                <div>
                  <img
                    style={{ height: "50px", marginRight: "10px" }}
                    src={logo}
                    alt=""
                  />
                </div>
                <div className="mt-2 text-2xl">The Coding Hero</div>
              </div>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-black bg-white"/>
          <Navbar.Collapse id="responsive-navbar-nav" >

          <NavLinkOptions />
         
           <DarkMoodSVG/>

           <AddToCardSVG/>

           <NotificationSVG/>

<Nav>
  <div className="-mt-3">
  <div className="dropdown dropdown-end">
    <Tippy content={user?.displayName}>
      <label tabIndex={0} className="btn  btn-circle avatar" >
        <div className="w-10 rounded-full "  >
          {user?.photoURL ?
           <Image src={user?.photoURL} className=" "></Image>
           :
           <FaUser className="text-danger mt-3 ml-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"/>
          }
          {/* <img src={user?.photoURL}  /> */}
        </div>
      </label>
      </Tippy>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-700 rounded-box w-30 text-white text-center ">
        <li>
          <Link className="justify-between no-underline hover:bg-black hover:text-white" to={'/profile'}>
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link className="no-underline hover:bg-black hover:text-white" to={'/register'}>Register</Link></li>
        <li><Link className="no-underline hover:bg-black hover:text-white" to={'/log-in'}>Log In</Link></li>
        <li><button className="no-underline hover:bg-black hover:text-white"  onClick={handleLogOut}>Log Out</button></li>
      </ul>
    </div>
  </div>
</Nav>
            {/* <Nav>
              <>
                {user?.uid ? (
                  <>
                    <Button
                      className="btn btn-outline-danger me-2"
                      variant="light"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </Button>
                    <span className="me-2 ">{user?.displayName}</span>
                  </>
                ) : (
                  <>
                    <NavLink className="me-2" to="/login">
                      Login
                    </NavLink>
                    <NavLink to="/register">Register</NavLink>
                  </>
                )}
              </>

              <NavLink to="/profile">
                {user?.photoURL ? (
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </NavLink>
            </Nav> */}
            <div className="d-lg-none text-white">
              <CategorySideBar></CategorySideBar>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
