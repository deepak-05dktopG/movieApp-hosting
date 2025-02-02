import React from "react";
import "./index.css";
import Watchlist from "./Watchlist";
import { Link } from "react-router-dom";
import Moviedetails from "./Moviedetails";
import App from "../App";

function Moviecard({
  poster_path1,
  moviename,
  handlewatchlist,
  movieobj,
  handleremove,
  watchlist,
  loading
}) {
  function doescontain(movieobj) {
    



    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieobj.id) {
        return true;
      }
    }
    return false;
  }


  const handleclick = () => {
    <></>
  }
  if (!movieobj) return <p className='bg-dark text-center align-content-center text-white' style={{height:"100vh"}}> <h1> Loading...</h1></p>; // Loading state


  return (
    <>

      <Link
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay='500'
        className="Watchlist text-white text-decoration-none "
        to={`/movie/${movieobj.id}`}
      >

          <div className="movies">
            <div
              onClick={handleclick}
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
                    onClick={()=>{alert(`${moviename} removed from WatchList, Kindly see more about the movie.`)}}
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
                    onClick={()=>{alert(`${moviename} Added to WatchList, Let see more about the Movie`)}}
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


      </Link>

    </>
  );
}

export default Moviecard;




