import { create } from "zustand";
import { Movie } from "../types";

interface MovieStore {
  favourtieMovieIdsArray: number[];
  toggleFavouriteMoviesId: (id: number) => void;
  addToCart: (movie: Movie) => void;
  removeFromCart: (id: number) => void;
  orderedMovies: Movie[];
}

const useMovieStore = create<MovieStore>((set) => ({
  favourtieMovieIdsArray: [],
  orderedMovies: [],
  toggleFavouriteMoviesId: (id) =>
    set((store) => ({
      // Check if the ID is already in the array
      favourtieMovieIdsArray: store.favourtieMovieIdsArray.includes(id)
        ? store.favourtieMovieIdsArray.filter((movieId) => movieId !== id)
        : [...store.favourtieMovieIdsArray, id],
    })),
  addToCart: (movie) =>
    set((store) => {
      // Find the existing movie indexß inside the array
      const existingMovieIndex = store.orderedMovies.findIndex(
        (movieItem) => movieItem.id === movie.id
      );
      if (existingMovieIndex !== -1) {
        // Movie already in the cart, increase quantity
        const updatedOrderedMovies = [...store.orderedMovies];
        updatedOrderedMovies[existingMovieIndex].quantity++;
        return { orderedMovies: updatedOrderedMovies };
      } else {
        // Movie not in the cart, add with quantity 1
        return {
          orderedMovies: [...store.orderedMovies, { ...movie, quantity: 1 }],
        };
      }
    }),
    removeFromCart: (id) => 
      set((store) => {
        // Find the existing movie indexß inside the array
        const existingMovieIndex = store.orderedMovies.findIndex(
          (movieItem) => movieItem.id === id
        );
        if (store.orderedMovies[existingMovieIndex].quantity > 1) {
          const updatedOrderedMovies = [...store.orderedMovies];
          updatedOrderedMovies[existingMovieIndex].quantity--;
          return { orderedMovies: updatedOrderedMovies };
        } else {
          const updatedOrderedMovies = store.orderedMovies.filter(movie => movie.id !== id);
          return {
            orderedMovies: updatedOrderedMovies,
          }
        }
    }),
}));

export default useMovieStore;
