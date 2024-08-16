import { Link, useParams } from "react-router-dom";
import useMovieDetail from "../../hooks/useMovieDetail";
import classes from "./Movies.module.css";
import useMovieStore from "../../store/store";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const MovieDetails = () => {
  const params = useParams<{ id?: string }>();
  const movieId = params.id ? parseInt(params.id) : undefined; // Safely parse id
  const { toggleFavouriteMoviesId, favourtieMovieIdsArray, addToCart } = useMovieStore();

  const { data: movie, error, isLoading } = useMovieDetail({ id: movieId });

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error: {error instanceof Error ? error.message : "An error occurred"}
      </div>
    );

  return (
    <>
      <Link to="..">Back to Movies</Link>
      <h1>The movie Details</h1>
      <div key={movie.id}>
        <li key={movie.id + Math.floor(Math.random() * 10000)}>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
          <div className={`${classes["movie-info"]} d-flex`}>
            <h4>{movie.title}</h4>
            <h4>{movie.release_date.slice(0, 4)}</h4>
            <h3
              className={`${classes.rating} ${
                movie.vote_average >= 7.5 ? classes.excellent : classes.good
              } ${movie.vote_average < 6 && classes.bad}`}
            >
              {movie.vote_average.toFixed(1)}
            </h3>
          </div>
        </li>
        <button
          onClick={() => toggleFavouriteMoviesId(movie.id)}
          className="btn"
          style={{ backgroundColor: "#cee5de" }}
        >
          {favourtieMovieIdsArray.includes(movie.id) ? <FaHeart /> : <FaRegHeart />}
        </button>
        <button
          onClick={() => addToCart({...movie, price: 4.99})}
          className="btn mx-3"
          style={{ backgroundColor: "#cee5de" }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default MovieDetails;
