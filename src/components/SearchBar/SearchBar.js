import React from "react";
import { useMoviesDataContext } from "../../context/moviesDataContext";
import { Button, InputGroup, Form } from "react-bootstrap";

const SearchBar = () => {
  const [{ MoviesDataJSON }, { handleMoviesDataChange }] =
    useMoviesDataContext();
  const [searchInput, setSearchInput] = React.useState("");

  React.useEffect(() => {
    const moviesSearched = [...MoviesDataJSON].filter((movie) =>
      movie.title.toLowerCase().startsWith(searchInput.toLowerCase())
    );
    handleMoviesDataChange(moviesSearched);
  }, [searchInput]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleClearInput = () => {
    setSearchInput("");
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Search movie by title"
        aria-label="Search Movie"
      />
      {searchInput ? (
        <Button
          variant="outline-secondary"
          id="btnClear"
          onClick={handleClearInput}
        >
          Clear
        </Button>
      ) : null}
    </InputGroup>
  );
};

export default SearchBar;
