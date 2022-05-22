import styled from "styled-components";

import RegisterPage from ".";

export const StyledRegisterPage = styled(RegisterPage)`
  & {
    padding: ${(props) => `${props.theme.defaultPadTop} ${props.theme.globalPadding} 0`};
    margin-bottom: 2rem;

    display: flex;
    justify-content: center;

    .registerCard {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
