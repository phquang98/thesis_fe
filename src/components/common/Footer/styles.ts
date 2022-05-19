import styled from "styled-components";

import Footer from ".";

export const StyledFooter = styled(Footer)`
  & {
    padding: ${(props) => `0 ${props.theme.globalPadding}`};
    background-color: ${(props) => props.theme.light.primary};
    display: flex;
    justify-content: flex-end;
    column-gap: 10vw;

    .footerSection {
      padding: 2rem 0;
      min-height: 10rem;
      color: ${(props) => props.theme.light.text};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .footerTitle {
      padding-bottom: 1rem;
    }

    .footerLink {
      padding-bottom: 0.5rem;
    }

    .footerIcon {
      position: relative;
      top: 2px;
    }
  }
`;
