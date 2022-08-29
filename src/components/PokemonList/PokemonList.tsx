import React, { useEffect, useState } from "react";
import { IFetchPokemonResponse } from "../../interfaces/IFetchPokemonResponse";
import { IPokemonBasic } from "../../interfaces/IPokemonBasic";
import { Api } from "../../layers/Api";
import { Grid } from "../Grid";
import { Pokemon } from "../Pokemon/Pokemon";

export const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemonBasic[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [nextFetchUrl, setNextFetchUrl] = useState<string | null>(null);

  const api = new Api();

  useEffect(() => {
    fetchInitialPokemons();
  }, []);

  const fetchInitialPokemons = async () => {
    const data = await api.getAll();
    setTotalCount(data.count);
    setFetchedPokemons(data);
  };

  const fetchPokemons = async () => {
    const data = await api.getAll();
    console.log(data);
  };

  const setFetchedPokemons = async (data: IFetchPokemonResponse) => {
    const { next, results, ...rest } = data;
    setNextFetchUrl(next);
    setPokemons(results);

    console.log("--> fetched:");
    console.log("next", next);
    console.log("results", results);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Pokédex&nbsp;
        {totalCount && pokemons && (
          <span>
            ({pokemons.length} / {totalCount})
          </span>
        )}
      </h1>
      {pokemons && (
        <Grid>
          {pokemons.map(({ name, url }, idx) => (
            <Pokemon name={name} url={url} key={idx} />
          ))}
        </Grid>
      )}
    </>
  );
};
