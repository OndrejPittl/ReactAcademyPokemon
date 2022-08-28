import React from "react";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import { PokemonList } from "./components/PokemonList";

function App() {
  return (
    <>
      <GlobalStyles />
      <PokemonList />
    </>
  );
}

export default App;
