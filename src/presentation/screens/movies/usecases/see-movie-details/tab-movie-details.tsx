import { useParams } from "react-router";
import { TMovie } from "../../../../../app/domain";
import { Card } from "../../../../components/card/card";
import { Fallback } from "../../../../components/error/error-fallback";
import { Loading } from "../../../../components/loading/loading";
import { useMovie } from "../../services";
import { MovieItem } from "../list-movies/movie-item";

export function TabMovieDetails() {
  const { movieId = '' } = useParams();
  const { data, isLoading } = useMovie(movieId);
  if (isLoading) return <Loading />
  const movie = data?.docs?.[0] as TMovie;

  return (
    <Fallback>
      <Card 
        title={movie.name} 
        testId='movie-details'
      >
        <MovieItem movie={movie}/>
      </Card>
    </Fallback>
  )
}