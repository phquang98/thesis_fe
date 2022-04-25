import { StyledLoginForm } from "../../components/LoginForm/styles";
import { StyledRegisterForm } from "../../components/RegisterForm/styles";

type LoginPageProps = {
  className?: string;
};

const LoginPage = (props: LoginPageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <p>This is the Login Page</p>
        <StyledLoginForm />
      </div>
    </>
  );
};

export default LoginPage;
