import { TBaseResBody } from "../system";

export type TFinTransaction = {
  id: string;
  amount: number;
  receiverBAccId: string;
  senderBAccId: string;
  transactedAt: Date;
};

export type FinTransactionResBody = TBaseResBody & {
  serverData: Record<string, never> | TFinTransaction | TFinTransaction[];
};
