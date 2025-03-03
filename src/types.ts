type TSpecies =
  | 'Human'
  | 'Alien'
  | 'Humanoid'
  | 'Poopybutthole'
  | 'Mythological Creature'
  | 'Animal'
  | 'Robot'
  | 'Cronenberg'
  | 'Disease';

export type ICharacter = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: TSpecies;
  type: string;
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type ILocation = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type IEpisode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type TData = ICharacter | ILocation | IEpisode;

export type TCharacterCardProps = {
  character: ICharacter;
  ref?: React.Ref<HTMLDivElement | null>;
};
export type TCharactersProps = { characters: ICharacter[] };

export type TLocationCardProps = {
  location: ILocation;
  ref?: React.Ref<HTMLDivElement | null>;
};
export type TLocationsProps = { locations: ILocation[] };

export type TEpisodeCardProps = {
  episode: IEpisode;
  ref?: React.Ref<HTMLDivElement | null>;
};
export type TEpisodesProps = { episodes: IEpisode[] };

export interface IResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: TData[];
}
