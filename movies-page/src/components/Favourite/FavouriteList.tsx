import { Link } from "react-router-dom";
import useMovieStore from "../../store/store";
import MovieCard from "../Movies/MovieCard";
import { useQueryClient } from "@tanstack/react-query";
import { Movie } from "../../types";

interface MovieQueryResult {
  pages: Movie[][];
}

function FavouriteList() {
  const { favourtieMovieIdsArray } = useMovieStore();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MovieQueryResult>(['movies']);


  const movies = data?.pages.flat() || [];

  const favouriteMovies = movies?.filter((movie: Movie) =>
    favourtieMovieIdsArray.includes(movie.id)
  ) || [];
  
  return (
    <>
      <Link to=".."  className="btn btn-link text-white fs-4 fw-bold">Go Back</Link>
      <h3>My favourite Movies</h3>
      {favouriteMovies?.length > 0 ? (
        <MovieCard movies={favouriteMovies} />
      ) : (
        <h1>No Movies added to favourites</h1>
      )}
    </>
  );
}

export default FavouriteList;
