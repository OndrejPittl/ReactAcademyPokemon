import React from "react";
import { IPokemonBasic } from "../../interfaces/IPokemonBasic";

export const Pokemon: React.FC<IPokemonBasic> = ({ name, url }) => {
  return <p>{name}</p>;
};
