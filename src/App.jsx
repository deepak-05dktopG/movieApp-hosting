import Navbar from "./components/navbar";
import Home from "./components/Home";
import Banner from "./components/Banner";
import Watchlist from "./components/Watchlist";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="mt-5 pt-2">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Home />
                </>
              }
            />
            <Route
              path="/watchlist"
              element={
                <>
                  <Watchlist />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
//https://api.themoviedb.org/3/movie/popular?api_key=678e5a3ced1fa4aaba1033727890b5fe&language=en-US&page=1
//  https://api.themoviedb.org/3/discover/movie?api_key=678e5a3ced1fa4aaba1033727890b5fe&include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc