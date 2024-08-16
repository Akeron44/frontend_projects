import { useQuery } from "@tanstack/react-query";
import { Genre } from "../types";
import { fetchGenres } from "../api/genres";

const useGenres = () => {
  return useQuery<Genre>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000 //24h
  });
};

export default useGenres;
