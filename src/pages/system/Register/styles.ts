import styled from "styled-components";

import RegisterPage from ".";

export const StyledRegisterPage = styled(RegisterPage)`
  & {
    min-height: 20rem;
    padding: ${(props) => `${props.theme.defaultPadTop} ${props.theme.globalPadding} 0`};
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .registerCard {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
