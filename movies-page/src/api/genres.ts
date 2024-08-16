import axios from "axios";

export const fetchGenres = async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=1d1d8844ae1e746c459e7be85c15c840"
  );

  const {
    data: { genres },
  } = res;

  const genreMap: any = {};
  genres.forEach((genre: any) => {
    genreMap[genre.id] = genre.name;
  });
  return genreMap || {};
};
