import React from "react";
import axios from "axios";
import { apikey } from "../constants";
import { useLoaderData } from "react-router-dom";

export async function loader(args) {
  const { params } = args;

  const imdbID = params.imdbId;
  const movieDetailEndPoint = `http://www.omdbapi.com/?apikey=${apikey}&i=${imdbID}&plot=full`;

  try {

    const response = await axios.get(movieDetailEndPoint);
    
    console.log(response);

    return {movieData:response.data, isError:false, errorMsg:null}
    
  } catch (error) { 

    const errorMsg = error?.response?.data?.Error || error.message || "Something went Wrong"

    return {movieData : null , isError:false, errorMsg}

  }


}

const MovieDetail = () => {
  const {movieData,isError,errorMsg} = useLoaderData();

  if(isError){
    return <h1>{errorMsg}</h1>
  }

  if(movieData && movieData.Response === "False"){
    return <h3>Something Went Wrong -- {movieData.Error}</h3>
  }


  return <div>MovieDetail</div>;
};

export default MovieDetail;
