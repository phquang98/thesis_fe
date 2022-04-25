import ContentPlaceholder from "../../components/ContentPlaceholder";
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
        <ContentPlaceholder />
      </div>
    </>
  );
};

export default MainPage;
