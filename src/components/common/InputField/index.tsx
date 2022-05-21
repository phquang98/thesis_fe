import { ChangeEventHandler } from "react";
import { MdSearch } from "react-icons/md";

type InputFieldProps = {
  className?: string;
  changeState: React.Dispatch<React.SetStateAction<string>>;
  placeHolder: string;
  inputType: "text" | "email" | "password";
};

const InputField = (props: InputFieldProps): JSX.Element => {
  const { className, changeState, placeHolder, inputType } = props;

  const iptHdlr: ChangeEventHandler<HTMLInputElement> = (evt) => {
    changeState(evt.currentTarget.value);
  };

  return (
    <>
      <div className={className}>
        <input className="ipt" type={inputType} onChange={iptHdlr} placeholder={placeHolder} />
      </div>
    </>
  );
};

export default InputField;
