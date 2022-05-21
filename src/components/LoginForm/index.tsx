import { StyledButton } from "../common/Button/styles";
import { StyledInputField } from "../common/InputField/styles";

type LoginFormProps = {
  className?: string;
  loginBtnFormClick: () => void;
};

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { className, loginBtnFormClick } = props;

  const foo = (dataFromIptField: string): void => {
    console.log("loginForm", dataFromIptField);
  };

  return (
    <>
      <div className={className}>
        <StyledInputField placeHolder="Account" inputType="text" changeState={foo} />
        <StyledInputField placeHolder="Password" inputType="password" changeState={foo} />
        <StyledButton
          networkAction={loginBtnFormClick}
          displayText="Login"
          icon="login"
          styledWidth={8}
          isImportant={true}
        />
      </div>
    </>
  );
};

export default LoginForm;
