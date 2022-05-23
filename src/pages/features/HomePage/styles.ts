import styled from "styled-components";

import HomePage from ".";

export const StyledHomePage = styled(HomePage)`
  & {
    min-height: 16rem;
    padding: ${(props) => `${props.theme.defaultPadTop} ${props.theme.globalPadding} 0`};
    margin-bottom: 4rem;

    display: flex;
    justify-content: space-between;

    .bankData {
      padding: 1rem 1rem 0;

      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .bankDataTitle {
        padding-bottom: 1rem;
      }

      .bankDataBalance {
        padding-bottom: 0.5rem;
      }
    }
  }
`;
