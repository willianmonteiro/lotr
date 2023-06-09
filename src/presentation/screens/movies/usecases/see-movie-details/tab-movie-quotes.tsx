import { Fallback } from "../../../../components/error/error-fallback";
import { Card } from "../../../../components/card/card";
import { QuoteList } from "../../../quotes/usecases/list-quotes/quotes-list";
import { useParams } from "react-router";
import { useMovie } from "../../services";
import { Loading } from "../../../../components/loading/loading";
import { TMovie } from "../../../../../app/domain";

export function TabMovieQuotes() {
  const { movieId = '' } = useParams();
  const { data, isLoading } = useMovie(movieId);
  if (isLoading) return <Loading />
  const movie = data?.docs?.[0] as TMovie;

  return (
    <Fallback>
      <Card title={movie.name}>
        <QuoteList filterBy={{ property: 'movie', value: movieId }} />
      </Card>
    </Fallback>
  )
}