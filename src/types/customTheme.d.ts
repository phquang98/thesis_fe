import "styled-components";

import { customTheme } from "../styles";

declare module "styled-components" {
  type TCustomTheme = typeof customTheme;

  // should have just been export interface DefaultTheme extends TCustomTheme {} but will get warning
  export interface DefaultTheme extends TCustomTheme {
    uselessProp?: string;
  }
}

// https://blog.agney.dev/styled-components-&-typescript/
