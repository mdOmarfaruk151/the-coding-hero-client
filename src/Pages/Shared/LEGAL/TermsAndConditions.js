import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className='container mt-4'>
            
            <div className='mb-3 font-bold justify-between d-flex'>
                <h3>The Coding Hero Terms of Use</h3>
                <p>Go Back To: <Link to={'/register'}>Register</Link></p>
            </div>
            <p className=' text-lg text-justify font-semibold '>

Welcome to 'The Coding Hero'. We assume that you are using or intending to use the website in accordance with all the terms and conditions of this website. “We”, “Us” as used in this website basically means “The Coding Hero” authorities. If you have problem understanding any terms and conditions then you can contact us via email or facebook page. The decision of “The Coding Hero” authority regarding terms and conditions is final and the authority reserves the right to change it at any time.
<br />
<h4 className='mt-3 mb-3 font-bold'>Terms and Conditions:</h4>

1. Your account credentials "username and password" are strictly personal to you. They are not allowed to be shared with any other person/media. If Account Credentials are shared with any other person/medium, your Account may be terminated at any time without notice and you may no longer use this Account.
<br />
<p className='mt-3 -mb-3'>
2. Any distribution of course materials without the permission of the authorities is strictly prohibited and punishable by law. We hope you will be careful about this. It can harm everyone as a whole.
</p>
<br />
<p className='mt-3 -mb-3'>
3. It is a punishable offense to exchange or share any video, text or content related to 'The Coding Hero' courses with anyone for money or for free without written permission from 'The Coding Hero'. Sharing via Google Drive, Facebook, YouTube, or any pen drive, CD, DVD or any other means, "The Coding Hero" team or "The Coding Hero's legal representative" Copyright Act of the Government of the People's Republic of Bangladesh, Copyright Act 2000, Copyright Act 2005 as amended: Sec. 84, Digital Security Act, 2018, Digital Security Act, 2018 "Section 19" and cyber security or may take necessary action against me under appropriate laws.
</p>
<br />
<p className='mt-3 -mb-3'>
4. Please refrain from personal attacks, political talk and violent speech of any kind in “The Coding Hero” support chats, group chats, Facebook group posts, comments, Facebook pages or any other medium related to The Coding Hero. You will be muted/banned from group chat and group membership for any such activity and your account may be terminated at any time in case of repetition.
</p>
<br />
<p className='mt-3 -mb-3'>
5. Check the course curriculum before enrolling in the course, otherwise no complaint will be entertained. If you have any request related to the course curriculum, you can inform by support chat, email or message on Facebook page.
</p>
<br />
<p className='mt-3 -mb-3'>
6. All the website links, video links, blog links that will be provided as educational materials during the course are only for your practice.
</p>
<br />
<p className='mt-3 -mb-3'>
7. Refrain from all types of promotional posts, spamming in group chats, Facebook group posts, comments, forums or Facebook pages. You will be muted/banned from group chat and group membership for any such activity and your account may be terminated at any time in case of repetition.
</p>
<br />
<p className='mt-3 -mb-3'>
8. “The Coding Hero” decision is final for all payment related matters. Be sure to check the cost and medium of the course before making the payment. We accept payments through Bkash Merchant and SSL Commerce. Any query related to this can be contacted on our given number, support, email or Facebook page.
</p>
<br />
<p className='mt-3 mb-5'>
Hopefully, you will abide by the above terms and conditions and complete the course in full.
</p>
            </p>
        </div>
    );
};

export default TermsAndConditions;