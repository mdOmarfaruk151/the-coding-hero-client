import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    
    FaFacebook,
    FaTwitter,
    FaWhatsapp,
    FaTwitch,
  } from "react-icons/fa";
import { ListGroup } from 'react-bootstrap';
import OffersCarousel from '../OffersCarousel/OffersCarousel';

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
            <OffersCarousel></OffersCarousel>
            <hr className=""/>
            <h4 className='center'>All Category: {categories.length}</h4>
            <hr />
            <div>
                {
                    categories.map(category => <p key={category.id}>
                       <Link className="text-decoration-none btn btn-outline-primary"
                        to={`/category/${category.id}`}>
                            {category.name}</Link>
                    </p>)
                }
            </div>
            <hr />
      <div className="mt-4">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>
      <hr />
        </div>
    );
};

export default RightSideNav;