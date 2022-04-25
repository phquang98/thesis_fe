type RegisterFormProps = {
  className?: string;
};

const RegisterForm = (props: RegisterFormProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <form>
          <p>Register Form</p>
          <div>
            <input type="email" required placeholder="Email here" />
          </div>
          <div>
            <input type="text" required placeholder="Password here" />
          </div>
          <div>
            <input type="text" required placeholder="Confirm password" />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
