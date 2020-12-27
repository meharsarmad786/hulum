import React, {useContext} from 'react'
import "./PosterCard.css"
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core';
import { GlobalContext } from "./GlobalState";

function PosterCard({movie, type}) {

  const {removeMovieFromWatchlist, addMovieToWatched,moveToWatchlist,
    removeFromWatched,} = useContext(GlobalContext);

  return (
    <div className="posterCard">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      <div className="posterCard_stats">
        {type === "watchlist" && (
        <>
          <IconButton classname="hvr" onClick={() => addMovieToWatched(movie)}>
            <VisibilityIcon  className="eye" fontSize="large"/>
          </IconButton>

          <IconButton onClick={() => removeMovieFromWatchlist(movie.id)}>
            <ClearIcon className="close" fontSize="large"/>
          </IconButton>
        </>
        )}

        {type === "watched" && (
        <>
          <IconButton onClick={() => moveToWatchlist(movie)}>
            <VisibilityOffIcon className="eye" fontSize="large"/>
        </IconButton>

          <IconButton onClick={() => removeFromWatched(movie.id)}>
            <ClearIcon className="close" fontSize="large"/>
        </IconButton>
        </>
        )}

      </div>
    </div>
  )
}

export default PosterCard
