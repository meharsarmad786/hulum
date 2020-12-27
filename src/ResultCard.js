import React, { useContext } from 'react'
import "./ResultCard.css"
import {Button} from "@material-ui/core"
import Moment from "react-moment";
import { GlobalContext } from "./GlobalState";
import TextTruncate from "react-text-truncate"

const ResultCard = ({movie}) => {

  const { addMovieToWatchlist, watchlist} = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : false;

  return (
    <div className="resultCard">

       {movie.poster_path ? (
         <img
           src={`https://image.tmdb.org/t/p/w200${movie.poster_path || movie.backdrop_path}`}
           alt={`${movie.title} Poster`}
         />
       ) : (
         <div className="fill_poster" />
       )}


       <div className="info">
         <div className="desc">
           <h3 className="title">{movie.title || movie.original_name}</h3>
           <p className="release_date">
               <Moment format="YYYY">{movie.release_date || movie.first_air_date}</Moment>
           </p>
           <TextTruncate
             line={6}
             element="p"
             truncateText="..."
             text= {movie.overview}
           />

         </div>

         <div className="controls">
           <Button
             variant="outlined"
             disabled={watchlistDisabled}
             onClick={() => addMovieToWatchlist(movie)}
           >
             Add to Watchlist
           </Button>

           <Button
             variant="outlined"
           >
             Add to Watched
           </Button>
         </div>
       </div>
   </div>
  )
}

export default ResultCard
