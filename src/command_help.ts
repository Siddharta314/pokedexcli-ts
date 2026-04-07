import { State } from "./state.js";

export async function commandHelp(state: State): Promise<void> {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  listCommands(state.commands);
}

function listCommands(
  commands: Record<string, { name: string; description: string }>,
): void {
  for (const command of Object.values(commands)) {
    console.log(`${command.name}: ${command.description}`);
  }
}
