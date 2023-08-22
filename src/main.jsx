import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./reset";
import App from "./App.jsx";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
// import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/registration-form/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    basename: import.meta.env.DEV ? "/" : "/registration-form/",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
