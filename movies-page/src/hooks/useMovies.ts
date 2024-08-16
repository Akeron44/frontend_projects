import { useInfiniteQuery } from "@tanstack/react-query";
import { Movie } from "../types";
import { fetchMovies } from "../api/movies";

const useMovies = () => {
  return useInfiniteQuery<Movie[], Error>({
    queryKey: ["movies"],
    queryFn: ({pageParam = 1}) => fetchMovies(pageParam),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default useMovies;
