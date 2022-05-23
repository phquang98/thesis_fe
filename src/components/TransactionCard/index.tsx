import { TFinTransaction } from "../../types/business";
import { StyledButton } from "../common/Button/styles";
import { StyledCard } from "../common/Card/styles";

type TransactionCardProps = {
  className?: string;
  isRowName: boolean;
  finTransactData?: TFinTransaction;
};

const TransactionCard = (props: TransactionCardProps): JSX.Element => {
  const { className, finTransactData, isRowName } = props;

  if (isRowName) {
    return (
      <>
        <div className={className}>
          <StyledCard className="cardUnit" styledHeight="4rem" styledWidth="68rem">
            <p>Transaction ID</p>
            <p className="cardSeparatorOne">Sender Account ID</p>
            <p>Receiver Account ID</p>
            <p className="cardSeparatorTwo">Amount</p>
            <p>Transacted at</p>
          </StyledCard>
        </div>
      </>
    );
  }

  if (finTransactData) {
    return (
      <>
        <div className={className}>
          <StyledCard className="cardUnit" styledHeight="4rem" styledWidth="68rem">
            <p>{finTransactData.id}</p>
            <p className="cardSeparatorOne">{finTransactData.senderBAccId}</p>
            <p>{finTransactData.receiverBAccId}</p>
            <p className="cardSeparatorTwo">{finTransactData.amount}</p>
            <p>{finTransactData.transactedAt.toUTCString()}</p>
          </StyledCard>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={className}>
        <StyledCard className="cardUnit" styledHeight="4rem" styledWidth="68rem">
          <p>Data missing!</p>
          <p className="cardSeparatorOne">Data missing!</p>
          <p>Data missing!</p>
          <p className="cardSeparatorTwo">Data missing!</p>
          <p>Data missing!</p>
        </StyledCard>
      </div>
    </>
  );
};

export default TransactionCard;
