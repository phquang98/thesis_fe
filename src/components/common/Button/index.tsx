import { MouseEventHandler } from "react";
import { MdLogin, MdLogout } from "react-icons/md";

type ButtonProps = {
  className?: string;
  networkAction: () => void;
  displayText: string;
  icon: string;
  styledWidth: number;
  isImportant: boolean;
};

const Button = (props: ButtonProps): JSX.Element => {
  const { className, networkAction, displayText, icon } = props;

  const btnClickHdlr: MouseEventHandler<HTMLButtonElement> = (_evt) => {
    networkAction();
  };

  return (
    <>
      <button onClick={btnClickHdlr} className={className}>
        <span className="btnText">{displayText}</span>
        <span className="btnIcon">
          {icon === "logout" && <MdLogout />}
          {icon === "login" && <MdLogin />}
        </span>
      </button>
    </>
  );
};

export default Button;
