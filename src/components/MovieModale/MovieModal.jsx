import React from "react";
import MovieDetails from "../MovieDetails/MovieDetails";

const MovieModal = ({ show, onClose, children }) => {
  return (
    <div>
      <MovieDetails />
    </div>
  );
};

export default MovieModal;
