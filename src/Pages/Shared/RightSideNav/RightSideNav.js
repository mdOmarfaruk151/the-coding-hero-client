import React from 'react';
import OffersCarousel from '../OffersCarousel/OffersCarousel';
import CategorySideBar from "../CategorySideBar/CategorySideBar";
import FindUsOn from "./FindUsOn";
import SubscribeByEmail from "./SubscribeByEmail";

const RightSideNav = () => {
   
    return (
        <div className="border-l-4 border-gray-500 ">
            <OffersCarousel></OffersCarousel>
            <div className="d-none d-xl-block d-xxl-block">
            <CategorySideBar></CategorySideBar>
            </div>
      <section>
        <FindUsOn/>
      </section>
      
      <section>
        <SubscribeByEmail/>
      </section>
        </div>
    );
};

export default RightSideNav;