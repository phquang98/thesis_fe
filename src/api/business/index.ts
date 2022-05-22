// NOTE: instead of return data in all business, should I return await axiosInstance... instead ?

import { bAccRepo } from "./BankAccount.business";
import { finTransactionRepo } from "./FinTransaction.business";
import { uInfoRepo } from "./UserInfo.business";

// same as BE + maintain err stack trace ?
export const businessAPI = {
  bAccRepo,
  uInfoRepo,
  finTransactionRepo
};
