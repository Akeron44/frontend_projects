import { createBrowserRouter } from "react-router-dom";
import FavouriteList from "./components/Favourite/FavouriteList";
import MovieDetails from "./components/Movies/MovieDetails";
import MovieList from "./components/Movies/MovieList";
import Main from "./components/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <MovieList /> },
      {
        path: "movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "/favourites",
        element: <FavouriteList />,
      },
    ],
  },
]);

export default router;
