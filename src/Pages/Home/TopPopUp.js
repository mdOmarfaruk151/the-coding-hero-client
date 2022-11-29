import React from 'react';
import CountDown from '../Shared/CountDown/CountDown';

const TopPopUp = () => {
    return (
        <div>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="alert alert-success shadow-lg mt-2 mb-2">
            
  <div >
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 24 24" fill="none" stroke="#da1919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
    <span className='mr-8 text-xl'>Christmas Offers Ends Up !!🎉 </span>

  <CountDown />
  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  </div>
</div>
        </div>
    );
};

export default TopPopUp;