import { useEffect, useState } from "react";
import { UAccAPI } from "../../api";
import { TServerResponse } from "../../utils/types.util";

const ContentPlaceholder = (): JSX.Element => {
  const [mockData, setMockData] = useState<TServerResponse | null>(null);

  // useEffect(() => {
  //   const getData = async (): Promise<void> => {
  //     const asd = await UAccAPI.login({
  //       clientData: { account_name: "Chloe.Oberbrunner64", account_pwd: "GSrW0rCozSHZrNg" }
  //     });
  //     console.log("cai loz", asd);
  //     setMockData(asd);
  //   };
  //   getData();
  // }, []);

  if (mockData) {
    return (
      <>
        <div>
          <p>What I want: {mockData.msg}</p>
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
