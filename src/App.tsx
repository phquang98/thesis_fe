import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import AppRoute from "./routes";
import { customTheme, GlobalStyles } from "./styles";

const App = (): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <GlobalStyles />
          <AppRoute />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
