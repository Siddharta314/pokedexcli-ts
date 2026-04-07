import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./commands.js";

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
};
export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export function initState(): State {
  return {
    rl: createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "Pokedex > ",
    }),
    commands: getCommands(),
  };
}
