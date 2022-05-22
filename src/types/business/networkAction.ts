import { BAccClientBody, BAccServerRes } from "./BankAccount.type";
import {
  FinTransactionClientBody,
  FinTransactionClientBodyStatement,
  FinTransactionServerRes
} from "./FinTransaction.type";
import { UAccServerRes } from "./UserAccount.type";
import { UInfoClientBody, UInfoServerRes } from "./UserInfo.type";

// NOTE: not sure this is retarded or not
export type ExpectedServerBody = BAccServerRes | FinTransactionServerRes | UAccServerRes | UInfoServerRes;

// opposite to BE, dont care about this ?
type ExpectedClientParams = { idHere: string };

// NOTE: maybe retarded, cause must know all possible requirements beforehand -> hard scale
type ExpectedClientBody =
  | BAccClientBody
  | FinTransactionClientBody
  | FinTransactionClientBodyStatement
  | UInfoClientBody;

// NOTE: not sure this is retarded or not
type ExpectedClientData = ExpectedClientParams | ExpectedClientBody;

type DatalessNetworkAction = () => Promise<ExpectedServerBody>;

type DatafulNetworkAction = (payload: ExpectedClientData) => Promise<ExpectedServerBody>;

export type NetworkAction = DatafulNetworkAction | DatalessNetworkAction;
