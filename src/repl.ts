import { createInterface } from "node:readline";
import process from "node:process";

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

export function startREPL(): void {
  rl.prompt();
  rl.on("line", (input: string) => {
    const cleanIn: string[] = cleanInput(input);
    if (cleanIn.length === 0) {
      rl.prompt();
      return;
    }
    console.log(`Your command was: ${cleanIn[0]}`);
    rl.prompt();
  });
}
