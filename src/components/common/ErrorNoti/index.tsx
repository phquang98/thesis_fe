import { TServerError } from "../../../types/system";

type ErrorNotiProps = {
  className?: string;
  errorData: TServerError | null;
};

const ErrorNoti = (props: ErrorNotiProps): JSX.Element => {
  const { className, errorData } = props;

  return (
    <>
      <div className={className}>{errorData && <p>{errorData.message}</p>}</div>
    </>
  );
};

export default ErrorNoti;
