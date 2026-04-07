export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    try {
      const response = await fetch(
        pageURL ?? `${PokeAPI.baseURL}/location-area/`,
      );
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async fetchLocation(locationName: string): Promise<ResponseLocation> {
    try {
      const response = await fetch(
        `${PokeAPI.baseURL}/location-area/${locationName}`,
      );
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: any;
  results: Location[];
};

export type Location = {
  name: string;
  url: string;
};

export interface ResponseLocation {
  name: string;
  pokemon_encounters: PokemonEncounter[];
}

export interface PokemonEncounter {
  pokemon: {
    name: string;
    url: string;
  };
}

type Pokemon = {
  name: string;
  height: number;
  weight: number;
  stats: Stats[];
  types: Type[];
  abilities: Ability[];
  base_experience: number;
};

export interface Stats {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
