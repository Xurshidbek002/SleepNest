import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";
import Collection from "../Page/Collection";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Like from "../Page/Like";
import Details from "../Components/Details";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/like",
        element: <Like />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);
