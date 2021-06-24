import React  from "react";
import useLocalStorage from "../utils/useLocalStorage";

export const UserStateProvider = (props) => {
  const localStorageKey = "userState";
  const [userStateStorage, setUserStateStorage] = useLocalStorage(localStorageKey, null);

  const isLoggedIn = () => {
    return userStateStorage !== null;
  }

  return (
    <UserStateContext.Provider value={{userState: userStateStorage, setUserState: setUserStateStorage, isLoggedIn: isLoggedIn}}>
        {props.children}
    </UserStateContext.Provider>
  );
};

export const UserStateContext = React.createContext( {
  userState: null,
  setUserState: () => {}
});
