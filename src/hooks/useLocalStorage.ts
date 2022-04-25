// import { useEffect, useState } from "react";

// const getKPFromLS = (key: string, iniValue: string | Function) => {
//   const suspectKP = localStorage.getItem(key);
//   if (suspectKP) {
//     const recordKP = JSON.parse(suspectKP);
//     return recordKP;
//   }

//   if (iniValue instanceof Function) {
//     return iniValue();
//   }

//   return iniValue;
// };

// export const useLocalStorage = (key: string, iniValue: string) => {
//   const [userSIDInLS, setUserSIDInLS] = useState<string>(() => {
//     return getKPFromLS(key, iniValue);
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(userSIDInLS));
//   }, [key, userSIDInLS]);

//   return [userSIDInLS, setUserSIDInLS];
// };
export {};

// // store user session id in local storage -> so that if refresh, page still remember who it is
