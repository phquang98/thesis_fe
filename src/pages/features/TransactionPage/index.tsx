import { useState } from "react";
import { StyledCard } from "../../../components/common/Card/styles";
import { StyledTransactionForm } from "../../../components/TransactionForm/styles";
import { useAuth } from "../../../hooks/useAuth";
import { FinTransactionClientBody } from "../../../types/business";

type TransactionPageProps = {
  className?: string;
};

const TransactionPage = (props: TransactionPageProps): JSX.Element => {
  const { className } = props;
  const auth = useAuth();

  const [iptFinTransactReceiver, setIptFinTransactReceiver] = useState<string>("");
  const [iptFinTransactAmount, setIptFinTransactAmount] = useState<string>("");

  const submitFinTransactDataToServer = async (): Promise<void> => {
    const sendToServer: FinTransactionClientBody = {
      clientData: {
        senderBAccId: auth.userData.userId,
        receiverBAccId: iptFinTransactReceiver,
        amount: Number(iptFinTransactAmount)
      }
    };
    console.log("click the register btn", sendToServer);
  };

  return (
    <>
      <div className={className}>
        <h3>Create a Transaction</h3>
        <StyledCard className="transactionFormCard" styledHeight="10rem" styledWidth="12rem">
          <StyledTransactionForm
            changeStateTransactionAmount={setIptFinTransactAmount}
            changeStateTransactionReceiverBAccId={setIptFinTransactReceiver}
            transactionBtnFormClick={submitFinTransactDataToServer}
          />
        </StyledCard>
      </div>
    </>
  );
};

export default TransactionPage;
