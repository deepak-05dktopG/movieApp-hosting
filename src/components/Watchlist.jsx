import React, { useEffect, useState } from "react";
function Watchlist({ watchlist, setwatchlist, handleremove }) {
  const [search, setsearch] = useState("");
  const [currgenre, setcurrgenre] = useState("All Genres");


  let sortincreasing = () => {
    let accending = watchlist.sort((movieA, movieB) => {
      if (!movieA.rating || !movieB.rating) return 0; // Add this check
      return movieA.rating.average - movieB.rating.average;
    });
    setwatchlist([...accending]);
  };

  let sortdecreasing = () => {
    let decending = watchlist.sort((movieA, movieB) => {
      if (!movieA.rating || !movieB.rating) return 0; // Add this check
      return movieB.rating.average - movieA.rating.average;
    });
    setwatchlist([...decending]);
  };



  return (
    <>
      <div className=" w-100 ">
    

        <div
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
          className=" pt-3 d-flex justify-content-center"
        >
          <input
            onChange={(e) => setsearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search by name"
            style={{ width: "60%" }}
            className="form-control form-control-md  rounded border border-secondary"
          />
        </div>
      </div>
      <div className="mt-3 ">
        <table className=" container  text-center ">
          <thead className="  ">
            <tr className="">
              <th className=" col-1"></th>
              <th
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                className=" col-4"
              >
                Name
              </th>
              <th className="  d-flex  justify-content-center align-items-center gap-1">
                <div
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className="text-success "
                  onClick={sortdecreasing}
                >
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className=""
                >
                  Rating
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className="text-danger "
                  onClick={sortincreasing}
                >
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
              </th>
              <th
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                className=" col-4 border-dark"
              >
                Genre
              </th>
            </tr>
          </thead>

          <tbody className="">
            {watchlist
              .filter((movieobj) => {
                if (currgenre == "All Genres") {
                  return true;
                } else {
                  return [movieobj.genres] == currgenre;
                }
              })
              .filter((movieobj) => {
                return movieobj.name && movieobj.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((movieobj) => {
                return (
                  <tr className="watchlistitems border border-top-0 border-start-0 border-end-0 border-secondary">
                    <td
                      data-aos="flip-left"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                      data-aos-offset="0"
                      className=""
                    >
                      <img
                        className="py-1"
                        style={{ width: "80px", height: "90px" }}
                        src={`${movieobj.image.medium}`}
                        alt=""
                      />
                    </td>
                    
                    <td
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                      data-aos-offset="0"
                      className="moviename  "
                    >
                      
                      {movieobj.name}
                    </td>
                    <td
                      data-aos="zoom-out"
                      data-aos-duration="1000"
                      data-aos-delay="800"
                      data-aos-offset="0"
                      className="movierating  fw-bold   text-warning"
                    >
                      {movieobj.rating.average}
                    </td>
                    <td
                      data-aos="fade-down"
                      data-aos-duration="1000"
                      data-aos-delay="800"
                      data-aos-offset="0"
                      className="moviegenre"
                    >
                      {[movieobj.genres[0]]}
                    </td>
                    <td
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      data-aos-delay="1200"
                      data-aos-offset="0"
                      onClick={() => handleremove(movieobj)}
                      className="deletebtn1  "
                    >
                      <div className="deletebtn fw-bold  rounded text-danger">
                        Remove
                      </div>{" "}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Watchlist;
