import { axiosInstance } from "../axios";
import { TLoginReqBody, TLoginRes } from "../../types/system/login.type";

export const login = async (payload: TLoginReqBody): Promise<TLoginRes> => {
  const { data } = await axiosInstance.post<TLoginRes>("/be/login", JSON.stringify(payload));
  return data;
};
