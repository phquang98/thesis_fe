import { Route, Routes } from "react-router-dom";
import { StyledLayout } from "../layout/styles";
import { StyledTransactionPage } from "../pages/features/TransactionPage/styles";
import { StyledMainPage } from "../pages/system/Main/styles";
import { StyledNotFound } from "../pages/system/NotFound/styles";
import { StyledRegisterPage } from "../pages/system/Register/styles";

const AppRoute = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StyledLayout />}>
          <Route index element={<StyledMainPage />} />
          {/* <Route path="register" element={<StyledRegisterPage />} /> */}
          <Route path="register" element={<StyledTransactionPage />} />
          <Route path="*" element={<StyledNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoute;
