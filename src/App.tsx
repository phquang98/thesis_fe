import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import AuthProvider from "./hooks/AuthProvider";
import AppRoute from "./routes";
import { customTheme, GlobalStyles } from "./styles";

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
