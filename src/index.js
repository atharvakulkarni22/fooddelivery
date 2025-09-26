import {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
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
        }, 
        {
          path: '/cart',
          element: <Cart />
        }
      ]
    }
  ]);

root.render(<RouterProvider router={appRouter} />);
