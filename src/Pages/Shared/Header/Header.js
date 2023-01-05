import React from "react";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import CategorySideBar from "../CategorySideBar/CategorySideBar";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import NotificationSVG from "./NotificationSVG";
import AddToCardSVG from "./AddToCardSVG";
import DarkMoodSVG from "./DarkMoodSVG";
import NavLinkOptions from "./NavLinkOptions";

const Header = () => {
  //! for user
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  //!.......................................
  //! for logOut
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        className="mb-0  "
        expand="lg"
        bg="dark"
        variant="light"
      >
        {/* <Container > */}
        <Navbar.Brand>
          <NavLink className="text-decoration-none  p-0 text-white " to="/">
            <div className="d-flex  mr-20 ml-16 ">
              <div>
                <img
                  className="me-2 mx-auto"
                  style={{ height: "50px" }}
                  src={logo}
                  alt=""
                />
              </div>
              <div className="mt-2 text-2xl">The Coding Hero</div>
            </div>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-black bg-white"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavLinkOptions />
          <div className="d-flex">
            <DarkMoodSVG />

            <AddToCardSVG />

            <NotificationSVG />

            <Nav>
              <div className="-mt-1">
                <div className="dropdown dropdown-end ">
                  <div>
                    <Tippy content={user?.displayName}>
                      <label tabIndex={0} className="btn  btn-circle avatar">
                        <div className="w-10 rounded-full ">
                          {user?.photoURL ? (
                            <Image src={user?.photoURL} className=" "></Image>
                          ) : (
                            <FaUser className="text-danger mt-3 ml-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
                          )}
                        </div>
                      </label>
                    </Tippy>
                  </div>

                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-700 rounded-box w-30 text-white text-center "
                  >
                    {user?.uid ? (
                      <>
                        <li>
                          <Link
                            className="justify-between no-underline hover:bg-black hover:text-white"
                            to={"/profile"}
                          >
                            Profile
                            <span className="badge">New</span>
                          </Link>
                        </li>
                        <li>
                          <button
                            className="no-underline hover:bg-black hover:text-white"
                            onClick={handleLogOut}
                          >
                            Log Out
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link
                            className="no-underline hover:bg-black hover:text-white"
                            to={"/register"}
                          >
                            Register
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="no-underline hover:bg-black hover:text-white"
                            to={"/log-in"}
                          >
                            Log In
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </Nav>
          </div>

          <div className="d-lg-none text-white">
            <CategorySideBar></CategorySideBar>
          </div>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default Header;
