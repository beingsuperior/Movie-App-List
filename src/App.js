import React from "react";
import Genres from "./components/Genres/Genres";
import Movies from "./components/Movies/Movies";
import GenresDataJSON from "./data/genres.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Genres GenresDataJSON={GenresDataJSON} />
          </div>
          <div className="col-9">
            <Movies />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
