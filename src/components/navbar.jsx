import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar fixed-top  border-bottom shadow rounded py-1 ps-3 d-flex gap-4 align-items-center ">
      <img
      data-aos='zoom-out'
      data-aos-duration='1000'
      data-aos-delay='200'

        src="https://i.pinimg.com/originals/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg "
        className="logo border border-secondary rounded-circle"
        width={50}
        alt=""
      />
      <Link
        data-aos="fade-out"
        data-aos-duration="1000"
        data-aos-delay='500'
        className="Home text-white text-decoration-none "
        to="/"
      >
        Home
      </Link>
      <Link
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay='500'

        className="Watchlist text-white text-decoration-none "
        to="/watchlist"
      >
        Watch list
      </Link>
    </div>
  );
}

export default Navbar;
