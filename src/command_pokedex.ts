import { State } from "./state.js";
// import { type Location } from "./pokeapi.js";

export async function commandPokedex(
  state: State,
  ...args: string[]
): Promise<void> {
  console.log("Your Pokedex:");
  for (const pokemon of Object.values(state.pokedex)) {
    console.log(` - ${pokemon.name}`);
  }
}
