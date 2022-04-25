import { Route, Routes } from "react-router-dom";
import { StyledAppWrapper } from "../pages/AppWrapper/styles";
import AuthRequired from "../pages/AuthRequired";
import FailedAuth from "../pages/AuthRequired";
import { StyledLoginPage } from "../pages/LoginPage/styles";

import { StyledMainPage } from "../pages/MainPage/styles";
import { StyledRegisterPage } from "../pages/RegisterPage/styles";
import { StyledUserHomePage } from "../pages/UserHomePage/styles";
import { StyledUserProfilePage } from "../pages/UserProfilePage/styles";
import { StyledUserStatementPage } from "../pages/UserStatementPage/styles";
import { StyledUserTransactionPage } from "../pages/UserTransactionPage/styles";

const AppRoute = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StyledAppWrapper />}>
          <Route index element={<StyledMainPage />} />
          <Route path="login" element={<StyledLoginPage />} />
          <Route path="register" element={<StyledRegisterPage />} />
          {/* <Route path=":userId"> */}
          <Route
            path="home"
            element={
              <AuthRequired>
                <StyledUserHomePage />
              </AuthRequired>
            }
          />
          <Route
            path="profile"
            element={
              <AuthRequired>
                <StyledUserProfilePage />
              </AuthRequired>
            }
          />
          <Route
            path="transaction"
            element={
              <AuthRequired>
                <StyledUserTransactionPage />
              </AuthRequired>
            }
          />
          <Route
            path="statement"
            element={
              <AuthRequired>
                <StyledUserStatementPage />
              </AuthRequired>
            }
          />
          {/* </Route> */}
        </Route>
      </Routes>
    </>
  );
};

export default AppRoute;
