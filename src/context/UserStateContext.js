import React, { useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";

export const UserStateProvider = (props) => {
  const localStorageKey = "userState";
  const [userStateStorage, setUserStateStorage] = useLocalStorage(
    localStorageKey,
    null
  );
  const [news, setNews] = useState([]);
  const [cookies, setCookies] = useState(false);

  const isLoggedIn = () => {
    return userStateStorage !== null;
  };

  return (
    <UserStateContext.Provider
      value={{
        userState: userStateStorage,
        setUserState: setUserStateStorage,
        isLoggedIn: isLoggedIn,
        news: news,
        setNews: setNews,
        cookies: cookies,
        setCookies: setCookies,
      }}
    >
      {props.children}
    </UserStateContext.Provider>
  );
};

export const UserStateContext = React.createContext({
  userState: null,
  setUserState: () => {},
  news: [],
  setNews: () => {},
  cookies: false,
  setCookies: () => {},
});
