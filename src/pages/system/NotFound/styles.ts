import styled from "styled-components";

import NotFoundPage from ".";

export const StyledNotFound = styled(NotFoundPage)`
  & {
    height: ${(props) => props.theme.defaultPageHeight};
    padding: ${(props) => `${props.theme.defaultPadTop} ${props.theme.globalPadding} 0`};
  }
`;
