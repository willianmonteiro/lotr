import { Card } from "../../../../components/card/card";
import { useMoviesList } from "../../services";
import { MovieItem } from "./movie-item";
import { Nav } from "../../../../components/header/nav";
import { Fallback } from "../../../../components/error/error-fallback";
import { SearchContainer } from "../../../../components/search/search-container";
import { TMovie } from "../../../../../app/domain";

export function MovieList() {
  return (
    <Fallback>
      <SearchContainer
        search={{
          service: useMoviesList,
          property: 'name',
        }} 
        itemDisplayMapper={(filtered: TMovie[]) => filtered.map(({ _id, name, ...movie }) => (
          <Card
            withCover
            key={_id} 
            title={name}
            actions={(
              <Nav dark links={[{ slug: `/movie/${_id}/details`, label: 'see details' }]} />
            )}
          >
            <MovieItem movie={movie} />
          </Card>
        ))}
      />
    </Fallback>
  )
}