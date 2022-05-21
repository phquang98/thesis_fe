import { axiosInstance } from "..";
import { TReloadRes } from "../../types/system/reloadSess.type";

export const reload = async (userIdFromAuthHere: string): Promise<TReloadRes> => {
  const { data } = await axiosInstance.post<TReloadRes>(`/${userIdFromAuthHere}/reload`);
  return data;
};
