import styled from "styled-components";
import { BREAKPOINTS } from "../GlobalStyles"


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 20px;

  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: ${BREAKPOINTS.MD}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media screen and (min-width: ${BREAKPOINTS.LG}) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;