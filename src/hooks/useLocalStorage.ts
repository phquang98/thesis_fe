// import { useEffect, useState } from "react";

// const getKPFromLS = (key: string, iniValue: string): string => {
//   const suspectKP = localStorage.getItem(key);
//   if (suspectKP) {
//     const recordKP = JSON.parse(suspectKP);
//     return recordKP;
//   }

//   return iniValue;
// };

// export const useLocalStorage = (
//   key: string,
//   iniValue: string
// ): [string, React.Dispatch<React.SetStateAction<string>>] => {
//   const [userDataInLS, setUserDataInLS] = useState<string>(() => {
//     return getKPFromLS(key, iniValue);
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(userDataInLS));
//   }, [key, userDataInLS]);

//   return [userDataInLS, setUserDataInLS];
// };
export {};

// // Explain: store user session id in local storage -> so that if refresh, page still remember who it is
