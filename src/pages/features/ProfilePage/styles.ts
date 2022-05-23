import styled from "styled-components";

import ProfilePage from ".";

export const StyledProfilePage = styled(ProfilePage)`
  & {
    min-height: 16rem;
    padding: ${(props) => `${props.theme.defaultPadTop} ${props.theme.globalPadding} 0`};
    margin-bottom: 2rem;
  }
`;
