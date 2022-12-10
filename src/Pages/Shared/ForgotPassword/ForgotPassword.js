import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { HiLockClosed } from "react-icons/hi";
import { Form, Link, useLocation} from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "../../../images/logo.png";


const ForgotPassword = () => {

//   const location = useLocation();
  const [email, setEmail] = useState('');
  const {forgotPassword} = useContext(AuthContext)

 
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
              Reset Your Password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-white">
              Or{" "}
              <Link
                to={"/log-in"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log In To Your Account
              </Link>
            </p>
          </div>
          <Form
            onSubmit={ async e =>{
                    e.preventDefault()
                    forgotPassword(email)
                    .then(response =>{
                        console.log(response)
                        toast.success('Email Is Sent. Please Check Your Email.')
                        // location.push('/log-in')
                    })
                    .catch(e =>{
                    console.log(e.message)
                    toast.error(e.message)
                })
            }}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm ">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                 value={email}
                 onChange={event =>setEmail(event.target.value)}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300  px-3 py-2 text-white placeholder-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-2"
                  placeholder="Email address"
                />
              </div>

              <div className="text-danger">
                {/* <small>{error}</small> */}
              </div>
            </div>

            <div>
              <button
              
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <HiLockClosed
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
