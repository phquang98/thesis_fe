import styled from "styled-components";

import Header from ".";

export const StyledHeader = styled(Header)`
  & {
    min-height: 12vh;
    padding: ${(props) => `0.75rem ${props.theme.globalPadding} 0`};
    background-color: ${(props) => props.theme.light.primary};
    display: flex;
    justify-content: space-between;
  }

  & .footerSection {
    color: white;
  }
`;
