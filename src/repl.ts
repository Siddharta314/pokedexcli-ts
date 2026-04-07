import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .split(" ")
    .filter((w) => w.length > 0)
    .map((w) => w.toLowerCase());
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > ",
});

const commands = getCommands();

export function startREPL(): void {
  rl.prompt();
  rl.on("line", (input: string) => {
    const cleanIn: string[] = cleanInput(input);
    if (cleanIn.length === 0) {
      rl.prompt();
      return;
    }
    const command = cleanIn[0];
    const handler = commands[command];
    try {
      if (handler) {
        handler.callback(commands);
      } else {
        console.log("Unknown command");
      }
    } catch (error) {
      console.error("Error executing command:", error);
    }
    rl.prompt();
  });
}
