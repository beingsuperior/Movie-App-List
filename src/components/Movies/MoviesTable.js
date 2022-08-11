import React from "react";
import MovieItem from "./MovieItem";
import { Table, Tooltip, OverlayTrigger } from "react-bootstrap";

const MoviesTable = ({
  orderBy,
  handleSortOrder,
  handleDeleteMovie,
  moviesToShow,
}) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to sort in {orderBy} order
    </Tooltip>
  );

  return (
    <Table>
      <thead>
        <tr>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip}
            style={{ color: "yellow" }}
          >
            <th
              className="col-2"
              onClick={() => handleSortOrder("title")}
              style={{ cursor: "pointer" }}
            >
              Title
            </th>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip}
          >
            <th
              className="col-2"
              onClick={() => handleSortOrder("genre")}
              style={{ cursor: "pointer" }}
            >
              Genre
            </th>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip}
          >
            <th
              className="col-2"
              onClick={() => handleSortOrder("numberInStock")}
              style={{ cursor: "pointer" }}
            >
              Stock
            </th>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip}
          >
            <th
              className="col-2"
              onClick={() => handleSortOrder("dailyRentalRate")}
              style={{ cursor: "pointer" }}
            >
              Rate
            </th>
          </OverlayTrigger>
          <th className="col-1"></th>
        </tr>
      </thead>
      <tbody>
        {moviesToShow.map((movie) => {
          return (
            <MovieItem
              movie={movie}
              key={movie._id}
              onClickDelete={handleDeleteMovie}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default MoviesTable;
