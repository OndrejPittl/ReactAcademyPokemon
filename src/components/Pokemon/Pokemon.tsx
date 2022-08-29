import React, { useEffect, useState } from "react";
import { IPokemonBasic } from "../../interfaces/IPokemonBasic";
import { IPokemonInfo } from "../../interfaces/IPokemonInfo";
import { Api } from "../../layers/Api";
import {
  InfoList,
  InfoListHeading,
  InfoListRow,
  InfoListValue,
} from "../InfoList";
import {
  PokemonImgWrapper,
  PokemonName,
  StyledPokemon,
} from "./Pokemon.styled";

export const Pokemon: React.FC<IPokemonBasic> = ({ name, url }) => {
  const [data, setData] = useState<IPokemonInfo | null>(null);
  const api = new Api();

  const fetchData = async () => {
    const data = await api.getOne(name);
    setData(data);
  };

  useEffect(() => {
    setTimeout(fetchData, 300);
  }, []);

  useEffect(() => {
    if (data) {
      // console.log(data.sprites.other.dream_world);
    }
  }, [data]);

  return (
    <StyledPokemon isLoading={!data}>
      <PokemonName>{name}</PokemonName>
      {data && (
        <>
          <PokemonImgWrapper>
            <img
              src={data.sprites.other.dream_world.front_default}
              alt={name}
            />
          </PokemonImgWrapper>
          <InfoList>
            <InfoListRow>
              <InfoListHeading>Experience</InfoListHeading>
              <InfoListValue>{data.base_experience}</InfoListValue>
            </InfoListRow>
            <InfoListRow>
              <InfoListHeading>Weight</InfoListHeading>
              <InfoListValue>{data.weight}</InfoListValue>
            </InfoListRow>
            <InfoListRow>
              <InfoListHeading>Height</InfoListHeading>
              <InfoListValue>{data.height}</InfoListValue>
            </InfoListRow>
          </InfoList>
        </>
      )}
    </StyledPokemon>
  );
};
