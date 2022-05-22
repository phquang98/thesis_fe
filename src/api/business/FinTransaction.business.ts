import { axiosInstance } from "../axios";
import {
  FinTransactionClientBody,
  FinTransactionClientBodyStatement,
  FinTransactionServerRes
} from "../../types/business";

const createOne = async (payload: FinTransactionClientBody): Promise<FinTransactionServerRes> => {
  const { data } = await axiosInstance.post<FinTransactionServerRes>("/api/transact", payload);
  return data;
};

const readStatementByBAccId = async (
  payload: FinTransactionClientBodyStatement
): Promise<FinTransactionServerRes[]> => {
  const { data } = await axiosInstance.get<FinTransactionServerRes[]>(`/api/transact/${payload.clientData.bAccIdHere}`);
  return data;
};

const readOneByFinTransactionId = async (payload: string): Promise<FinTransactionServerRes> => {
  const { data } = await axiosInstance.get<FinTransactionServerRes>(`/api/transact/${payload}`);
  return data;
};

export const finTransactionRepo = {
  createOne,
  readStatementByBAccId,
  readOneByFinTransactionId
};
