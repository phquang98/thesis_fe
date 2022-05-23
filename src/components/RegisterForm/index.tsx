import { useState } from "react";
import { StyledButton } from "../common/Button/styles";
import { StyledInputField } from "../common/InputField/styles";

type RegisterFormProps = {
  className?: string;
  changeStateRegisterName: React.Dispatch<React.SetStateAction<string>>;
  changeStateRegisterEmail: React.Dispatch<React.SetStateAction<string>>;
  changeStateRegisterAccName: React.Dispatch<React.SetStateAction<string>>;
  changeStateRegisterAccPwd: React.Dispatch<React.SetStateAction<string>>;
  registerBtnFormClick: () => Promise<void>;
};

const RegisterForm = (props: RegisterFormProps): JSX.Element => {
  const {
    className,
    changeStateRegisterName,
    changeStateRegisterEmail,
    changeStateRegisterAccName,
    changeStateRegisterAccPwd,
    registerBtnFormClick
  } = props;

  return (
    <>
      <div className={className}>
        <StyledInputField placeHolder="Name" inputType="text" changeState={changeStateRegisterName} />
        <StyledInputField placeHolder="Email" inputType="email" changeState={changeStateRegisterEmail} />
        <StyledInputField placeHolder="Account" inputType="text" changeState={changeStateRegisterAccName} />
        <StyledInputField placeHolder="Password" inputType="password" changeState={changeStateRegisterAccPwd} />

        <StyledButton
          networkAction={registerBtnFormClick}
          displayText="Register"
          icon="register"
          styledWidth={8}
          isImportant={true}
        />
      </div>
    </>
  );
};

export default RegisterForm;
