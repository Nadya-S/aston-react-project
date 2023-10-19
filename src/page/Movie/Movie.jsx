import { useEffect } from "react";
import "./Movie.css";

const Movie = () => {
  useEffect(() => {});

  return (
    <section className="movie">
      <div className="movie__image_container">
        <img className="movie__image" alt="#"></img>
      </div>
      <div className="movie__description_container">
        <h2 className="movie__title">Title</h2>
        <p className="movie__description">
          description description description description
        </p>
        <div className="movie__about"></div>
      </div>
    </section>
  );
};

export default Movie;
