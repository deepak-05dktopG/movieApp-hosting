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
            backgroundImage: `url(${poster_path1})`,
          }}
        >
          {doescontain(movieobj) ? (
            <div
              onClick={() => handleremove(movieobj)}
              className="col-12 d-flex justify-content-end me-2 mt-1"
            >
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
                className="fav"
              >
                ❤️
              </div>
            </div>
          ) : (
            <div
              onClick={() => handlewatchlist(movieobj)}
              className="col-12 d-flex justify-content-end me-2 mt-1"
            >
              <div
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="500"
                className="fav"
              >
                🤍
              </div>
            </div>
          )}

          <div
            data-aos="flip-right"
            data-aos-delay="500"
            data-aos-offset="10"
            data-aos-duration="1000"
            className="overlay"
          >
            {moviename}
          </div>
        </div>
      </div>
    </>
  );
}

export default Moviecard;
