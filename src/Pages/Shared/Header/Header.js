import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../../../images/logo.png";
import CategorySideBar from "../CategorySideBar/CategorySideBar";

const Header = () => {
  const [theme, setTheme] = useState(null);

  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
    }
    else{
        setTheme('light');
    }
  },[])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
            <Link className="text-decoration-none  p-0 text-white " to="/">
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
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-black bg-white"/>
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav>
              <div className="me-auto mb-3 mt-3  ">
                <Link
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="/category/08"
                >
                  Courses
                </Link>
                <Link
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="my-classes"
                >
                  My Classes
                </Link>
                <Link
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="/support"
                >
                  Support
                </Link>
                <Link
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="/faq "
                >
                  FAQ
                </Link>

                <Link
                  className="text-decoration-none hover:border border-blue-700 rounded p-2  me-3 text-white text-xl"
                  to="/about"
                >
                  About
                </Link>
              </div>
            </Nav>
            <button >

            <div className="mt-2">
              <label className="swap swap-rotate" >
                {/* <!-- this hidden checkbox controls the state --> */}
                <input onClick={handleThemeSwitch} type="checkbox" />
                
                {/* <!-- sun icon --> */}
                <svg
                  className="text-orange-400 e swap-on fill-current w-7 h-7 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                {/* <!-- moon icon --> */}
                <svg
                  className="text-white swap-off fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            </button>
           

            <div className="dropdown dropdown-end mt-2">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className=" indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white -mr-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="indicator-item badge bg-red-700  ">0</span>
                </div>
              </label>
            </div>

            <div className="dropdown dropdown-end mt-2">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className=" indicator">
             <svg className="-mr-5" xmlns="http://www.w3.org/2000/svg" width="27" height="" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                  <span className="indicator-item badge bg-red-700  ">0</span>
                </div>
              </label>
            </div>

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
                    <Link className="me-2" to="/login">
                      Login
                    </Link>
                    <Link to="/register">Register</Link>
                  </>
                )}
              </>

              <Link to="/profile">
                {user?.photoURL ? (
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Link>
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
