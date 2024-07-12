import React from "react";
import "./index.css";

function Moviecard({ poster_path1,moviename}) {
  return (
    <>
      <div className="movies d-flex">
        <div
          className="img "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path1})`,
          }}
        >
          <div className="overlay">{moviename}</div>
        </div>
      </div>
    </>
  );
}

export default Moviecard;
