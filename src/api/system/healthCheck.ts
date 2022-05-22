import { axiosInstance } from "../axios";

export const healthCheck = async (): Promise<{ msg: string }> => {
  const { data } = await axiosInstance.get<{ msg: string }>("/healthcheck");
  return data;
};
