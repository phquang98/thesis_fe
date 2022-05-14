import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UAccAPI } from "../../api";

import { StyledLoginForm } from "../../components/LoginForm/styles";
import { useAuth } from "../../hooks/useAuth";
import { HTTPStatusCode, TLoginData } from "../../utils/types.util";

type LoginPageProps = {
  className?: string;
};

const LoginPage = (props: LoginPageProps): JSX.Element => {
  const { className } = props;

  const navigate = useNavigate();
  const auth = useAuth();

  const [loginDataIpt, setLoginDataIpt] = useState<TLoginData>({
    accNameIpt: "",
    accPwdIpt: ""
  });
  const [isProceedToLogin, setIsProceedToLogin] = useState<boolean>(false);

  const changeLoginFormDataHdlr: ChangeEventHandler<HTMLInputElement> = (evt) => {
    // points to the child CPN input field
    if (evt.currentTarget.name === "nameIpt") {
      setLoginDataIpt({ ...loginDataIpt, accNameIpt: evt.currentTarget.value });
    }
    // points to the child CPN input field
    if (evt.currentTarget.name === "pwdIpt") {
      setLoginDataIpt({ ...loginDataIpt, accPwdIpt: evt.currentTarget.value });
    }
  };

  const switchLoginFormStateHdlr: MouseEventHandler<HTMLButtonElement> = (_evt) => {
    setIsProceedToLogin(true);
  };

  useEffect(() => {
    const submitDataToBE = async (): Promise<void> => {
      if (isProceedToLogin) {
        try {
          const serverRes = await UAccAPI.login({
            clientData: {
              account_name: loginDataIpt.accNameIpt,
              account_pwd: loginDataIpt.accPwdIpt
            }
          });
          if (serverRes.status === HTTPStatusCode.OK) {
            auth.setLoggedInUser({
              userId: serverRes.serverData.user_id,
              sid: serverRes.serverData.sid
            });
            navigate("/home", { replace: true });
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    submitDataToBE();
  }, [isProceedToLogin, loginDataIpt, navigate, auth]);

  if (auth.userData.sid !== "") {
    return (
      <>
        <div className={className}>
          <p>Login Form</p>
          <p>You are already logged in!</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={className}>
        <p>This is the Login Page</p>
        <StyledLoginForm iptChangeHdlr={changeLoginFormDataHdlr} btnClickHdlr={switchLoginFormStateHdlr} />
      </div>
    </>
  );
};

export default LoginPage;

// Explain: put all state and logic in parents, put dumb shit in child CPN only
