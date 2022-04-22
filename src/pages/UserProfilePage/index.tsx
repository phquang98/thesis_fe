import { useState } from "react";
import { StyledRegisterForm } from "../../components/RegisterForm/styles";

type UserProfilePageProps = {
  className?: string;
};

const UserProfilePage = (props: UserProfilePageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <p>This is the Profile Page</p>
        <p>User ID: 123456</p>
        <p>User Name: johnny_doe</p>
      </div>
    </>
  );
};

export default UserProfilePage;
