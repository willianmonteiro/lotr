import { useParams } from "react-router";
import { TCharacter } from "../../../../../app/domain";
import { Card } from "../../../../components/card/card";
import { Fallback } from "../../../../components/error/error-fallback";
import { Loading } from "../../../../components/loading/loading";
import { useCharacter } from "../../services";
import { CharacterItem } from "../list-characters/character-item";

export function TabCharacterDetails() {
  const { characterId = '' } = useParams();
  const { data, isLoading } = useCharacter(characterId);
  if (isLoading) return <Loading />
  const character = data?.docs?.[0] as TCharacter;

  console.log('character', character);

  return (
    <Fallback>
      <Card 
        title={character.name}
        testId="character-details"
      >
        <CharacterItem character={character}/>
      </Card>
    </Fallback>
  )
}