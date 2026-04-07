import { type State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .split(" ")
    .filter((w) => w.length > 0)
    .map((w) => w.toLowerCase());
}

export function startREPL(state: State): void {
  state.rl.prompt();
  state.rl.on("line", (input: string) => {
    const cleanIn: string[] = cleanInput(input);
    if (cleanIn.length === 0) {
      state.rl.prompt();
      return;
    }
    const command = cleanIn[0];
    const handler = state.commands[command];
    try {
      if (handler) {
        handler.callback(state);
      } else {
        console.log("Unknown command");
      }
    } catch (error) {
      console.error("Error executing command:", error);
    }
    state.rl.prompt();
  });
}
