import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import  PosterCard  from "./PosterCard";
import "./Watchlist.css"

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="watchlist">
        <div className="watchlist_data">
          <h1>My Watchlist</h1>

          <span className="movie_count">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie_grid">
            {watchlist.map((movie) => (
              <PosterCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}

    </div>
  );
};

export default Watchlist;
