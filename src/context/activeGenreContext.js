import React from "react";

const CreateActiveGenreContext = React.createContext(undefined);
const CreateActiveGenreDispatchContext = React.createContext(undefined);

function ActiveGenreProvider({ children }) {
  const [activeGenre, setActiveGenre] = React.useState({
    name: "All Movies",
    id: "0",
  });

  const handleActiveGenreChange = (activeGenre) => {
    setActiveGenre(activeGenre);
  };

  return (
    <CreateActiveGenreContext.Provider value={activeGenre}>
      <CreateActiveGenreDispatchContext.Provider
        value={handleActiveGenreChange}
      >
        {children}
      </CreateActiveGenreDispatchContext.Provider>
    </CreateActiveGenreContext.Provider>
  );
}

const useCreateActiveGenreContext = () => {
  const context = React.useContext(CreateActiveGenreContext);

  if (context === undefined) {
    throw Error(
      "useCreateActiveGenreContext must be inside ActiveGenreProvider"
    );
  }

  return context;
};

const useCreateActiveGenreDispatchContext = () => {
  const context = React.useContext(CreateActiveGenreDispatchContext);

  if (context === undefined) {
    throw Error(
      "useCreateActiveGenreDispatchContext must be inside ActiveGenreProvider"
    );
  }

  return context;
};

const useActiveGenreContext = () => {
  return [useCreateActiveGenreContext(), useCreateActiveGenreDispatchContext()];
};

export { ActiveGenreProvider, useActiveGenreContext };
