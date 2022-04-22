import { useState } from "react";
import { StyledList } from "../../components/List/styles";
import { StyledRegisterForm } from "../../components/RegisterForm/styles";

type UserStatementPageProps = {
  className?: string;
};

const UserStatementPage = (props: UserStatementPageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <p>This is the Balance Page</p>
        <StyledList />
      </div>
    </>
  );
};

export default UserStatementPage;
