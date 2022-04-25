import { useAuth } from "../../hooks/useAuth";

type UserProfilePageProps = {
  className?: string;
};

const UserProfilePage = (props: UserProfilePageProps): JSX.Element => {
  const { className } = props;
  const auth = useAuth();

  return (
    <>
      <div className={className}>
        <p>This is the Profile Page</p>
        <p>User ID: 123456</p>
        <p>User Name: {auth.userData.username}</p>
      </div>
    </>
  );
};

export default UserProfilePage;
