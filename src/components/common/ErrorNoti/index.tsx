import { useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { TServerError, TServerSuccess } from "../../../types/base";

type ErrorNotiProps = {
  className?: string;
};

const ErrorNoti = (props: ErrorNotiProps): JSX.Element => {
  const { className } = props;
  const auth = useAuth();
  const { serverRes } = auth;

  if (serverRes.name === "SimpleError") {
    return (
      <>
        <div className={className}>
          <p>
            Error: {serverRes.statusCode}. {serverRes.message}. {serverRes.affectedResource}.
          </p>
        </div>
      </>
    );
  }

  if (serverRes.serverData) {
    return (
      <>
        <div className={className}>
          <p>
            Status code: {serverRes.statusCode}. {serverRes.message}. {serverRes.affectedResource}.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={className}>Server message will appear here</div>
    </>
  );

  // return (
  //   <>
  //     {if ("name" in server)}

  //     {/* <div className={className}>{serverInfoDisplay && <p>{serverInfoDisplay.message}</p>}</div> */}
  //   </>
  // );
};

export default ErrorNoti;
