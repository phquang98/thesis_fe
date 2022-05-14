import { ChangeEventHandler, MouseEventHandler } from "react";

type LoginFormProps = {
  className?: string;
  iptChangeHdlr: ChangeEventHandler<HTMLInputElement>;
  btnClickHdlr: MouseEventHandler<HTMLButtonElement>;
};

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { className, iptChangeHdlr, btnClickHdlr } = props;

  return (
    <>
      <div className={className}>
        <p>Login Form</p>
        <div>
          <input type="email" required placeholder="Account name here" name="nameIpt" onChange={iptChangeHdlr} />
        </div>
        <div>
          <input type="password" required placeholder="Account password here" name="pwdIpt" onChange={iptChangeHdlr} />
        </div>
        <div>
          <button onClick={btnClickHdlr}>Login</button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
