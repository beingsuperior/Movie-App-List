import React from "react";
import { ActiveGenreProvider } from "./activeGenreContext";
import { MoviesDataProvider } from "./moviesDataContext";

export default function ContextProvider({ children }) {
  return (
    <ActiveGenreProvider>
      <MoviesDataProvider>{children}</MoviesDataProvider>
    </ActiveGenreProvider>
  );
}
