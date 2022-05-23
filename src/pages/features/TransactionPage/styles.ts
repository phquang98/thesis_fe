import styled from "styled-components";

import TransactionPage from ".";

export const StyledTransactionPage = styled(TransactionPage)`
  & {
    min-height: 16rem;
    padding: ${(props) => `${props.theme.defaultPadTop} ${props.theme.globalPadding} 0`};
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .transactionFormCard {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
