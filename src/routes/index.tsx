import { Route, Routes } from "react-router-dom";
import { StyledAppWrapper } from "../pages/AppWrapper/styles";

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
          <Route path="register" element={<StyledRegisterPage />} />
          {/* <Route path=":userId"> */}
          <Route path="home" element={<StyledUserHomePage />} />
          <Route path="profile" element={<StyledUserProfilePage />} />
          <Route path="transaction" element={<StyledUserTransactionPage />} />
          <Route path="statement" element={<StyledUserStatementPage />} />

          {/* </Route> */}
        </Route>
      </Routes>
    </>
  );
};

export default AppRoute;
