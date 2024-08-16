import axios from "axios";

export const fetchMovies = async (pageParam: number) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageParam}&api_key=1d1d8844ae1e746c459e7be85c15c840`
  );

  const movies = res.data.results;

  return movies;
};
