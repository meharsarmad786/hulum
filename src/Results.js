import React,{useState, useEffect} from 'react'
import MovieCard from "./MovieCard"
import "./Results.css"
import requests from "./requests"
import axios from "./axios"
import FlipMove from "react-flip-move"

function Results({ selectedOption }) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);


  return (
    <div className="result">
      <FlipMove>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </FlipMove>


    </div>
  )
}

export default Results
