import { TServerError, TServerSuccess } from "../../../types/system";

type ErrorNotiProps = {
  className?: string;
  serverInfoDisplay: TServerSuccess | TServerError | null;
};

const ErrorNoti = (props: ErrorNotiProps): JSX.Element => {
  const { className, serverInfoDisplay } = props;

  if (!serverInfoDisplay) {
    return (
      <>
        <div className={className}>
          <p>Fetching data from server ...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={className}>{serverInfoDisplay && <p>{serverInfoDisplay.message}</p>}</div>
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
