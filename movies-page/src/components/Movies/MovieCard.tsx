import { useNavigate } from "react-router-dom";
import { Movie } from "../../types";
import classes from "./Movies.module.css";
import useMovieStore from "../../store/store";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface Props {
  movies?: Movie[];
}

function MovieCard({ movies }: Props) {
  const { toggleFavouriteMoviesId, favourtieMovieIdsArray, addToCart } = useMovieStore();
  const navigate = useNavigate();

  return (
    <div className={`d-flex ${classes["movies-container"]}`}>
      <ul className={`${classes.ul} d-grid`}>
        {movies?.map((movie) => (
          <div key={movie.id}>
            <li
              onClick={() => navigate(`/movie/${movie.id}`)}
              key={movie.id + Math.floor(Math.random() * 10000)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              />
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
              onClick={() => addToCart({...movie, price: movie.vote_average < 7 ? 4.99 : 7.99})}
              className="btn mx-3"
              style={{ backgroundColor: "#cee5de" }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default MovieCard;
