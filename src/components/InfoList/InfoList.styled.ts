import styled from "styled-components";

export const InfoList = styled.article`

`;
export const InfoListRow = styled.p`
  margin: 0;
  padding: 0;

  & + & {
    margin-top: 3px;
  }
`;

export const InfoListHeading = styled.strong`
  :after {
    content: ': ';
  }
`;
export const InfoListValue = styled.span``;
