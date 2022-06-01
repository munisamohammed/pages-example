import React from "react";
import "./details.css";

const MovieDetails = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <div className="container">
      <img src={Poster} alt="poster" />
      <div>
        <h1>{Title}</h1>
        <h2>Year: {Year}</h2>
        <h2>IMDB ID: {imdbID}</h2>
      </div>
      <img src={Poster} alt={`${Title} poster.`} />
    </div>
  );
};

export default MovieDetails;
