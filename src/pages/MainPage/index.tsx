import { StyledLoginForm } from "../../components/LoginForm/styles";

type MainPageProps = {
  className?: string;
};

const MainPage = (props: MainPageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <p>This is a Main Page</p>
        <p>Public data that everyone can access go here</p>
      </div>
    </>
  );
};

export default MainPage;
