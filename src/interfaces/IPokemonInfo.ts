export interface IPokemonInfo {
  base_experience: number;
  weight: number;
  height: number;
  sprites: {
    other: {
      dream_world: {
        // Pokemon image
        front_default: string;
      };
    };
  };
}
