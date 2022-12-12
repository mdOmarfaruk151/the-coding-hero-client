import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import BlogPage from "../../Pages/Blog/BlogPage";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import MyClasses from "../../Pages/MyClasses/MyClasses";
import Contact from "../../Pages/Shared/Company/Contact";
import Jobs from "../../Pages/Shared/Company/Jobs";
import Success from "../../Pages/Shared/Company/Success";
import AppPolicy from "../../Pages/Shared/LEGAL/AppPolicy";
import CookiePolicy from "../../Pages/Shared/LEGAL/CookiePolicy";
import Privacy from "../../Pages/Shared/LEGAL/Privacy";
import RefundPolicy from "../../Pages/Shared/LEGAL/RefundPolicy";
import TermsAndConditions from "../../Pages/Shared/LEGAL/TermsAndConditions";
import Support from "../../Pages/Support/Support";
import CoursesPage from "../../Pages/Courses/CoursesPage";
import Course from "../../Pages/Courses/Course";
import GetPremiumAccess from "../../Pages/Courses/GetPremiumAccess";
import AddToCart from "../../Pages/Courses/AddToCart";
import LogIn from "../../Pages/Shared/LogIn/LogIn";
import Profile from "../../Pages/Shared/Profile/Profile";
import Notification from "../../Pages/Notification/Notification";
import Register from "../../Pages/Shared/SignIn/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ForgotPassword from "../../Pages/Shared/ForgotPassword/ForgotPassword";
import DevelopedBy from "../../Pages/Shared/Footer/DevelopedBy/DevelopedBy";
import StartTeachingToday from "../../Pages/Home/StartTeachingToday/StartTeachingToday";
import FindOutNow from "../../Pages/Home/FindOutNow/FindOutNow";
import CodingHeroBusiness from "../../Pages/Home/CodingHeroBusiness/CodingHeroBusiness";
import GetMoreInfo from "../../Pages/Home/GetMoreInfo/GetMoreInfo";
// import ConfirmPasswordReset from '../../Pages/Shared/ConfirmPasswordReset/ConfirmPasswordReset';

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <CoursesPage></CoursesPage>,
        loader: () =>
          fetch("https://the-coding-hero-server.vercel.app/courses"),
      },
      {
        path: "/category/:id",
        element: <CoursesPage></CoursesPage>,
        loader: ({ params }) =>
          fetch(
            `https://the-coding-hero-server.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/course/:id",
        element: <Course></Course>,
        loader: ({ params }) =>
          fetch(
            `https://the-coding-hero-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/my-classes",
        element: (
          <PrivateRoutes>
            <MyClasses></MyClasses>
          </PrivateRoutes>
        ),
      },
      {
        path: "/support",
        element: (
          <PrivateRoutes>
            <Support></Support>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
        loader: () => fetch("https://the-coding-hero-server.vercel.app/blogs"),
      },
      {
        path: "/blogs/:id",
        element: <Blog></Blog>,
        loader: ({ params }) =>
          fetch(`https://the-coding-hero-server.vercel.app/blogs/${params.id}`),
      },
      {
        path: "/blogs-category/:id",
        element: <BlogPage></BlogPage>,
        loader: ({ params }) =>
          fetch(
            `https://the-coding-hero-server.vercel.app/blogs-category/${params.id}`
          ),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/start-teaching-today",
        element: <StartTeachingToday></StartTeachingToday>,
      },
      {
        path: "/find-out-now",
        element: <FindOutNow></FindOutNow>,
      },
      {
        path: "/get-the-coding-hero-business",
        element: <CodingHeroBusiness></CodingHeroBusiness>,
      },
      {
        path: "/get-more-info",
        element: <GetMoreInfo></GetMoreInfo>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/success",
        element: <Success></Success>,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },
      {
        path: "/app-policy",
        element: <AppPolicy></AppPolicy>,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy></CookiePolicy>,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy></RefundPolicy>,
      },
      {
        path: "/get-premium-access/:id",
        element: (
          <PrivateRoutes>
            <GetPremiumAccess></GetPremiumAccess>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-coding-hero-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/add-to-cart",
        element: <AddToCart></AddToCart>,
      },
      {
        path: "/notification",
        element: <Notification></Notification>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/log-in",
        element: <LogIn></LogIn>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      // {
      //   path:"/confirm-password-reset",
      //   element:<ConfirmPasswordReset></ConfirmPasswordReset>
      // },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path:'/developed-by',
        element: <DevelopedBy></DevelopedBy>
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
