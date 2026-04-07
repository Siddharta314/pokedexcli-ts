import { State } from "./state.js";
import { type Pokemon } from "./pokeapi.js";

export async function commandCatch(
  state: State,
  ...args: string[]
): Promise<void> {
  try {
    if (args.length === 0) {
      throw new Error("Missing pokemon argument");
    }
    const pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
    const pokemon: Pokemon = await state.pokeApi.fetchPokemon(pokemonName);
    // const chances = Math.random();
    // const treshold = 1 - pokemon.base_experience / 800;
    // if (chances < treshold) {
    //   console.log(`${pokemon.name} was caught!`);
    // } else {
    //   console.log(`${pokemon.name} escaped!`);
    // }
    const res = Math.floor(Math.random() * pokemon.base_experience);
    if (res > 40) {
      console.log(`${pokemon.name} escaped!`);
    } else {
      console.log(`${pokemon.name} was caught!`);
      state.pokedex[pokemon.name] = pokemon;
    }
  } catch (error) {
    throw error;
  }
}
