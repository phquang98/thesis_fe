import { useState } from "react";

type TransactionFormProps = {
  className?: string;
};

const TransactionForm = (props: TransactionFormProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <form>
          <p>Transaction Form</p>
          <div>
            <input type="text" required placeholder="Receiver ID here" />
          </div>
          <div>
            <input type="text" required placeholder="Amount here" />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TransactionForm;
