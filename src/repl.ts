export function cleanInput(input: string): string[] {
  return input
    .trim()
    .split(" ")
    .filter((w) => w.length > 0)
    .map((w) => w.toLowerCase());
}
