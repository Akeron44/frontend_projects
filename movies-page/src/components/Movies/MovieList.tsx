import classes from "./Movies.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import MovieCard from "./MovieCard";
import useMovies from "../../hooks/useMovies";
import { useFilteredMovies } from "../../hooks/useFilteredMovies";
import { useEffect } from "react";

function MovieList() {
  const { data, fetchNextPage, isLoading } = useMovies();
  const movies = data?.pages.flat() || [];

  const { filteredMovies, searchedTerm } = useFilteredMovies(movies);

  console.log(searchedTerm, '+searchedTerm')

  useEffect(() => {
    console.log("inside effect")
    if (data) {
      console.log("inside data");
      const allMovies = data?.pages.flat();
      if (allMovies.length > 0) {
        console.log("inside movies");
        console.log(filteredMovies);
      }
    }
  }, [data, searchedTerm]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      {movies.length > 0 ? (
        <MovieCard movies={movies} />
      ) : (
        <h1>No movies for this category or search!</h1>
      )}
      <button
        className={`${classes.loadBtn} btn btn-primary btn-lg`}
        onClick={() => fetchNextPage()}
      >
        Load More
      </button>
    </>
  );
}

export default MovieList;

// import { Movie } from "../../types";
// import classes from "./Movies.module.css";
// import LoadingSpinner from "../UI/LoadingSpinner";
// import MovieCard from "./MovieCard";
// import { useFilterMovies } from "../../hooks/useFilteredMovies";
// import useMovies from "../../hooks/useMovies";
// import { useEffect, useState } from "react";

// function MovieList() {
//   const [movies, setMovies] = useState<Movie[]>([]);

//   const { data, fetchNextPage, isLoading } = useMovies();

// useEffect(() => {
//   if (data?.pages) {
//     const allMovies = data.pages.flat();
//     if (allMovies.length > 0) {
//       setMovies(allMovies);
//     }
//   }
// }, [data]);

//   const { filteredMovies } = useFilterMovies(movies);

//   return (
//     <>
//       <MovieCard movies={filteredMovies || []} />
//       {isLoading && <LoadingSpinner />}
//       <button
//         className={`${classes.loadBtn} btn btn-primary btn-lg`}
//         onClick={() => fetchNextPage()}
//       >
//         Load More
//       </button>
//     </>
//   );
// }

// export default MovieList;
