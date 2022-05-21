import { useEffect } from "react";
import { systemAPI } from "../../../api";

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

  useEffect(() => {
    systemAPI.login({
      clientData: {
        accountName: "Shaina47",
        accountPwd: "wUdr7rPo7qzGqqK"
      }
    });
  }, []);

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
