import {
    FaFacebook,
    FaTwitter,
    FaWhatsapp,
    FaTwitch,
  } from "react-icons/fa";
import { ListGroup } from 'react-bootstrap';
import OffersCarousel from '../OffersCarousel/OffersCarousel';
import CategorySideBar from "../CategorySideBar/CategorySideBar";

const RightSideNav = () => {
   
    return (
        <div>
            <OffersCarousel></OffersCarousel>
            <div className="d-none d-xl-block d-xxl-none">
            <CategorySideBar></CategorySideBar>
            </div>
      <div className="mt-4 ">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2 d-flex justify-center hover:bg-blue-500 hover:text-white ">
            <FaFacebook className="mr-2 mt-1"/> Facebook
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
      <hr />
        </div>
    );
};

export default RightSideNav;