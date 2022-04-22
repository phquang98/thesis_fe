import { StyledTransactionForm } from "../../components/TransactionForm/styles";

type UserTransactionPageProps = {
  className?: string;
};

const UserTransactionPage = (props: UserTransactionPageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <p>This is the Transaction Page</p>
        <StyledTransactionForm />
      </div>
    </>
  );
};

export default UserTransactionPage;
