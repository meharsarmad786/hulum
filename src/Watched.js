import React, {useContext} from 'react'
import "./Watched.css"
import { GlobalContext } from "./GlobalState";
import  PosterCard  from "./PosterCard";

function Watched() {

  const { watched } = useContext(GlobalContext);

  return (
    <div className="watched">
      <div className="watched_data">
        <h1>Watched Movies</h1>

        <span className="movie_count">
          {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
        </span>
      </div>

      {watched.length > 0 ? (
        <div className="movie_grid">
          {watched.map((movie) => (
            <PosterCard movie={movie} key={movie.id} type="watched" />
          ))}
        </div>
      ) : (
        <h2 className="no-movies">No movies in your list! Add some!</h2>
      )}
    </div>
  )
}

export default Watched
