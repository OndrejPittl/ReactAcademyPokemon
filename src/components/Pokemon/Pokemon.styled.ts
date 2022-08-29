import styled, { css, keyframes } from "styled-components";
import { IsLoadable } from "../../interfaces/ILoadable";
import spinner from "../../assets/images/icon.png";


const loadingAnimation = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
`;

export const StyledPokemon = styled.div<IsLoadable>`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, .25);
  display: flex;
  flex-direction: column;
  min-height: 250px;
  padding: 15px;
  position: relative;

  :before {
    animation: ${loadingAnimation} .5s infinite;
    background: url(${spinner}) no-repeat center;
    background-size: 50%;
    content: '';
    inset: 0;
    position: absolute;
    z-index: 1;
    display: ${({ isLoading }) => isLoading ? 'block' : 'none'}
  }

  :after {
    background-color: #dd2120;
    content: '';
    inset: 0;
    position: absolute;
    z-index: 0;
    display: ${({ isLoading }) => isLoading ? 'block' : 'none'}
  }
`;

export const PokemonName = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  margin: 5px 0;
`

export const PokemonImgWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: auto;
  justify-content: center;
  margin: 10px 0;
  height: 100px;
  max-width: 80%;
  position: relative;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`
