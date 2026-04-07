import { Cache } from "./pokecache.js";
export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache = new Cache(1800000);

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;

    const cached = this.cache.get<ShallowLocations>(url);
    if (cached) {
      return cached;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = (await response.json()) as ShallowLocations;
      this.cache.add(url, data);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error(`Error fetching locations: ${(error as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<ResponseLocation> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cached = this.cache.get<ResponseLocation>(url);
    if (cached) {
      return cached;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data = (await response.json()) as ResponseLocation;
      this.cache.add(url, data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    const cached = this.cache.get<Pokemon>(url);
    if (cached) {
      return cached;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data = (await response.json()) as Pokemon;
      this.cache.add(url, data);
      return data;
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

export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  stats: Stats[];
  types: Type[];
  abilities: Ability[];
  base_experience: number;
}

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
