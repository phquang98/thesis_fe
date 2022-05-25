import { TLogoutRes } from "../../types/system/logout.type";
import { axiosInstance } from "../axios";

export const logout = async (payload: string): Promise<TLogoutRes> => {
  const { data } = await axiosInstance.post<TLogoutRes>(`/be/${payload}/logout`);
  return data;
};
