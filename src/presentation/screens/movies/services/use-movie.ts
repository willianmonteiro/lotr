import { useQuery } from "react-query";
import { useDeps } from "../../use-deps";

export function useMovie(movieId: string) {
  const { movieRepository } = useDeps();

  return useQuery({
    queryKey: ['movie-item', movieId],
    queryFn: () => movieRepository.get({ movieId }),
  });
}