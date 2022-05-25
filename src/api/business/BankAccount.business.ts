import { BAccClientBody, BAccServerRes } from "../../types/business";
import { axiosInstance } from "../axios";

const createOne = async (clientBody: BAccClientBody): Promise<BAccServerRes> => {
  const { data } = await axiosInstance.post<BAccServerRes>("/api/bankaccount", clientBody);
  return data;
};

const readOneByBAccId = async (bAccIdHere: string): Promise<BAccServerRes> => {
  const { data } = await axiosInstance.get<BAccServerRes>(`/api/bankaccount/${bAccIdHere}`);
  return data;
};

const delOneByBAccId = async (bAccIdHere: string): Promise<BAccServerRes> => {
  const { data } = await axiosInstance.delete<BAccServerRes>(`/api/bankaccount/${bAccIdHere}`);
  return data;
};

export const bAccRepo = {
  createOne,
  readOneByBAccId,
  delOneByBAccId
};
