import { State } from "./state.js";
import { type ResponseLocation } from "./pokeapi.js";

export async function commandExplore(
  state: State,
  ...args: string[]
): Promise<void> {
  try {
    if (args.length === 0) {
      throw new Error("Missing location argument");
    }
    const location: ResponseLocation = await state.pokeApi.fetchLocation(
      args[0],
    );
    console.log(`Exploring ${args[0]}...`);
    console.log("Found Pokemon:");
    for (const enc of location.pokemon_encounters) {
      console.log(` - ${enc.pokemon.name}`);
    }
  } catch (error) {
    console.error("Error exploring:", error);
    throw error;
  }
}
