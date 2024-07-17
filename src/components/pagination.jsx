import React from "react";

function Pagination({previouspage,nextpage,pageno}) {
  return (
    <div className="bg-secondary hover-bg-secondary d-flex justify-content-center gap-5">
      <div onClick={previouspage}>
        <i className="fa-solid fa-backward"></i>
      </div>
      <div className="fw-bold">{pageno}</div>
      <div onClick={nextpage}>
        <i className="fa-solid fa-forward"></i>
      </div>
    </div>
  );
}

export default Pagination;
