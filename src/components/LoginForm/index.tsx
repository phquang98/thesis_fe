import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TLogin } from "../../utils/types.util";

type LoginFormProps = {
  className?: string;
};

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const [dataInput, setDataInput] = useState<TLogin>({
    account_name_login: "Account Name Here",
    account_pwd_login: "Password Here"
  });

  const { className } = props;
  const navigate = useNavigate();

  const iptChangeHdlr: ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (evt.currentTarget.name === "nameIpt") {
      setDataInput({ ...dataInput, account_name_login: evt.currentTarget.value });
    }
    if (evt.currentTarget.name === "pwdIpt") {
      setDataInput({ ...dataInput, account_pwd_login: evt.currentTarget.value });
    }
  };

  const loginFormBtnClickHdlr: MouseEventHandler<HTMLButtonElement> = (_evt) => {
    navigate(`/${"e1601130"}/home`, { replace: true });
  };

  return (
    <>
      <div className={className}>
        <p>Login Form</p>
        <div>
          <input
            type="email"
            required
            placeholder={dataInput.account_name_login}
            name="nameIpt"
            onChange={iptChangeHdlr}
          />
        </div>
        <div>
          <input
            type="password"
            required
            placeholder={dataInput.account_pwd_login}
            name="pwdIpt"
            onChange={iptChangeHdlr}
          />
        </div>
        <div>
          <button onClick={loginFormBtnClickHdlr}>Login</button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
