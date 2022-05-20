import { Outlet } from "react-router-dom";
import { StyledErrorNoti } from "../components/common/ErrorNoti/styles";
import { StyledFooter } from "../components/common/Footer/styles";
import { StyledHeader } from "../components/common/Header/styles";
import { TServerError } from "../types/system";

type LayoutProps = {
  className?: string;
};

const Layout = (props: LayoutProps): JSX.Element => {
  const { className } = props;

  // handles error logic here
  const errFoo: TServerError = {
    message: "Server offline!",
    affectedResource: "Nothing",
    statusCode: 200
  };

  return (
    <>
      <div className={className}>
        <StyledHeader />
        <StyledErrorNoti errorData={errFoo} />
        <Outlet />
        <StyledFooter />
      </div>
    </>
  );
};

export default Layout;
