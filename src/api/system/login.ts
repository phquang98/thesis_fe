import { axiosInstance } from "..";
import { TLoginReqBody, TLoginRes } from "../../types/system/login.type";

export const login = async (payload: TLoginReqBody): Promise<TLoginRes> => {
  const { data } = await axiosInstance.post<TLoginRes>("/login", JSON.stringify(payload));
  return { ...data };
};
