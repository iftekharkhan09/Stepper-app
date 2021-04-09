import React from 'react';
import movies from '../config/movies';
import "./MovieSelector.scss";

function MovieSelector({onChange, value}) {
  return (
    <div className="movie-selector-container">
      <ul role="menu" className="movie-selector">
        {
          movies.map((movie)=>{
            return(
              <li key={movie.slug} className={movie === value ? "active": "inactive"} role="button" onClick={() => onChange(movie)} >
                <img src={movie.cover} alt={movie.title} />
              </li>
            )
          })
        }

      </ul>
    </div>
  );
}
export default MovieSelector;