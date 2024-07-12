import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar fixed-top bg-light border-bottom shadow rounded py-1 ps-3 d-flex gap-4 align-items-center ">
      <img
        src="images/giphy.gif"
        className="logo rounded-circle"
        width={50}
        alt=""
      />
      <Link className="Home text-dark text-decoration-none fw-bold" to="/">
        Home
      </Link>
      <Link
        className="Watchlist text-dark text-decoration-none fw-bold"
        to="/watchlist"
      >
        Watch list
      </Link>
    </div>
  );
}

export default Navbar;
