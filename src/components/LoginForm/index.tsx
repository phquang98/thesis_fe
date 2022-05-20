import { StyledInputField } from "../common/InputField/styles";

type LoginFormProps = {
  className?: string;
};

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { className } = props;

  const foo = (dataFromIptField: string): void => {
    console.log("loginForm", dataFromIptField);
  };

  return (
    <>
      <div className={className}>
        <StyledInputField placeHolder="Account" changeState={foo} />
        <StyledInputField placeHolder="Password" changeState={foo} />
      </div>
    </>
  );
};

export default LoginForm;
