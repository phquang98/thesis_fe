import { useEffect, useState } from "react";

import { bAccRepo } from "../../api/business/BankAccount.business";
import { BAccClientBody, BAccServerRes } from "../../types/business";

export const useBAcc = (routeHere: string, methodHere: string, paramHere?: string, bodyHere?: BAccClientBody) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailure, setIsFailure] = useState<boolean>(false);
  const [serverRes, setServerRes] = useState<BAccServerRes | null>(null);
  const [serverErr, setServerErr] = useState<unknown | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const networkAction = async (): Promise<void> => {
      try {
        if (bodyHere) {
          const expectedPositiveRes = await bAccRepo.createOne(bodyHere);
          setIsSuccess(true);
          setServerRes(expectedPositiveRes);
        }
        if (paramHere) {
          const expectedPositiveRes = await bAccRepo.readOneByBAccId(paramHere);
          setIsSuccess(true);
          setServerRes(expectedPositiveRes);
        }
      } catch (error) {
        setIsFailure(true);
        setServerErr(error);
      } finally {
        setIsLoading(false);
      }
    };

    networkAction();

    // return () => {
    //   second;
    // };
  }, [bodyHere, paramHere]);

  return {
    isLoading,
    isSuccess,
    isFailure,
    serverRes,
    serverErr
  };
};
