import React from "react";
import { apikey } from "./constants";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { loader as MovieLoader } from "./pages/Home";
import { loader as MovieCardLoad } from "./pages/MovieDetail";

import { Error,Home,MovieDetail,Root} from "./pages";


const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Root/>}>
  <Route index element={<Home/>} loader={MovieLoader} />
  <Route path="/detail/:imdbId" element={<MovieDetail/>} loader={MovieCardLoad} />
  <Route path="*" element={<Error/>}/>


</Route>))

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
