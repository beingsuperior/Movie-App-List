import React from "react";
import { Button } from "react-bootstrap";

const MovieItem = ({ movie, onClickDelete }) => {
  return (
    <>
      <tr>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Button
            className="btn btn-danger"
            style={{
              padding: "5px 10px 5px 10px",
              fontSize: "14px",
            }}
            onClick={() => {
              onClickDelete(movie._id);
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default MovieItem;
