import {
    createBrowserRouter,
  } from "react-router-dom";
import { Main } from "../layouts/Main";
import { Home } from "../pages/Home/Home";
import RangeSlider from "../pages/Category/RangeSlider/RangeSlider";
import { Category } from "../pages/Category/Category";
import { Private } from "../layouts/Private";
import { Profile } from "../pages/user/Profile";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/fertilizer",
          element: <RangeSlider></RangeSlider>
        },
        {
          path: "/profile",
          element: <Private><Profile/></Private>
        }
      ]
    },
    {
      path: "category",
      element: <Main></Main>,
      children: [
        {
          path:"",
          element: <Category></Category>
        }
      ]
    }
  ]);
export default router;