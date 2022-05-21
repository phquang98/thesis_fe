import { StyledButton } from "../common/Button/styles";
import { StyledInputField } from "../common/InputField/styles";

type LoginFormProps = {
  className?: string;
  changeStateLoginAccName: React.Dispatch<React.SetStateAction<string>>;
  changeStateLoginAccPass: React.Dispatch<React.SetStateAction<string>>;
  loginBtnFormClick: () => void;
};

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { className, loginBtnFormClick, changeStateLoginAccName, changeStateLoginAccPass } = props;

  return (
    <>
      <div className={className}>
        <StyledInputField placeHolder="Account" inputType="text" changeState={changeStateLoginAccName} />
        <StyledInputField placeHolder="Password" inputType="password" changeState={changeStateLoginAccPass} />
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
