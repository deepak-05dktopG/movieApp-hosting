import React from "react";
import "./index.css";

function Banner() {
  return (
    <>
      <div className="banner d-flex align-items-center justify-content-center">
        <h1 className="bannername position-absolute text-center d-flex align-items-center justify-content-center">
          Movie Time
        </h1>
        <marquee behavior="alternate" direction="right">
          <div className=" marqueeimg gap-5">
            <img
              src="https://th.bing.com/th/id/OIP.JvVjNGdIzMMZNMw6FOAchgHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
              alt=""
            />
            <img
              src="https://th.bing.com/th/id/OIP.oegfCIw7nZgeieBiQhdaWAHaEK?w=271&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
              alt=""
            />
            <img
              src="https://th.bing.com/th/id/OIP.oYXAHppMi-RQH9HdWqwFKAHaDo?w=311&h=171&c=7&r=0&o=5&dpr=1.4&pid=1.7"
              alt=""
            />
            <img
              src="https://th.bing.com/th/id/OIP.HHsVq6cGcjBHDFItrnXBbgHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
              alt=""
            />
            <img
              src="https://th.bing.com/th/id/OIP.GyYEjqY1ly1SXdQ0dQ3LkgHaDl?w=317&h=169&c=7&r=0&o=5&dpr=1.4&pid=1.7"
              alt=""
            />
            <img
              src="https://th.bing.com/th/id/OIP.ogz4kPKnswuCuqelM2ez2wHaDW?w=309&h=158&c=7&r=0&o=5&dpr=1.4&pid=1.7"
              alt=""
            />
            <img
              src="https://th.bing.com/th/id/OIP.uiiuYtwE07dBZ_cyB57hTAAAAA?w=240&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
              alt=""
            />
          </div>
        </marquee>
      </div>
    </>
  );
}

export default Banner;
