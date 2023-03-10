import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaFacebook, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa';


const FindUsOn = () => {
    return (
        <div>
            <div className="mt-4 ml-2">
        <h5 className='text-center mb-2'>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2 d-flex justify-center hover:bg-blue-500 hover:text-white "  >
            <FaFacebook className="mr-2 mt-1"/> 
            <a  href="https://www.facebook.com/Mohammad.Omar.Faruk007" target="_blank" rel="noopener noreferrer" className='no-underline text-gray-600' >Facebook</a>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 d-flex justify-center hover:text-white hover:bg-green-500 ">
            <FaWhatsapp className="mr-2 mt-1"/> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 d-flex justify-center hover:text-white hover:bg-sky-500">
            <FaTwitter className="mr-2 mt-1"/> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 d-flex justify-center hover:text-white hover:bg-purple-600 ">
            <FaTwitch className="mr-2 mt-1"/> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>
        </div>
    );
};

export default FindUsOn;