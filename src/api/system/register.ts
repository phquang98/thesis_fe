import { axiosInstance } from "..";
import { TRegisterReqBody, TRegisterRes } from "../../types/system/register.type";

export const register = async (payload: TRegisterReqBody): Promise<TRegisterRes> => {
  const { data } = await axiosInstance.post<TRegisterRes>("/register", JSON.stringify(payload));
  return data;
};
