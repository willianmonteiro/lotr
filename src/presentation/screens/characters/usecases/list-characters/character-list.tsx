import { TCharacter } from "../../../../../app/domain";
import { Card } from "../../../../components/card/card";
import { Nav } from "../../../../components/header/nav";
import { useCharactersList } from "../../services/use-characters-list";
import { CharacterItem } from "./character-item";
import { SearchContainer } from '../../../../components/search/search-container';
import { Fallback } from "../../../../components/error/error-fallback";

export function CharacterList() {
  return (
    <Fallback>
      <SearchContainer 
         search={{
          service: useCharactersList,
          property: 'name'
         }} 
         itemDisplayMapper={(filtered: TCharacter[]) => filtered.map(({ _id, name, ...character }: TCharacter) => (
           <Card
             key={_id}
             title={name}
             actions={(
               <Nav
                 dark
                 links={[{ slug: `/character/${_id}/details`, label: 'see details' }]}
               />
             )}
           >
             <CharacterItem character={character} />
           </Card>
         ))}
      />
    </Fallback>
  )
}
