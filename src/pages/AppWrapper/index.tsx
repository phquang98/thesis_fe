import { Outlet } from "react-router-dom";
import { StyledFooter } from "../../components/Footer/styles";
import { StyledHeader } from "../../components/Header/styles";

type AppWrapperProps = {
  className?: string;
};

const AppWrapper = (props: AppWrapperProps): JSX.Element => {
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

export default AppWrapper;
