import { MutableRefObject } from "react";

export interface IPokemonBasic {
  name: string;
  url: string;
}

// export interface IPokemonBasicWithRef extends IPokemonBasic {
//   ref: MutableRefObject<HTMLElement | null>;
// }