import { axiosInstance } from "../axios";
import { UInfoClientBody, UInfoServerRes } from "../../types/business";

const readOneByUserId = async (payload: string): Promise<UInfoServerRes> => {
  const { data } = await axiosInstance.get<UInfoServerRes>(`/be/api/userinfo/${payload}`);
  return data;
};

const updateOneByUserId = async (payload: UInfoClientBody): Promise<UInfoServerRes> => {
  const { data } = await axiosInstance.put<UInfoServerRes>(
    `/be/api/userinfo/${payload.clientData.id}`,
    JSON.stringify(payload)
  );
  return data;
};

export const uInfoRepo = {
  readOneByUserId,
  updateOneByUserId
};
