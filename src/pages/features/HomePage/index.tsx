import { StyledCard } from "../../../components/common/Card/styles";

type HomePageProps = {
  className?: string;
};

const HomePage = (props: HomePageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <div className="recent">{/* <h4>Recent Transactions</h4> */}</div>

        <div>
          <StyledCard className="bankData" styledHeight="12rem" styledWidth="28rem">
            <h3 className="bankDataTitle">Bank Account Information</h3>

            <h4 className="bankDataBalance">Balance: 734</h4>
            <p>ID: 2fcf6cc9-d98a-466a-bebb-45cf9a90b640</p>
            <p>IBAN: YM05 2656 6526 7182 25</p>
            <p>SWIFT-BIC: XWQWERLN</p>
            <p>User ID: 8c72e988-d3d6-4bdb-87c0-e16bda5c86c6</p>
          </StyledCard>
        </div>
      </div>
    </>
  );
};

export default HomePage;
