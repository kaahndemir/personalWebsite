import {createContext, useState} from "react";
import { CookiesProvider, useCookies } from "react-cookie";

export const UserContext = createContext({});



export function UserContextProvider({children}) {
  const [cookies, setCookie] = useCookies();

  console.log(cookies)

  const [userInfo, setUserInfo] = useState(cookies.user ? cookies.user : {});

  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      {children}
    </UserContext.Provider>
  );
}