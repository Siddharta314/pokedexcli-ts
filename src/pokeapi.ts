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

  async fetchLocation(locationName: string): Promise<Location> {
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
