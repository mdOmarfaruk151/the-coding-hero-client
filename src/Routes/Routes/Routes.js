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
          }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]) 