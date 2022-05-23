import { StyledCard } from "../../../components/common/Card/styles";

type ProfilePageProps = {
  className?: string;
};

const ProfilePage = (props: ProfilePageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <StyledCard className="profileData" styledHeight="14rem" styledWidth="28rem">
          <h3 className="profileDataTitle">User Information</h3>

          <p>User ID: 0ba30907-64f7-48ce-99b2-b57414d216bc</p>
          <p>Name: Carlton Steuber</p>
          <p>Email: Octavia_Quitzon63@example.net</p>
          <p>Age: 20</p>
          <p>Address: 8337 Cedrick Rapids</p>
          <p>Gender: male</p>
          <p>Phone number: 446-202-3935</p>
        </StyledCard>
      </div>
    </>
  );
};

export default ProfilePage;
