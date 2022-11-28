import React from 'react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
    return (
        <div className='container mt-5'>
            
           <h3 className='mb-3'>Our Refund Policy Is Very Simple.</h3>
           <p className='text-xl font-semibold text-justify'>

1. You can request a refund within 48 hours of course purchase.
<br />
2. Email the details to <span><Link >the.coding.hero@gmail.com</Link></span> for refund request.
<br />
3. A response will be given within 3 to 7 days after emailing and some more detailed information will be requested.
<br />
4. As our main focus is on teaching, any refund request may take 7-15 days to process.
<br />
5. Since we work in batch system. So once the orientation of a course starts, we focus mainly on teaching the course and no refund requests are accepted after that.
            </p>
        </div>
    );
};

export default RefundPolicy;