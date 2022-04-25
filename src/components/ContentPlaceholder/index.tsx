import axios from "axios";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axios";
import { ExampleAPIConsumer } from "../../api/example";

type JSONPlaceholderTypes = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

const ContentPlaceholder = (): JSX.Element => {
  const [mockData, setMockData] = useState<JSONPlaceholderTypes | null>(null);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const asd = await ExampleAPIConsumer.getOneExample();
      setMockData(asd);
    };
    getData();
  }, []);

  if (mockData) {
    return (
      <>
        <div>
          <p>UserID: {mockData.userId}</p>
          <p>ID: {mockData.id}</p>
          <p>Title: {mockData.title}</p>
          <p>Body: {mockData.body}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <p>Data is still loading...</p>
      </div>
    </>
  );
};

export default ContentPlaceholder;
