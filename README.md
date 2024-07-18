# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh









  <div className="mt-3  ">
          <table className=" w-100 text-center ">
            <thead className="  ">
              <tr className="">
                <th className="col-1"></th>
                <th className="col-5 ">Name</th>
                <th className=" d-flex justify-content-center align-items-center gap-1">
                  <div
                    className="text-success  py-1 px-3"
                    onClick={sortdecreasing}
                  >
                    <i class="fa-solid fa-arrow-down"></i>
                  </div>
                  <div className="">Ratings</div>
                  <div
                    className="text-danger  py-1 px-3"
                    onClick={sortincreasing}
                  >
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                </th>
                <th className="col-3">Genre</th>
              </tr>
            </thead>

            <tbody className="">
              {watchlist
                .filter((movieobj) => {
                  if (currgenre == "All Genres") {
                    return true;
                  } else {
                    return genreids[movieobj.genre_ids[0]] == currgenre;
                  }
                })
                .filter((movieobj) => {
                  return movieobj.original_title
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase());
                })
                .map((movieobj) => {
                  return (
                    <tr className="border  border-top-0 border-start-0 border-end-0">
                      <td className="">
                        <img
                          className="py-1"
                          style={{ width: "80px", height: "90px" }}
                          src={`https://image.tmdb.org/t/p/original/${movieobj.poster_path}`}
                          alt=""
                        />
                      </td>
                      <td className="moviename fw-bold text-success">
                        {movieobj.original_title}
                      </td>
                      <td className="movierating fw-bold text-warning">
                        {movieobj.vote_average}
                      </td>
                      <td className="moviegenre fw-bold text-muted">
                        {genreids[movieobj.genre_ids[0]]}
                      </td>
                      <td
                        onClick={() => handleremove(movieobj)}
                        className="deletebtn1 "
                      >
                        <div className="deletebtn  rounded text-danger">
                          Remove
                        </div>{" "}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>