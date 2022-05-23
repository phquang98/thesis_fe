import { useState } from "react";
import { StyledButton } from "../common/Button/styles";
import { StyledInputField } from "../common/InputField/styles";

type TransactionFormProps = {
  className?: string;
  changeStateTransactionReceiverBAccId: React.Dispatch<React.SetStateAction<string>>;
  changeStateTransactionAmount: React.Dispatch<React.SetStateAction<string>>;
  transactionBtnFormClick: () => Promise<void>;
};

const TransactionForm = (props: TransactionFormProps): JSX.Element => {
  const { className, changeStateTransactionReceiverBAccId, changeStateTransactionAmount, transactionBtnFormClick } =
    props;

  return (
    <>
      <div className={className}>
        <StyledInputField
          placeHolder="Receiver ID"
          inputType="text"
          changeState={changeStateTransactionReceiverBAccId}
        />
        <StyledInputField placeHolder="Amount" inputType="text" changeState={changeStateTransactionAmount} />

        <StyledButton
          networkAction={transactionBtnFormClick}
          displayText="Transfer"
          icon="transaction"
          styledWidth={8}
          isImportant={true}
        />
      </div>
    </>
  );
};

export default TransactionForm;
