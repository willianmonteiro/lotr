import { TCharacter } from "../../../../../app/domain";
import { CardInfo } from "../../../../components/card/card-info";


const infoMapper: { [key: string]: TCharacterInfoItem } = {
  height: {
    title: 'Height',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/fit-vertical.png',
  },
  race: {
    title: 'Race',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/skull.png',
  },
  gender: {
    title: 'Gender',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/toilet.png',
  },
  birth: {
    title: 'Birth',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/birthday.png',
  },
  spouse: {
    title: 'Spouse',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/wedding-rings.png',
  },
  death: {
    title: 'Death',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/headstone.png',
  },
  realm: {
    title: 'Realm',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/fairytale.png',
  },
  hair: {
    title: 'Hair',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/afro-pick.png',
  },
  name: {
    title: 'Name',
    iconSrc: 'https://img.icons8.com/pulsar-color/50/000000/user-male.png',
  },
};

export function CharacterItem({ character }: TCharacterItemProps) {
  return (
    <>
      {Object.entries(character).map(([key, value]) => (
        !(key in infoMapper) ? null : (
          <MovieInfo 
            key={key}
            info={infoMapper[key]}  
            value={value && value !== 'NaN' ? value : '--'}
          />
        )
      ))}
    </>
  )
}
type TCharacterItemProps = { character: Partial<TCharacter> };


function MovieInfo({ info, value }: { info: TCharacterInfoItem, value: string }) {
  const { title, iconSrc: src } = info;

  return (
    <CardInfo 
      label={title}
      value={value} 
      icon={{ src, alt: title }}
    />
  )
}
type TCharacterInfoItem = {
  title: string
  iconSrc: string
}

