import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Moviecard from "./Moviecard";
import Pagination from "./pagination";

function Home({ handlewatchlist, handleremove, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [pageno, pagenumber] = useState(1);

  const previouspage = () => {
    if (pageno == 1) {
      pageno(1);
    } else {
      pagenumber(pageno - 1);
    }
  };
  const nextpage = () => {
    pagenumber(pageno + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=678e5a3ced1fa4aaba1033727890b5fe&language=en-US&page=${pageno}`
      )
      .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageno]);

  return (
    <>
      <div className="">
        <div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="trendingmovies h3  text-center text-white "
          >
            Trending Movies
          </div>
        </div>
        <div
         
          className="d-flex flex-wrap gap-2 justify-content-around"
        >
          {movies.map((moviesobj) => {
            return (
              <div data-aos="flip-right"
              data-aos-duration="1000">
              <Moviecard
                key={moviesobj.id}
                poster_path1={moviesobj.poster_path}
                moviename={moviesobj.original_title}
                handlewatchlist={handlewatchlist}
                movieobj={moviesobj}
                handleremove={handleremove}
                watchlist={watchlist}
              />
              </div>
            );
          })}
        </div>
        <Pagination
          previouspage={previouspage}
          nextpage={nextpage}
          pageno={pageno}
        />
      </div>
    </>
  );
}

export default Home;
