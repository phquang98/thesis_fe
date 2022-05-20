import { ChangeEventHandler } from "react";
import { MdSearch } from "react-icons/md";

type InputFieldProps = {
  className?: string;
  changeState: (newData: string) => void;
  placeHolder: string;
};

const InputField = (props: InputFieldProps): JSX.Element => {
  const { className, changeState, placeHolder } = props;

  const iptHdlr: ChangeEventHandler<HTMLInputElement> = (evt) => {
    changeState(evt.currentTarget.value);
  };

  return (
    <>
      <div className={className}>
        {/* <MdSearch className="iptIcon" /> */}
        <input className="ipt" type="text" onChange={iptHdlr} placeholder={placeHolder} />
      </div>
    </>
  );
};

export default InputField;
