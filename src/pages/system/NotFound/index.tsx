import { MdLogout } from "react-icons/md";
import { StyledButton } from "../../../components/common/Button/styles";
import { StyledInputField } from "../../../components/common/InputField/styles";
import { StyledNews } from "../../../components/News/styles";
import { yleNews } from "../../../utils";

type NotFoundProps = {
  className?: string;
};

const newsDataObj = yleNews;

const NotFoundPage = (props: NotFoundProps): JSX.Element => {
  const { className } = props;

  const foo = (newData: string): void => {
    console.log("data", newData);
  };

  const fooTwo = (): void => {
    console.log("btn clicked");
  };

  return (
    <>
      <div className={className}>
        <h3>Error 404! The page you requested does not existed!</h3>
        <p>Please go back to the Main Page or login if you have not already done so!</p>
        {/* <StyledInputField changeState={foo} placeHolder="Search" /> */}
        {/* <StyledButton networkAction={fooTwo} displayText="Login" icon="login" styledWidth={8} isImportant={true} /> */}
        <StyledNews newData={newsDataObj} />
      </div>
    </>
  );
};

export default NotFoundPage;
