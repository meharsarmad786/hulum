import React from 'react'
import {forwardRef} from "react"
import "./MovieCard.css"
import TextTruncate from "react-text-truncate"
import {ThumbUpSharp} from "@material-ui/icons"

const base_url="https://image.tmdb.org/t/p/original/";

const MovieCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="movieCard">
      <img
      src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
      alt=""
      />
      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        text= {movie.overview}
      />

      <h2>{movie.title || movie.original_name}</h2>
      <p className="movieCard_stats">
      {movie.media_type && `${movie.media_type} ●`}
      {movie.release_date || movie.first_air_date}  ●
      <ThumbUpSharp />{" "}
      {movie.vote_count}
      </p>

    </div>
  )
})

export default MovieCard
