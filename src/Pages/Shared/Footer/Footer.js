import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import logo from '../../../images/logo.png';
import { ReactComponent as TopSVG } from "../../../images/arrow-up.svg";

const Footer = () => {
    return (
        <div>
          <ScrollToTop smooth top="500"   
          component={<TopSVG  className='w-12 -mt-4 -ml-1 '/>}
          className="dark:bg-black animate-bounce"
          />
            <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <img className='w-20' src={logo} alt="" />
    <p><span className='text-orange-300 text-xl'>The Coding Hero.</span> <br/>Providing reliable coding courses since 2022. <br /> <br /> Copyright © 2022 - All right reserved by <span className='text-orange-300 text-sm'>The Coding Hero.</span>  </p>
    
  </div> 
  <div>
    <span className="footer-title text-orange-300">Courses</span> 
    <Link to="/category/01" className="link link-hover text-white ">Web Development</Link> 
    <Link to="/category/02" className="link link-hover text-white ">Data Science</Link> 
    <Link to="/category/03" className="link link-hover text-white ">Mobile Development</Link> 
    <Link to="/category/04" className="link link-hover text-white ">Programming Languages</Link>
    <Link to="/category/05" className="link link-hover text-white ">Game Development</Link>
    <Link to="/category/06" className="link link-hover text-white ">Database Development</Link>
    <Link to="/category/07" className="link link-hover text-white ">Software Development</Link>
    <Link to="/category/08" className="link link-hover text-white ">All Courses</Link>
  </div> 
  <div>
    <span className="footer-title text-orange-300">Company</span> 
    <Link to="/about" className="link link-hover text-white">About </Link> 
    <Link to="/contact" className="link link-hover text-white">Contact </Link> 
    <Link to="/jobs" className="link link-hover text-white">Jobs</Link> 
    <Link to="/success" className="link link-hover text-white">Success</Link>
  </div> 
  <div>
    <span className="footer-title text-orange-300">Legal</span> 
    <Link to="/terms-and-conditions" className="link link-hover text-white">Terms And Conditions</Link> 
    <p className=" mb-0 text-white"> <Link className='link link-hover text-white ' to="/privacy">Privacy</Link> & <Link className='link link-hover text-white' to="/app-policy">App Policy</Link></p> 
    <Link to="/cookie-policy" className="link link-hover  text-white">Cookie Policy</Link>
    <Link to="/refund-policy" className="link link-hover text-white">Refund Policy</Link>
  </div>
  
</footer>
<div className='text-center bg-gray-500 font-bold '>
    <small >Developed by <Link to='/developed-by' className='mt-5 mb-5 no-underline text-orange-500 '>Md. Omar Faruk</Link></small>
  </div>
        </div>
    );
};

export default Footer;