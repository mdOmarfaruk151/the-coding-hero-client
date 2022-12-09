import React, { useContext, useState } from 'react';
import { HiLockClosed } from 'react-icons/hi';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../images/logo.png';

const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);

  //! get function from AuthProvider
  const {createUser, updateUserProfile} = useContext(AuthContext);

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,photoURL,email,password);

    createUser(email, password)
    .then(result =>{
      const user =result.user;
      console.log(user);
      setError('');
      form.reset();
      handleUpdateUserProfile(name, photoURL);
    })
    .catch(e=>{
      console.error(e);
      setError(e.message);
    });
  }
  //! for update user profile
  const handleUpdateUserProfile = (name, photoURL) =>{
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    updateUserProfile(profile)
    .then(() =>{})
    .catch(error =>console.error(error));
  }

  //! for checkbox
  const handleAccepted = event =>{
    setAccepted(event.target.checked)
  }
    return (
        <>
       
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border-2 border-gray-500 dark:border-cyan-600 container mt-2 mb-5 rounded-md ">
          <div className="w-full max-w-md space-y-8">
            <div>
              <img
                className="mx-auto h-14 w-auto"
                src={logo}
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Register Now
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-white">
                Or{' '}
                <Link to={'/log-in'} className="font-medium text-indigo-600 hover:text-indigo-500">
                Log In To Your Account
                </Link>
              </p>
            </div>
            <Form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm ">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300  px-3 py-2 text-white placeholder-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-2"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="text" className="sr-only">
                    Photo URL
                  </label>
                  <input
                    id="text"
                    name="photoURL"
                    type="text"
                    autoComplete="text"
                    
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-white placeholder-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-2"
                    placeholder="Photo URL"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300  px-3 py-2 text-white placeholder-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-2"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-white placeholder-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
                    placeholder="Password"
                  />
                </div>
              </div>
               <div className='text-danger'>
               <small>{error}</small>
               </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="Accept-Terms-and-conditions"
                    name="remember-me"
                    type="checkbox"
                    onClick={handleAccepted}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="Accept-Terms-and-conditions" className="ml-2 block text-sm text-gray-900 dark:text-white">
                    <>Accept <Link to={'/terms-and-conditions'}>Terms and Conditions</Link></>
                  
                  </label>
                </div>
  
                
              </div>
  
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  disabled={!accepted}
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiLockClosed className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                  Register
                </button>
              </div>
             

            </Form>
          </div>
        </div>
      </>
    );
};

export default Register;