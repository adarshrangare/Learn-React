import React from "react";
import { Navigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ movieData }) => {
  const { movieResponse } = movieData;
  console.log(movieData);
  // const {Search : movieList} =  movieApiResponse;
  console.log("movieResponse", movieResponse);
  if (movieResponse && movieResponse?.Response === "False") {
    console.log("false");
    return <h3>{movieResponse.Error}</h3> || <Navigate to="/Error" />;
  }

  if (movieData?.isError) {
    return <h2>{movieData?.errorMsg}</h2>;
  }

  return (
    <div>
      {movieResponse?.Search.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie}/>
      ))}
    </div>
  );
};

export default MovieList;
