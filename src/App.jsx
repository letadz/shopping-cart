// import Login from "./pages/auth/Login";
// import SignUp from "./pages/auth/SignUp";
import AuthDetails from "./pages/auth/AuthDetails";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <AuthDetails />
    </div>
  );
};

export default App;
