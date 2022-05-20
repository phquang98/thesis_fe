type LoginFormProps = {
  className?: string;
};

const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}></div>
    </>
  );
};

export default LoginForm;
