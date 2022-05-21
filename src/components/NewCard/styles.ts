import styled from "styled-components";

import NewCard from ".";

export const StyledNewCard = styled(NewCard)`
  & {
    display: flex;
    flex-direction: column;

    .newImg {
      flex: 2;
      background-image: url(${(props) => props.bgURL});
      background-size: contain;
      background-repeat: no-repeat;
    }

    .newTitle {
      padding-left: 0.5rem;
      font-weight: bold;
      font-size: 0.75rem;
      flex: 1;
    }

    .newInfo {
      padding-left: 0.5rem;
      font-size: 0.6rem;
      flex: 1;
    }
  }
`;
