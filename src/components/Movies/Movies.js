import React from "react";
import { useActiveGenreContext } from "../../context/activeGenreContext";
import { useMoviesDataContext } from "../../context/moviesDataContext";
import SearchBar from "../SearchBar/SearchBar";
import MoviesTable from "./MoviesTable";
import Pagination from "../Pagination/Pagination";
import ConfirmationModal from "../Modal/ConfirmationModal";

const Movies = () => {
  const [activeGenre] = useActiveGenreContext();
  const [{ moviesData }, { handleMoviesDataChange }] = useMoviesDataContext();
  const [deleteModal, setDeleteModal] = React.useState({
    isVisible: false,
    targetId: null,
  });
  const [orderBy, setOrderBy] = React.useState("Ascending");
  const [directDeleteMovie, setDirectDeleteMovie] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [moviesPerPage] = React.useState(4);

  //////////// Filter by Genre ////////////
  const filterMovies = moviesData.filter((movie) => {
    if (activeGenre.id === "0") {
      // id: "0" means All Movies
      return movie.genre._id !== activeGenre.id;
    }
    return movie.genre._id === activeGenre.id;
  });

  //////////// Pagination ////////////
  const indexOfFirstMovie = currentPage * moviesPerPage - moviesPerPage;
  const indexOfLastMovie = currentPage * moviesPerPage - 1;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalMovies = filterMovies.length;
  // paginating
  const moviesToShow = filterMovies.filter((_movie, index) => {
    if (index >= indexOfFirstMovie && index <= indexOfLastMovie) {
      return true;
    }

    return false;
  });

  //////////// Sort ////////////
  const handleSortOrder = (colPath) => {
    orderBy === "Ascending"
      ? setOrderBy("Descending")
      : setOrderBy("Ascending");
    sortMovies(orderBy, colPath);
  };

  const sortMovies = (orderBy, colPath) => {
    if (colPath === "genre") {
      orderBy === "Ascending"
        ? moviesData.sort((prevMovie, nextMovie) =>
            prevMovie.genre.name > nextMovie.genre.name ? 1 : -1
          )
        : moviesData.sort((prevMovie, nextMovie) =>
            prevMovie.genre.name < nextMovie.genre.name ? 1 : -1
          );
      handleMoviesDataChange(moviesData);
      return;
    }

    orderBy === "Ascending"
      ? moviesData.sort((prevMovie, nextMovie) =>
          prevMovie[colPath] > nextMovie[colPath] ? 1 : -1
        )
      : moviesData.sort((prevMovie, nextMovie) =>
          prevMovie[colPath] < nextMovie[colPath] ? 1 : -1
        );

    handleMoviesDataChange(moviesData);
    return;
  };

  //////////// Delete ////////////
  const deleteMovie = (id) =>
    handleMoviesDataChange(moviesData.filter((movie) => movie._id !== id));

  const handleDeleteMovie = (id) => {
    if (!directDeleteMovie) {
      setDeleteModal({
        isVisible: true,
        targetId: id,
      });
      return;
    }

    deleteMovie(id);
  };

  const handleBtnConfirmDelete = () => {
    deleteMovie(deleteModal.targetId);

    setDeleteModal({
      isVisible: false,
      targetId: null,
    });

    return;
  };

  const handleDirectDeleteMovieIsChecked = (event) => {
    if (event.target.checked) {
      setDirectDeleteMovie(true);
    }

    return;
  };

  const handleBtnCloseDeleteModal = () => {
    setDeleteModal({
      isVisible: false,
      targetId: null,
    });
    setDirectDeleteMovie(false);

    return;
  };

  ///////////////////////////////

  return (
    <>
      <p>Showing {moviesData.length} movies in the database.</p>

      <SearchBar />

      <MoviesTable
        moviesToShow={moviesToShow}
        handleSortOrder={handleSortOrder}
        handleDeleteMovie={handleDeleteMovie}
        orderBy={orderBy}
      />

      <Pagination
        itemsPerPage={moviesPerPage}
        totalItems={totalMovies}
        paginate={paginate}
        currentPage={currentPage}
      />

      <ConfirmationModal
        modalTitle="Delete Movie"
        modalDescription="Are you sure you want to delete this movie?"
        showModal={deleteModal}
        handleBtnClose={handleBtnCloseDeleteModal}
        handleBtnConfirm={handleBtnConfirmDelete}
        handleRememberIsChecked={handleDirectDeleteMovieIsChecked}
      />
    </>
  );
};

export default Movies;
