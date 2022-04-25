import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { TLoginData } from "../../utils/types.util";

type LoginFormProps = {
  className?: string;
};

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const [loginDataIpt, setLoginDataIpt] = useState<TLoginData>({
    account_name_login: "",
    account_pwd_login: ""
  });

  const { className } = props;
  const navigate = useNavigate();
  const auth = useAuth();

  const iptChangeHdlr: ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (evt.currentTarget.name === "nameIpt") {
      setLoginDataIpt({ ...loginDataIpt, account_name_login: evt.currentTarget.value });
    }
    if (evt.currentTarget.name === "pwdIpt") {
      setLoginDataIpt({ ...loginDataIpt, account_pwd_login: evt.currentTarget.value });
    }
  };

  const loginFormBtnClickHdlr: MouseEventHandler<HTMLButtonElement> = (_evt) => {
    auth?.login(loginDataIpt);
    navigate("/home", { replace: true });
  };

  if (auth.userData.username !== "") {
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
        <p>Login Form</p>
        {auth.userData.username === "" && (
          <>
            <div>
              <input type="email" required placeholder="Account name here" name="nameIpt" onChange={iptChangeHdlr} />
            </div>
            <div>
              <input
                type="password"
                required
                placeholder="Account password here"
                name="pwdIpt"
                onChange={iptChangeHdlr}
              />
            </div>
            <div>
              <button onClick={loginFormBtnClickHdlr}>Login</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LoginForm;
