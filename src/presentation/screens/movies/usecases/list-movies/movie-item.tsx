import { TMovie } from "../../../../../app/domain";
import { CardInfo } from "../../../../components/card/card-info";

const infoMapper: {[key: string]: TMovieInfoItem} = {
  runtimeInMinutes: {
    title: 'Runtime',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/clapperboard.png',
    suffix: 'minutes',
  },
  budgetInMillions: {
    title: 'Budget',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/money-box.png',
    suffix: 'million',
  },
  boxOfficeRevenueInMillions: {
    title: 'Box Office Revenue',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/sales-performance.png',
    suffix: 'million',
  },
  
  academyAwardNominations: {
    title: 'Academy Award Nominations',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/red-carpet.png',
    suffix: '',
  },
  
  academyAwardWins: {
    title: 'Academy Award Wins',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/trophy.png',
    suffix: '',
  },
  
  rottenTomatoesScore: {
    title: 'Rotten Tomatoes Score',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/tomato.png',
    suffix: '%',
    formatter: (value: number) => Number(value.toFixed(2)),
  },
}


export function MovieItem({ movie }: TMovieItemProps) {
  return (
    <>
      {Object.entries(movie).map(([key, value]) => (
        !(key in infoMapper) ? null : (
          <MovieInfo 
            info={infoMapper[key]}  
            value={Number(value)}
          />
        )
      ))}
    </>
  )
}
type TMovieItemProps = { movie: Partial<TMovie> };


function MovieInfo({ info, value }: { info: TMovieInfoItem, value: number }) {
  const { title, suffix = '', formatter, iconSrc: src } = info;

  return (
    <CardInfo 
      label={title}
      value={`${formatter ? formatter(value) : value} ${suffix}`} 
      icon={{ src, alt: title }}
    />
  )
}
type TMovieInfoItem = {
  title: string
  iconSrc: string
  suffix: string
  formatter?: (value: number) => number
}

