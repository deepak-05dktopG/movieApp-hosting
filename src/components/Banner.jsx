import React from "react";
import "./index.css";

function Banner() {
  return (
    <>
      <div className="banner d-flex align-items-center justify-content-center">
        <h1 className="bannername position-absolute text-center d-flex align-items-center justify-content-center">
          Movie Time
        </h1>
        <marquee behavior="scroll" direction="left" scrollamount="5">
          <div className=" marqueeimg gap-5">
            <img
              src="https://th.bing.com/th/id/OIP.JvVjNGdIzMMZNMw6FOAchgHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
              alt=""
            />
            <img
              src="https://th.bing.com/th/id/OIP.oegfCIw7nZgeieBiQhdaWAHaEK?w=271&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
              alt=""
            />

          </div>
        </marquee>
      </div>
    </>
  );
}

export default Banner;
