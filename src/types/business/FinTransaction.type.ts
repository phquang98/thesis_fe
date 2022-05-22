import { TBaseResBody } from "../base";

export type TFinTransaction = {
  id: string;
  amount: number;
  receiverBAccId: string;
  senderBAccId: string;
  transactedAt: Date;
};

export type FinTransactionClientBody = {
  clientData: Pick<TFinTransaction, "senderBAccId" | "receiverBAccId" | "amount">;
};

export type FinTransactionClientBodyStatement = {
  clientData: { bAccIdHere: string };
};

export type FinTransactionServerRes = Pick<TBaseResBody, "statusCode" | "message"> & {
  affectedResource: "Financial Transaction";
  serverData: Record<string, never> | TFinTransaction | TFinTransaction[];
};
