import { MouseEventHandler, useState } from "react";
import { receiveMessageOnPort } from "worker_threads";
import { StyledTransactionCard } from "../../../components/TransactionCard/styles";
import { useAuth } from "../../../hooks/useAuth";
import { TFinTransaction } from "../../../types/business";

type StatementPageProps = {
  className?: string;
};

const dataFromAPIServer: TFinTransaction[] = [
  {
    id: "b2c7ed5c-ff4c-49e8-9fd0-91005875405d",
    senderBAccId: "34acfef7-fdd7-420d-bd44-eb3248052c77",
    receiverBAccId: "34acfef7-fdd7-420d-bd44-eb3248052c77",
    amount: 178,
    transactedAt: new Date("2022-05-14 13:38:02.228175")
  },
  {
    id: "b2c7ed5c-ff4c-49e8-9fd0-91005875405d",
    senderBAccId: "34acfef7-fdd7-420d-bd44-eb3248052c77",
    receiverBAccId: "34acfef7-fdd7-420d-bd44-eb3248052c77",
    amount: 178,
    transactedAt: new Date("2022-05-14 13:29:39.587522")
  }
];

const StatementPage = (props: StatementPageProps): JSX.Element => {
  const { className } = props;
  const auth = useAuth();

  const clickRowNameToSortDate: MouseEventHandler<HTMLButtonElement> = (_evt) => {
    console.log("perform sort arr data from be here");
  };

  return (
    <>
      <div className={className}>
        <h3 className="pageTitle">Bank statement</h3>
        <div className="statementRenderClt">
          <StyledTransactionCard className="rowName" isRowName={true} />

          {dataFromAPIServer.map((ele, index) => {
            return <StyledTransactionCard key={index} finTransactData={ele} isRowName={false} />;
          })}
        </div>
      </div>
    </>
  );
};

export default StatementPage;
