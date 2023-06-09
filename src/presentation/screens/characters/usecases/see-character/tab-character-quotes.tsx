import { useParams } from "react-router";
import { Fallback } from "../../../../components/error/error-fallback";
import { QuoteList } from "../../../quotes/usecases/list-quotes/quotes-list";
import { useCharacter } from "../../services";
import { Loading } from "../../../../components/loading/loading";
import { TCharacter } from "../../../../../app/domain";

export function TabCharacterQuotes() {
  const { characterId = '' } = useParams();
  const { data, isLoading } = useCharacter(characterId);
  if (isLoading) return <Loading />
  const character = data?.docs?.[0] as TCharacter;

  return (
    <Fallback>
      <QuoteList 
        by={character.name}
        filterBy={{ property: 'character', value: characterId }} 
      />
    </Fallback>
  )
}