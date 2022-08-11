import React from "react";
import { Tab, ListGroup } from "react-bootstrap";
import { useActiveGenreContext } from "../../context/activeGenreContext";

const Genres = ({ GenresDataJSON }) => {
  const [activeGenre, handleActiveGenreChange] = useActiveGenreContext();

  const handleShowAllMovies = () => {
    handleActiveGenreChange({
      name: "All Movies",
      id: "0",
    });

    return;
  };

  const handleSelectGenre = (genre) => {
    handleActiveGenreChange({
      name: genre.name,
      id: genre._id,
    });

    return;
  };

  return (
    <Tab.Container id="genreListGroup" defaultActiveKey={activeGenre.name}>
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          action
          href="All Movies"
          onClick={handleShowAllMovies}
          style={{ cursor: "pointer" }}
        >
          All Movies
        </ListGroup.Item>
        {GenresDataJSON.map((genre) => {
          return (
            <ListGroup.Item
              as="li"
              key={genre._id}
              onClick={() => {
                handleSelectGenre(genre);
              }}
              action
              href={genre.name}
              style={{ cursor: "pointer" }}
            >
              {genre.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Tab.Container>
  );
};

export default Genres;
