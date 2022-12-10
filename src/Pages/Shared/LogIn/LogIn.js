import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { HiLockClosed } from 'react-icons/hi';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../images/logo.png';

const LogIn = () => {

    //! for google login
    const googleProvider = new GoogleAuthProvider()
    //! for github login
    const githubProvider = new GithubAuthProvider()
    //! for show error msg
     const [error, setError] = useState('');
    //! get function from AuthProvider
    const {providerLogin, githubProviderLogin, setLoading, signIn} = useContext(AuthContext);
    //! for when login go to the selected page
    const navigate = useNavigate();
    //! for set deflate page when login
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';
 
    //! for login with google
    const handleGoogleLogIn =() =>{
       providerLogin(googleProvider)
       .then(result =>{
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true})
       })
       .catch(error => console.error(error))
    }
    //! for login with github
    const handleGithubSignIn =()=>{
      githubProviderLogin(githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error =>{
            console.error('error',error);
        })
        .finally(()=>{
          setLoading(false);
        })
    }
    //! for login with email and password
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            if(user.emailVerified){
              navigate(from, {replace: true})
            }
            else{
              toast.error('Your Email Is Not Verified. Please Verify Your Email Address.')
            }
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
        .finally(()=>{
          setLoading(false);
        })
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
                Log In To Your Account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-white">
                Or{' '}
                <Link to={'/register'} className="font-medium text-indigo-600 hover:text-indigo-500">
                Register Now
                </Link>
              </p>
            </div>
            <Form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm ">
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
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-white">
                    Remember me
                  </label>
                </div>
  
                <div className="text-sm">
                  <Link to={'/forgot-password'} className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </Link>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiLockClosed className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                  Log in
                </button>
              </div>
              <div className="flex flex-col w-full lg:flex-row">
  <button onClick={handleGoogleLogIn} className="grid flex-grow h-5 card bg-base-500 rounded-box place-items-center dark:bg-black border-2 dark:border-cyan-600 border-gray-500 hover:bg-gray-500 hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-white">
    <div className='d-flex p-3 '>
    <FaGoogle className='mt-1 me-1 '/>
    <h5>Google</h5>
    </div>
    
    </button> 

  <div className="divider lg:divider-horizontal">OR</div> 
  <button onClick={handleGithubSignIn} className="grid flex-grow h-5 card bg-base-500 rounded-box place-items-center dark:bg-black border-2 dark:border-cyan-600 border-gray-500 hover:bg-black hover:text-white dark:hover:bg-gray-700">
    <div className='d-flex p-3 ' >
    <FaGithub className='mt-1 me-1 '/>
    <h5>Gitbub</h5>
    </div>
    </button>
</div>
            </Form>
          </div>
        </div>
      </>
    );
};

export default LogIn;