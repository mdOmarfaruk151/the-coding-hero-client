// import React, { useContext, useState } from 'react';
// import logo from "../../../images/logo.png";
// import { toast } from "react-hot-toast";
// import { Form, useLocation } from 'react-router-dom';
// import { HiLockClosed } from 'react-icons/hi';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

// function useQuery(){
//     const location = useLocation()
//     return new URLSearchParams(location.search);
// }

// const ConfirmPasswordReset = () => {

//     const {resetPassword} = useContext(AuthContext);
//     const location = useLocation();

//     const query = useQuery()
//     console.log(query.get('mode'))
//     console.log(query.get('oobCode'))
//     console.log(query.get('continueURL'))

//     const [newPassword, setNewPassword] = useState('')

//     return (
//         <>
//         <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border-2 border-gray-500 dark:border-cyan-600 container mt-2 mb-5 rounded-md ">
//           <div className="w-full max-w-md space-y-8">
//             <div>
//               <img
//                 className="mx-auto h-14 w-auto"
//                 src={logo}
//                 alt="Your Company"
//               />
//               <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
//                 Reset Your Password
//               </h2>
              
//             </div>
//             <Form
//               onSubmit={async e =>{
//                 e.preventDefault()
                
//                 resetPassword(query.get('oobCode'), newPassword)
//                 .then(res => {
//                     console.log(res)
//                     toast.success('Password has been changed, you can login now.')
//                     location.push('/log-in')
//                 })
//                 .catch(err => {
//                     console.log(err.message)
//                     toast.error(err.message)
//                 })
//               }}
//               className="mt-8 space-y-6"
//               action="#"
//               method="POST"
//             >
//               <input type="hidden" name="remember" defaultValue="true" />
//               <div className="-space-y-px rounded-md shadow-sm ">
//                 <div>
//                   <label htmlFor="password" className="sr-only">
//                     New Password
//                   </label>
//                   <input
//                    value={newPassword}
//                    onChange={event =>setNewPassword(event.target.value)}
//                     id="password"
//                     name="password"
//                     type="password"
                    
//                     required
//                     className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300  px-3 py-2 text-white placeholder-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-2"
//                     placeholder="New Password"
//                   />
//                 </div>
  
                
//               </div>
  
//               <div>
//                 <button
                
//                   type="submit"
//                   className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                     <HiLockClosed
//                       className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
//                       aria-hidden="true"
//                     />
//                   </span>
//                   Reset Password
//                 </button>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </>
//     );
// };

// export default ConfirmPasswordReset;