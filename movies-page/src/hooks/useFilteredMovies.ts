import { useState, useEffect } from "react";
import { Movie } from "../types";


export const useFilteredMovies = (movies: Movie[] = []) => {
  const [searchedTerm, setSearchTerm] = useState<string>("");
  const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);


  useEffect(() => {
    let filtered = [...movies]; // Start with all movies
    console.log(searchedTerm)
    setFilteredMovies(filtered);
  }, [searchedTerm, selectedGenreId]); // Only re-run effect if these dependencies change

  return { filteredMovies, setSearchTerm, setSelectedGenreId, searchedTerm, selectedGenreId };
};


// import { useState, useEffect } from "react";
// import { Movie } from "../types";

// export const useFilterMovies = (movies: Movie[] = []) => { // Default to empty array
//   const [searchedTerm, setSearchTerm] = useState<string>("");
//   const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>();
//   const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]); // Initialize to empty array

//   useEffect(() => {
// const filtered = movies.filter((movie) => {
//   if (selectedGenreId && !movie.genre_ids.includes(selectedGenreId)) {
//     return false;
//   }

//   if (
//     searchedTerm &&
//     !movie.title.toLowerCase().includes(searchedTerm.toLowerCase())
//   ) {
//     return false;
//   }
//   return true;
// });
// setFilteredMovies(filtered);
//   }, [searchedTerm, selectedGenreId]);

//   return { filteredMovies, setSearchTerm, setSelectedGenreId };
// };
