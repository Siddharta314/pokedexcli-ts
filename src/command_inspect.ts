import { type Pokemon } from "./pokeapi.js";
import { type State } from "./state.js";

export async function commandInspect(
  state: State,
  ...args: string[]
): Promise<void> {
  try {
    if (args.length === 0) {
      throw new Error("Missing pokemon argument");
    }
    const pokemonName = args[0];
    if (state.pokedex[pokemonName]) {
      printPokemon(state.pokedex[pokemonName]);
    } else {
      console.log("you have not caught that pokemon");
    }
  } catch (error) {
    throw error;
  }
}

function printPokemon(pokemon: Pokemon) {
  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  for (const stat of pokemon.stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log("Types:");
  for (const type of pokemon.types) {
    console.log(`  -${type.type.name}`);
  }
}

// const pikachu: Pokemon = {
//   name: "pikachu",
//   height: 4,
//   weight: 60,
//   stats: [
//     {
//       base_stat: 35,
//       stat: {
//         name: "hp",
//         url: "https://pokeapi.co/api/v2/stat/1/",
//       },
//     },
//     {
//       base_stat: 55,
//       stat: {
//         name: "attack",
//         url: "https://pokeapi.co/api/v2/stat/2/",
//       },
//     },
//     {
//       base_stat: 40,
//       stat: {
//         name: "defense",
//         url: "https://pokeapi.co/api/v2/stat/3/",
//       },
//     },
//     {
//       base_stat: 50,
//       stat: {
//         name: "special-attack",
//         url: "https://pokeapi.co/api/v2/stat/4/",
//       },
//     },
//   ],
//   types: [
//     {
//       slot: 1,
//       type: {
//         name: "electric",
//         url: "https://pokeapi.co/api/v2/type/13/",
//       },
//     },
//     {
//       slot: 2,
//       type: {
//         name: "normal",
//         url: "https://pokeapi.co/api/v2/type/1/",
//       },
//     },
//   ],
//   abilities: [],
//   base_experience: 100,
// };
