import { TBaseResBody } from "../base";

export type TFinTransaction = {
  id: string;
  amount: number;
  receiverBAccId: string;
  senderBAccId: string;
  transactedAt: Date;
};

export type FinTransactionResBody = Pick<TBaseResBody, "statusCode" | "message"> & {
  affectedResource: "Financial Transaction";
  serverData: Record<string, never> | TFinTransaction | TFinTransaction[];
};
