import { MdLogout } from "react-icons/md";
import { StyledInputField } from "../../../components/common/InputField/styles";

type NotFoundProps = {
  className?: string;
};

const NotFoundPage = (props: NotFoundProps): JSX.Element => {
  const { className } = props;

  const foo = (newData: string): void => {
    console.log("data", newData);
  };

  return (
    <>
      <div className={className}>
        <h3>Error 404! The page you requested does not existed!</h3>
        <p>Please go back to the Main Page or login if you have not already done so!</p>
        <StyledInputField changeState={foo} placeHolder="Search" />
      </div>
    </>
  );
};

export default NotFoundPage;
