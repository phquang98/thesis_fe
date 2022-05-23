import { Route, Routes } from "react-router-dom";
import { StyledTransactionCard } from "../components/TransactionCard/styles";
import { StyledLayout } from "../layout/styles";
import { StyledStatementPage } from "../pages/features/StatementPage/styles";
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
          <Route path="register" element={<StyledRegisterPage />} />

          <Route path="transaction" element={<StyledTransactionPage />} />
          <Route path="statement" element={<StyledStatementPage />} />

          <Route path="*" element={<StyledNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoute;
