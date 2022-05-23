import styled from "styled-components";

import TransactionCard from ".";

export const StyledTransactionCard = styled(TransactionCard)`
  & {
    .cardUnit {
      display: flex;
      justify-content: space-around;

      p {
        font-size: 0.8rem;
        /* border: 1px solid black; */
        width: 12rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .cardSeparatorOne {
        padding: 0 0.5rem;
        border-left: 1px solid #00e0d9;
        border-right: 1px solid #00e0d9;
      }

      .cardSeparatorTwo {
        min-width: 6rem;
        width: 6rem;
        padding: 0 0.5rem;
        border-left: 1px solid #00e0d9;
        border-right: 1px solid #00e0d9;
      }
    }
  }
`;
