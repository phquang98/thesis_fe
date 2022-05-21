import { BAccResBody } from "./BankAccount.type";
import { FinTransactionResBody } from "./FinTransaction.type";
import { UAccResBody } from "./UserAccount.type";
import { UInfoResBody } from "./UserInfo.type";

// NOTE: not sure this is retarded or not
type ExpectedServerBody = BAccResBody | FinTransactionResBody | UAccResBody | UInfoResBody;

// opposite to BE, dont care about this ?
type ExpectedClientParams = { idHere: string };

// NOTE: maybe retarded, cause must know all possible requirements beforehand -> hard scale
type ExpectedClientBody = Record<string, unknown>;

// NOTE: not sure this is retarded or not
type ExpectedClientData = ExpectedClientParams | ExpectedClientBody;

export type DatalessNetworkAction = () => Promise<ExpectedServerBody>;

// export type DatafulNetworkAction = () => Promise<ExpectedServerBody>;

// export type NetworkAction = DatafulNetworkAction | NoBodyNetworkAction;

export {};
