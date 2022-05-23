type ProfilePageProps = {
  className?: string;
};

const ProfilePage = (props: ProfilePageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}></div>
    </>
  );
};

export default ProfilePage;
