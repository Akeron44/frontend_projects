import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetail } from "../api/movieDetail";

interface MovieDetailQuery {
  id?: number;
}

const useMovieDetail = (query: MovieDetailQuery) => {

  return useQuery({
    queryKey: ["movie", query.id], 
    queryFn: async () => {
      if (query.id === undefined) {
        throw new Error("Movie ID is required");
      }
      return await fetchMovieDetail(query.id); 
    },
    enabled: !!query.id, // Only run if query.id is defined
  });
};

export default useMovieDetail;
