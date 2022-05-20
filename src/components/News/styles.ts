import styled from "styled-components";

import News from ".";

export const StyledNews = styled(News)`
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
