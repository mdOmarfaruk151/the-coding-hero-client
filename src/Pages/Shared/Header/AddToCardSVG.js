import React from 'react';
import { Link } from 'react-router-dom';

const AddToCardSVG = () => {
    return (
        <div>
             <div className="dropdown dropdown-end mt-2">
              <label tabIndex={0} className="btn btn-ghost btn-circle hover:animate-bounce">
                <div className=" indicator">
                  <Link to={'/add-to-cart'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white -mr-5 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  </Link>
                  <span className="indicator-item badge bg-red-700  ">0</span>
                </div>
              </label>
            </div>
        </div>
    );
};

export default AddToCardSVG;