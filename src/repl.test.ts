import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  WORLD  ",
    expected: ["hello", "world"],
  },
  {
    input: "pokedex api   PIKACHU",
    expected: ["pokedex", "api", "pikachu"],
  },
  {
    input: "",
    expected: [],
  },
  {
    input: "    ",
    expected: [],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    expect(cleanInput(input)).toEqual(expected);
  });
});
