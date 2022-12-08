import React from 'react';
import Teams from './Teams';
import Instructor from './Instructor';
import Business from './Business';
import Education from './Education';
import TopPopUp from './TopPopUp';
import TopSlideCover from './TopSlideCover';
import SpecialOffers from './SpecialOffers';

const Home = () => {
    return (
<div className=' dark:bg-black container'>
<section>
<TopPopUp/> 
  
</section> 
<br />
<section>
 <TopSlideCover/>   
</section>     
<br />
<section>
<Instructor/>   
</section>
<br />
<section>
<Teams />   
</section>
<br />
<section>
<Education/>
</section>
<br />
<section>
<Business/>
</section> 
<br />
<section>
<SpecialOffers/>
</section>
<br />
        </div>
    );
};

export default Home;