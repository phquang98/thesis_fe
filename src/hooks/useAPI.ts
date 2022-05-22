import { useEffect, useState } from "react";

import { HttpStatusCode } from "../utils";
import { TServerError, TServerSuccess } from "../types/base";
import { systemAPI } from "../api/system";

const tmpErr: TServerError = {
  name: "SimpleError",
  message: "Testing failure OK!",
  affectedResource: "Nothing",
  statusCode: HttpStatusCode.NOT_FOUND
};

const tmpOK = {
  message: "Testing success OK!",
  affectedResource: "Nothing",
  statusCode: HttpStatusCode.OK,
  serverData: {
    userId: "123",
    sid: "456"
  }
};

export const useAPI = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailure, setIsFailure] = useState<boolean>(false);
  const [serverRes, setServerRes] = useState<TServerSuccess | TServerError | null>(null);
  const [serverErr, setServerErr] = useState<TServerError | null>(null);

  useEffect(() => {
    setIsLoading(true);
    // code axios here
    const contactToServer = async (): Promise<
      | {
          msg: string;
        }
      | undefined
    > => {
      try {
        const serverResponse = await systemAPI.healthCheck();
        console.log("cac", serverResponse);
        // setServerRes(serverResponse);
        // setServerRes(tmpOK);
        // TODO: sua serverRes thanh serverResponse
        if (serverRes && serverRes.statusCode === 200) {
          setIsSuccess(true);
        } else {
          setIsFailure(true);
          setServerErr(tmpErr);
        }
        return;
      } catch (error) {
        setIsFailure(true);
        setServerErr(tmpErr);
        return;
      } finally {
        setIsLoading(false);
      }
    };
    contactToServer();
    // code axios done

    // return () => {
    //   second;
    // };
  }, [serverRes, serverErr]);

  return {
    isLoading,
    isSuccess,
    isFailure,
    serverRes,
    serverErr
  };
};
