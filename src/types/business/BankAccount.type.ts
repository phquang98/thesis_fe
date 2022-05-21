import { TBaseResBody } from "../base";

export type TBAcc = {
  id: string;
  iban: string;
  swiftBIC: string;
  balance: number;
  userId: string;
  createdAt: Date;
};

export type BAccResBody = Pick<TBaseResBody, "statusCode" | "message"> & {
  affectedResource: "Bank Account";
  serverData: Record<string, never> | TBAcc;
};
