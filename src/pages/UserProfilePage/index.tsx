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
        <p>User ID: {auth.userData.userId}</p>
      </div>
    </>
  );
};

export default UserProfilePage;
