import styled from "styled-components";

import Anchor from ".";

export const StyledAnchor = styled(Anchor)`
  & {
    text-decoration: none;
    color: ${(props) => props.styledTextColor ?? props.theme.light.text};
    font-size: ${(props) => props.styledFontSize ?? props.theme.defaultFontSize};
  }

  &:hover {
    text-decoration: underline;
  }
`;
