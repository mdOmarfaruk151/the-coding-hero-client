import React from 'react';
import { Link } from 'react-router-dom';

const NotificationSVG = () => {
    return (
        <div>
             <div className="dropdown dropdown-end mt-2">
              <label tabIndex={0} className="btn btn-ghost btn-circle hover:animate-bounce">
                <div className=" indicator">
                  <Link to={'/notification'}>
                  <svg className="-mr-5 " xmlns="http://www.w3.org/2000/svg" width="27" height="" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                  </Link>
                  <span className="indicator-item badge bg-red-700  ">0</span>
                </div>
              </label>
            </div>
        </div>
    );
};

export default NotificationSVG;