import React, { useEffect, useRef, useState } from "react";
import { IFetchPokemonResponse } from "../../interfaces/IFetchPokemonResponse";
import { IPokemonBasic } from "../../interfaces/IPokemonBasic";
import { Api } from "../../layers/Api";
import { Grid } from "../Grid";
import { Pokemon } from "../Pokemon/Pokemon";
import {
  StyledPokedex,
  StyledPokedexButtton,
  StyledPokedexContent,
  StyledPokedexFooter,
  StyledPokedexHeader,
  StyledPokedexHeading,
} from "./Pokedex.styled";

export const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemonBasic[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [fetchedCount, setFetchedCount] = useState<number>(0);
  const [nextFetchUrl, setNextFetchUrl] = useState<string | null>(null);

  const listBottomElem = useRef<HTMLDivElement>(null);

  const api = new Api();

  useEffect(() => {
    fetchInitialPokemons();
  }, []);

  const fetchInitialPokemons = async () => {
    const response = await api.getAll();
    setTotalCount(response.count);
    setFetchedPokemons(response);
  };

  const fetchNextPokemons = async () => {
    executeScroll();
    const response = await api.getAll(fetchedCount);
    setFetchedPokemons(response);
  };

  const setFetchedPokemons = async (response: IFetchPokemonResponse) => {
    const { next, results, ...rest } = response;
    setNextFetchUrl(next);

    const data = [...pokemons, ...results];
    setPokemons(data);
    setFetchedCount(data.length);
  };

  const executeScroll = () => {
    listBottomElem !== null && listBottomElem.current?.scrollIntoView();
  };

  return (
    <StyledPokedex>
      <StyledPokedexHeader>
        <StyledPokedexHeading>
          Pokédex
          {totalCount && pokemons && (
            <span>
              &nbsp;({pokemons.length} / {totalCount})
            </span>
          )}
        </StyledPokedexHeading>
      </StyledPokedexHeader>
      <StyledPokedexContent>
        {pokemons && (
          <>
            <Grid>
              {pokemons.map(({ name, url }, idx) => {
                // console.log("idx", idx);
                // console.log(
                //   idx + 1 === pokemons.length ? scrollElement : undefined
                // );
                return (
                  <Pokemon
                    name={name}
                    url={url}
                    key={idx}
                    //ref={idx + 1 === pokemons.length ? scrollElement : null}
                  />
                );
              })}
            </Grid>
            <div ref={listBottomElem} />
          </>
        )}
      </StyledPokedexContent>
      <StyledPokedexFooter>
        <StyledPokedexButtton onClick={fetchNextPokemons}>
          + 20 pokémons
        </StyledPokedexButtton>
      </StyledPokedexFooter>
    </StyledPokedex>
  );
};
