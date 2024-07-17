import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Moviecard from "./Moviecard";

function Watchlist() {
  return (
    <>
      <div className="container mt-4 d-flex justify-content-center gap-4 ">
        <div className="btn col-2 btn-primary text-white btn-outline-success">
          Action
        </div>
        <div className="btn col-2 btn-primary text-white btn-outline-success">
          Comedy
        </div>
        <div className="btn col-2 btn-primary text-white btn-outline-success">
          Thriller
        </div>
      </div>

      <div className=" pt-3 d-flex justify-content-center">
        <input
          type="text"
          placeholder="Search Movies"
          className="form-control form-control-md w-25  rounded border border-secondary"
        />
      </div>

      <div className="mt-3 overflow-scroll">
        <table className=" w-100 text-center  text-secondary">
          <thead className=" border-top-0 border-start-0 border-end-0 border-2">
            <tr className="">
              <th className="col-1"></th>
              <th className="col-4 ">Name</th>
              <th className="col-2 ">Ratings</th>
              <th className="col-3 ">Popularity</th>
              <th className="col-3 ">Genre</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border">
              <td className="">
                <img
                  className="py-1"
                  style={{ width: "80px", height: "90px" }}
                  src={
                    "https://www.bing.com/th?id=OIP.WpjIjGQtAMaGtKxgDDo-XAHaKC&w=146&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
                  }
                  alt=""
                />
              </td>
              <td className="">bahumbali</td>
              <td className="">6.9</td>
              <td className="">popularity</td>
              <td className="">action</td>
              <td className=" ">
                <button className="btn btn-danger me-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Watchlist;
