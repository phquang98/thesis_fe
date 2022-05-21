import { axiosInstance } from "..";

export const healthCheck = async (): Promise<void> => {
  const { data } = await axiosInstance.get("/healthcheck");
  console.log("asd", data);
};
