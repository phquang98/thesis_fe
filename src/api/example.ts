import { axiosInstance } from "./axios";

type JSONPlaceholderTypes = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

const getOneExample = async (): Promise<JSONPlaceholderTypes> => {
  const { data } = await axiosInstance.get<JSONPlaceholderTypes>("/posts/3");

  const sleep = (ms: number): Promise<unknown> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  await sleep(2000);

  return data;
};

export const ExampleAPIConsumer = {
  getOneExample
};
