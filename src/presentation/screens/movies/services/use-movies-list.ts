import { useQuery } from "react-query";
import { useDeps } from "../../use-deps";
import { TMovie, TRequestSharedParams, TResponse } from "../../../../app/domain";

export function useMoviesList({ page, pageSize, searchQuery }: TRequestSharedParams) {
  const { movieRepository } = useDeps();

  const result = useQuery<TResponse<TMovie>, string>({
    queryKey: ['movie-list', page, pageSize, searchQuery],
    queryFn: () => movieRepository.getAll({ page, pageSize, searchQuery }),
  })
  
  return result
}