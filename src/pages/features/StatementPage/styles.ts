import styled from "styled-components";

import StatementPage from ".";

export const StyledStatementPage = styled(StatementPage)`
  & {
    min-height: 16rem;
    padding: ${(props) => `${props.theme.defaultPadTop} ${props.theme.globalPadding} 0`};
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .pageTitle {
      padding-bottom: ${(props) => props.theme.defaultPadTop};
    }

    .statementRenderClt {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .rowName {
        padding-bottom: ${(props) => props.theme.defaultPadTop};
      }
    }
  }
`;
