import styled from "styled-components";

import spinner from "../../assets/images/icon.png";




export const StyledPokedex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const StyledPokedexHeading = styled.h1`
  color: #fff;
  text-shadow: 1px 2px 0 #000;
  font-size: 2rem;
  margin: 0;
  text-align: center;
`

export const StyledPokedexHeader = styled.header`
  flex: none;
  padding: 1rem;
`;

export const StyledPokedexContent = styled.div`
  background-color: #9e1b1a;
  box-shadow: inset 0 0 15px rgb(0, 0, 0, .3);
  flex: auto;
  overflow-y: scroll;
  padding: 2rem;
`;

export const StyledPokedexFooter = styled.footer`
  align-items: center;
  display: flex;
  flex: none;
  justify-content: center;
  padding: 1rem;
`;


export const StyledPokedexButtton = styled.button`
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0 .5rem;

  :before {
    background: url(${spinner}) no-repeat center;
    background-size: 40px;
    position: relative;
    content: '';
    height: 50px;
    width: 50px;
    display: block;
  }

  :hover {
    background-color: #ccc;
  }
`