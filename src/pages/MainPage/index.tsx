import { Outlet } from "react-router-dom";
import { StyledFooter } from "../../components/Footer/styles";
import { StyledHeader } from "../../components/Header/styles";
import { StyledLoginForm } from "../../components/LoginForm/styles";

type MainPageProps = {
  className?: string;
};

const MainPage = (props: MainPageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <p>This is a Main Page</p>
        <StyledLoginForm />
      </div>
    </>
  );
};

export default MainPage;
