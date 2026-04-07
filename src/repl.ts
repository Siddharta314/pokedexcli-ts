import { type State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .split(" ")
    .filter((w) => w.length > 0)
    .map((w) => w.toLowerCase());
}

export async function startREPL(state: State): Promise<void> {
  state.rl.prompt();
  state.rl.on("line", async (input: string) => {
    const cleanIn: string[] = cleanInput(input);
    if (cleanIn.length === 0) {
      state.rl.prompt();
      return;
    }
    const command = cleanIn[0];
    const handler = state.commands[command];
    const args = cleanIn.length > 1 ? cleanIn.slice(1) : [];
    try {
      if (handler) {
        await handler.callback(state, ...args);
      } else {
        console.log("Unknown command");
      }
    } catch (error) {
      console.error("Error executing command:", (error as Error).message);
    }
    state.rl.prompt();
  });
}
