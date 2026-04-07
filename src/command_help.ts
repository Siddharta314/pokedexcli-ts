export function commandHelp(
  commands: Record<string, { name: string; description: string }>,
): void {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  listCommands(commands);
}

function listCommands(
  commands: Record<string, { name: string; description: string }>,
): void {
  for (const command of Object.values(commands)) {
    console.log(`${command.name}: ${command.description}`);
  }
}
