import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Moviecard from "./Moviecard";

function Watchlist() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=678e5a3ced1fa4aaba1033727890b5fe&language=en-US&page=20"      )
      .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, []);

  return (
    <>
      <div>
        <div className="h3 fw-bold text-center ">Watched Movies</div>
      </div>
      <div className="d-flex flex-wrap gap-2 justify-content-around">
        {movies.map((moviesobj) => {
          return <Moviecard poster_path1={moviesobj.poster_path} moviename={moviesobj.original_title} />;
        })}
      </div>
    </>
  );
}

export default Watchlist;
