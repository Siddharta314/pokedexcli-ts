import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapB } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Show 20 location areas in Pokemon World",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Show 20 previous location areas in Pokemon World",
      callback: commandMapB,
    },
    explore: {
      name: "explore",
      description: "Show a list of pokemons found in the location area",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description:
        "Try to catch a pokemon, chances based on the base experience of the pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect a pokemon you have caught",
      callback: commandInspect,
    },
  };
}
