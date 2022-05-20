import styled from "styled-components";

import ErrorNoti from ".";

export const StyledErrorNoti = styled(ErrorNoti)`
  & {
    height: 1.5rem;
    background-color: ${(props) => props.theme.light.auxiliary};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
