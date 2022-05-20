import { Route, Routes } from "react-router-dom";
import { StyledLayout } from "../layout/styles";
import { StyledMainPage } from "../pages/system/Main/styles";
import { StyledNotFound } from "../pages/system/NotFound/styles";

const AppRoute = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StyledLayout />}>
          <Route index element={<StyledMainPage />} />
          <Route path="*" element={<StyledNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoute;
