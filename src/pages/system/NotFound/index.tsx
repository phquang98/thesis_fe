import { useEffect } from "react";
import { systemAPI } from "../../../api";

import { StyledNews } from "../../../components/News/styles";

type NotFoundProps = {
  className?: string;
};

const NotFoundPage = (props: NotFoundProps): JSX.Element => {
  const { className } = props;

  // useEffect(() => {
  //   systemAPI.register({
  //     clientData: {
  //       name: "John",
  //       email: "Johntest456@gmail.com",
  //       accountName: "johnny",
  //       accountPwd: "johnny123"
  //     }
  //   });
  // systemAPI.login({
  //   clientData: {
  //     accountName: "Shaina47",
  //     accountPwd: "wUdr7rPo7qzGqqK"
  //   }
  // });
  // }, []);

  return (
    <>
      <div className={className}>
        <h3>Error 404! The page you requested does not existed!</h3>
        <p>Please go back to the Main Page or login if you have not already done so!</p>
      </div>
    </>
  );
};

export default NotFoundPage;
