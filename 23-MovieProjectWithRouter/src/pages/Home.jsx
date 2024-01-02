import React from "react";
import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import { apikey } from "../constants";
import { useLoaderData } from "react-router-dom";
export async function loader(args) {
  console.log(args);

  const { request } = args;
  const url = new URL(request.url);

  const searchParam = url.searchParams.get("search") || "love";

  console.log(searchParam);

  try {
    const movieSearchEndPoint = `http://www.omdbapi.com/?apikey=${apikey}&s=${searchParam}`;
  
    const res = await axios.get(movieSearchEndPoint);
  
    // console.log(res);
    return { movieResponse: res.data , isError: false }; 
    
  } catch (error) {
      const errMsg = error?.response?.data?.Error || error.message || "Something went Wrong"

      return {movieResponse: null, isError: true, errorMsg: errMsg }

  }

}

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <>
      <SearchForm />
      <MovieList movieData={data} />
    </>
  );
};

export default Home;
