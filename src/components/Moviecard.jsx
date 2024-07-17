import React from "react";
import "./index.css";
import Watchlist from "./Watchlist";

function Moviecard({
  poster_path1,
  moviename,
  handlewatchlist,
  movieobj,
  handleremove,
  watchlist,
}) {
  function doescontain(movieobj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieobj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <div className="movies">
        <div
          className="img d-flex flex-column align-items-center justify-content-between"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path1})`,
          }}
        >
          {doescontain(movieobj) ? (
            <div
              onClick={() => handleremove(movieobj)}
              className="col-12 d-flex justify-content-end me-2 mt-1"
            >
              <div className=" rounded">❤️</div>
            </div>
          ) : (
            <div
              onClick={() => handlewatchlist(movieobj)}
              className="col-12 d-flex justify-content-end me-2 mt-1"
            >
              <div className=" rounded">🖤</div>
            </div>
          )}

          <div className="overlay">{moviename}</div>
        </div>
      </div>
    </>
  );
}

export default Moviecard;
