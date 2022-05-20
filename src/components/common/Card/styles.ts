import styled from "styled-components";

import Card from ".";

export const StyledCard = styled(Card)`
  & {
    height: ${(props) => props.styledHeight ?? "10rem"};
    width: ${(props) => props.styledWidth ?? "10rem"};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: ${(props) => props.theme.light.auxiliary};
  }
`;
