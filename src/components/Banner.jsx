import React from "react";
import "./index.css";

function Banner() {
  return (
    <>
      <div className="banner d-flex align-items-center justify-content-center">
        <h1 className="bannername position-absolute text-center d-flex align-items-center justify-content-center">
          <div className="">Movie</div>
          <div>Time</div>
        </h1>

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide  carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://wallpaperaccess.com/full/861773.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://wallpapercave.com/wp/wp2904203.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.hdqwalls.com/download/star-wars-the-force-awakens-poster-4k-3840x2400.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images5.alphacoders.com/131/1315822.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://wallpapercave.com/wp/wp9022257.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://wallpapercave.com/wp/wp5148855.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images8.alphacoders.com/550/550666.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
