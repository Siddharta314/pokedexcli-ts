import { State } from "./state.js";
import { type ShallowLocations } from "./pokeapi.js";

export async function commandMap(state: State): Promise<void> {
  let results: ShallowLocations;
  if (state.nextLocationsURL === "") {
    results = await state.pokeApi.fetchLocations();
    state.nextLocationsURL = results.next;
  } else {
    results = await state.pokeApi.fetchLocations(state.nextLocationsURL);
    state.nextLocationsURL = results.next;
  }
  for (const location of results.results) {
    console.log(location.name);
  }
}

export async function commandMapB(state: State): Promise<void> {
  let results: ShallowLocations;
  if (state.prevLocationsURL === "") {
    results = await state.pokeApi.fetchLocations();
    state.prevLocationsURL = results.previous;
  } else {
    results = await state.pokeApi.fetchLocations(state.prevLocationsURL);
    state.prevLocationsURL = results.previous;
  }
  for (const location of results.results) {
    console.log(location.name);
  }
}
