import React from "react";
import MoviesDataJSON from "../data/movies.json";

const CreateMoviesDataContext = React.createContext(undefined);
const CreateMoviesDataDispatchContext = React.createContext(undefined);

function MoviesDataProvider({ children }) {
  const [moviesData, setMoviesData] = React.useState(MoviesDataJSON);

  const handleMoviesDataChange = (moviesData) => {
    setMoviesData(moviesData);
  };

  return (
    <CreateMoviesDataContext.Provider value={{ moviesData, MoviesDataJSON }}>
      <CreateMoviesDataDispatchContext.Provider
        value={{ handleMoviesDataChange }}
      >
        {children}
      </CreateMoviesDataDispatchContext.Provider>
    </CreateMoviesDataContext.Provider>
  );
}

const useCreateMoviesDataContext = () => {
  const context = React.useContext(CreateMoviesDataContext);

  if (context === undefined) {
    throw Error("useCreateMoviesDataContext must be inside MoviesDataProvider");
  }

  return context;
};

const useCreateMoviesDataDispatchContext = () => {
  const context = React.useContext(CreateMoviesDataDispatchContext);

  if (context === undefined) {
    throw Error(
      "useCreateMoviesDataDispatchContext must be inside MoviesDataProvider"
    );
  }

  return context;
};

const useMoviesDataContext = () => {
  return [useCreateMoviesDataContext(), useCreateMoviesDataDispatchContext()];
};

export { MoviesDataProvider, useMoviesDataContext };
