import { TBaseResBody } from "../system";

export type TBAcc = {
  id: string;
  iban: string;
  swiftBIC: string;
  balance: number;
  userId: string;
  createdAt: Date;
};

export type BAccResBody = TBaseResBody & {
  serverData: Record<string, never> | TBAcc;
};
