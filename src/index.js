import {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Body />
        },
        {
          path: '/about',
          element: <Suspense><About /></Suspense>
        },
        {
          path: '/contact',
          element: <Suspense><Contact /></Suspense>
        },
        {
          path: '/restaurant/:id',
          element: <RestaurantMenu />
        }
      ]
    }
  ]);

root.render(<RouterProvider router={appRouter} />);
