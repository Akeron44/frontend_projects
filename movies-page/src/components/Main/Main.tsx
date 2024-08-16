import Header from "../Header/Header";
import useGenres from "../../hooks/useGenres";
import { Outlet } from "react-router-dom";
import { useFilteredMovies } from "../../hooks/useFilteredMovies";

function Main() {
  const { data: genres } = useGenres();
  const { setSelectedGenreId, setSearchTerm } = useFilteredMovies();

  return (
    <>
      <Header
        onSearch={(searchedTerm) => setSearchTerm(searchedTerm || "")}
        onSelectGenre={(genre) => setSelectedGenreId(genre)}
        genres={genres}
      />
      <Outlet />
    </>
  );
}

export default Main;
