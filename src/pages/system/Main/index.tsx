import { StyledCard } from "../../../components/common/Card/styles";
import { StyledLoginForm } from "../../../components/LoginForm/styles";

type MainPageProps = {
  className?: string;
};

const MainPage = (props: MainPageProps): JSX.Element => {
  const { className } = props;

  const foo = (): void => {
    console.log("send login data to server");
  };

  return (
    <>
      <div className={className}>
        {/* <div className="loginForm">
          <StyledLoginForm />
        </div> */}
        <StyledCard styledHeight="10rem" styledWidth="10rem">
          <StyledLoginForm loginBtnFormClick={foo} />
        </StyledCard>
      </div>
    </>
  );
};

export default MainPage;
