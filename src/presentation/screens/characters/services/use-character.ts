import { useQuery } from "react-query";
import { useDeps } from "../../use-deps";

export function useCharacter(characterId: string) {
  const { characterRepository } = useDeps();

  return useQuery({
    queryKey: ['character-item', characterId],
    queryFn: () => characterRepository.get({ characterId }),
  });
}