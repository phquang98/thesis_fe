import styled from "styled-components";

import Header from ".";

export const StyledHeader = styled(Header)`
  & {
    min-height: 12vh;
    padding: ${(props) => `1rem ${props.theme.globalPadding}`};
    background-color: ${(props) => props.theme.light.primary};
    display: flex;
    justify-content: space-between;

    .navSection {
      display: flex;
      align-items: center;

      a {
        padding: 0 1.5rem;
      }

      .logoutBtn {
        width: 6rem;
        border: none;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
        background-color: ${(props) => props.theme.light.auxiliary};
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        * {
          transition: ${(props) => `all ${props.theme.globalTransition}`};
        }

        .logoutText {
          flex: 3;
        }

        .logoutIcon {
          flex: 1;
          display: flex;
          border-left: 1px solid #00e0d9;
          align-items: center;
          justify-content: center;
        }

        &:hover {
          .logoutText {
            color: transparent;
          }

          .logoutIcon {
            border-left: none;
            transform: translateX(-2rem);
          }
        }
      }
    }
  }
`;
