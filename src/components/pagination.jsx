import React from "react";

function Pagination({previouspage,nextpage,pageno}) {
  return (
    <div className="pt-3">
    <div className=" pagination d-flex justify-content-center gap-5">
      <div data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay='800'
              data-aos-offset='0' onClick={previouspage}>
        <i className="fa-solid fa-backward"></i>
      </div>
      <div data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay='200'
              data-aos-offset='0' className="">{pageno}</div>
      <div data-aos="flip-right"
              data-aos-duration="1000"
              data-aos-delay='800'
              data-aos-offset='0' onClick={nextpage}>
        <i className="fa-solid fa-forward"></i>
      </div>
    </div>
    </div>
  );
}

export default Pagination;
