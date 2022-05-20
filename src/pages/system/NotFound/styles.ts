import styled from "styled-components";

import NotFoundPage from ".";

export const StyledNotFound = styled(NotFoundPage)`
  & {
    height: ${(props) => props.theme.defaultPageHeight};
    padding-top: ${(props) => props.theme.defaultPadTop};
  }
`;
