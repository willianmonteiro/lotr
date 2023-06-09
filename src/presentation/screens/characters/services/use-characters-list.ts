import { useQuery } from "react-query";
import { useDeps } from "../../use-deps";
import { TCharacter, TResponse } from "../../../../app/domain";

export function useCharactersList({ page, pageSize, searchQuery }: { page: number, pageSize: number, searchQuery: string }) {
  const { characterRepository } = useDeps();

  const result = useQuery<TResponse<TCharacter>, string>({
    queryKey: ['character-list', page, pageSize, searchQuery],
    queryFn: () => characterRepository.getAll({ page, pageSize, searchQuery }),
  })
  
  return result
}