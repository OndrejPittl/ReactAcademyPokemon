import { IPokemonBasic } from "./IPokemonBasic";

export interface IFetchPokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: IPokemonBasic[];
}
