import { useEffect, useState } from "react";
import { businessAPI } from "../../../api/business";
import { StyledCard } from "../../../components/common/Card/styles";
import { useAuth } from "../../../hooks/useAuth";
import { TUInfo } from "../../../types/business";

type ProfilePageProps = {
  className?: string;
};

const ProfilePage = (props: ProfilePageProps): JSX.Element => {
  const { className } = props;
  const { userData } = useAuth();
  const [loggedUserInfo, setLoggedUserInfo] = useState<TUInfo | null>(null);

  useEffect(() => {
    const fetchUserInfoData = async (): Promise<void> => {
      const userIdHere = localStorage.getItem("userId");
      if (userIdHere) {
        const returnedData = await businessAPI.uInfoRepo.readOneByUserId(userData.userId);
        setLoggedUserInfo(returnedData.serverData);
      }
    };
    fetchUserInfoData();
  }, [userData.userId]);

  return (
    <>
      <div className={className}>
        {loggedUserInfo && (
          <StyledCard className="profileData" styledHeight="14rem" styledWidth="28rem">
            <h3 className="profileDataTitle">User Information</h3>

            <p>User ID: {loggedUserInfo.id}</p>
            <p>Name: {loggedUserInfo.name}</p>
            <p>Email: {loggedUserInfo.email}</p>
            <p>Age: {loggedUserInfo.age}</p>
            <p>Address: {loggedUserInfo.address}</p>
            <p>Gender: {loggedUserInfo.gender}</p>
            <p>Phone number: {loggedUserInfo.pnum}</p>
          </StyledCard>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
