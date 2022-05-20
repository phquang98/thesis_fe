import { StyledCard } from "../../../components/common/Card/styles";
import { StyledLoginForm } from "../../../components/LoginForm/styles";

type MainPageProps = {
  className?: string;
};

const MainPage = (props: MainPageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        {/* <div className="loginForm">
          <StyledLoginForm />
        </div> */}
        <StyledCard styledHeight="10rem" styledWidth="10rem">
          <StyledLoginForm />
        </StyledCard>
      </div>
    </>
  );
};

export default MainPage;
