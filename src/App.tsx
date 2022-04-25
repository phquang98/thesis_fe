import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import AppRoute from "./routes";
import { customTheme, GlobalStyles } from "./styles";
import AuthProvider from "./hooks/AuthProvider";

const App = (): JSX.Element => {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={customTheme}>
          <BrowserRouter>
            <GlobalStyles />
            <AppRoute />
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
