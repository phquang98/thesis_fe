import styled from "styled-components";

import InputField from ".";

export const StyledInputField = styled(InputField)`
  & {
    display: flex;
    line-height: 1.5rem;
    align-items: center;
    max-width: 8rem;

    /* .iptIcon {
      transform: translateX(0rem);
      width: 1rem;
      height: 1rem;
    } */

    .ipt {
      width: 100%;
    }
  }
`;
