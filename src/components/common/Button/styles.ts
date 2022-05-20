import styled from "styled-components";

import Button from ".";

export const StyledButton = styled(Button)`
  & {
    width: ${(props) => `${props.styledWidth}rem`};
    height: 2rem;
    border: none;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
    color: ${(props) => (props.isImportant ? props.theme.light.text : "black")};
    background-color: ${(props) => (props.isImportant ? props.theme.light.primary : props.theme.light.auxiliary)};
    cursor: pointer;
    display: flex;
    justify-content: center;

    * {
      transition: ${(props) => `all ${props.theme.globalTransition}`};
    }

    .btnText {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btnIcon {
      flex: 1;
      display: flex;
      border-left: 1px solid #00e0d9;
      align-items: center;
      justify-content: center;
    }

    :hover {
      .btnText {
        color: transparent;
      }

      .btnIcon {
        border-left: none;
        transform: translateX(${(props) => `-${props.styledWidth / 2 - 1}rem`});
      }
    }
  }
`;
