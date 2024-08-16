import axios from "axios";

export const fetchMovieDetail = async (id?: number) => {
  if (!id) throw new Error("ID is required"); // Ensure ID is provided

  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1d1d8844ae1e746c459e7be85c15c840`
  );

  return res.data; // Directly return the fetched data
};
