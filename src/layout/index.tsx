import { Outlet } from "react-router-dom";
import { StyledFooter } from "../components/common/Footer/styles";
import { StyledHeader } from "../components/common/Header/styles";

type LayoutProps = {
  className?: string;
};

const Layout = (props: LayoutProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <StyledHeader />
        <Outlet />
        <StyledFooter />
      </div>
    </>
  );
};

export default Layout;
