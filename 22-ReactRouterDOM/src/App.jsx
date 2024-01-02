import React from "react";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
// import
// Step 1
//  import 4 things
// createBrowserRouter,
// createRoutesFromElements,
// Route,
// RouterProvider
// from react-router-dom

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// step2
// create Router

import RootLayout from "./layouts/RootLayout";
import PostDetails from "./components/PostDetails";
import RequireAuth from "./components/RequireAuth";
import AuthProvider from "./context/AuthProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route
          path="/Posts"
          element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }
        />
        <Route path="/Posts/:id" element={<PostDetails />} />
        <Route path="/Login" element={<Login />} />
        
      </Route>
      <Route path="*" element={<Error />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
