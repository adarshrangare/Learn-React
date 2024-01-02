import React from 'react'
import { Link } from 'react-router-dom'


const MovieCard = ({Title,Year,Poster,imdbID}) => {

    const defaultPoster = "https://cdn3.vectorstock.com/i/1000x1000/79/12/movie-and-film-poster-template-design-modern-vector-32767912.jpg"
    
    
  return (
    <Link to={`/detail/${imdbID}`}>
        
        <h3>{Title} ({Year})</h3>
        <img src={Poster== "N/A" ? defaultPoster : Poster} alt="Title" width={200} />
    </Link>
  )
}

export default MovieCard