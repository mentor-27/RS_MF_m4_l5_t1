export type TCharacter = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: 'Human' | 'Alien';
  type: string;
  gender: 'Male' | 'Female' | 'unknown';
  image: string;
  created: string;
};

export type TCharacterCardProps = { character: TCharacter };
export type TCharactersProps = { characters: TCharacter[] };

export type TLocation = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
};

export type TLocationCardProps = { location: TLocation };
export type TLocationsProps = { locations: TLocation[] };

export type TEpisode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
};

export type TEpisodeCardProps = { episode: TEpisode };
export type TEpisodesProps = { episodes: TEpisode[] };
