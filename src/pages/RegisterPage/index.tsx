import { useState } from "react";
import { StyledRegisterForm } from "../../components/RegisterForm/styles";

type RegisterPageProps = {
  className?: string;
};

const RegisterPage = (props: RegisterPageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <p>This is the Register Page</p>
        <StyledRegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
