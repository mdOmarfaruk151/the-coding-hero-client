import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Courses from "../../Pages/Courses/Courses/Courses";
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

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: '/category/:id',
            element: <Category></Category>
          },
          {
            path: '/courses/:id',
            element: <Courses></Courses>
          },
          {
            path: '/my-classes',
            element: <MyClasses></MyClasses>
          },
          {
            path: '/support',
            element: <Support></Support>
          },
          {
            path: '/blog',
            element:<Blog></Blog>
          },
          {
            path: '/faq',
            element: <FAQ></FAQ>
          },
          {
            path: '/about',
            element: <About></About>
          },
          {
            path: '/contact',
            element: <Contact></Contact>
          },
          {
            path: '/jobs',
            element: <Jobs></Jobs>
          },
          {
            path: '/success',
            element: <Success></Success>
          },
          {
            path: '/terms-and-conditions',
            element: <TermsAndConditions></TermsAndConditions>
          },
          {
            path: '/privacy',
            element: <Privacy></Privacy>
          },
          {
            path: '/app-policy',
            element: <AppPolicy></AppPolicy>
          },
          {
            path: '/cookie-policy',
            element: <CookiePolicy></CookiePolicy>
          },
          {
            path: '/refund-policy',
            element: <RefundPolicy></RefundPolicy>
          },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]) 