import React, { useState } from "react";

export const UserStateProvider = (props) => {
  const [userState, setUserState] = useState(null);
  const isLoggedIn = () => userState!==null;

  return (
    <UserStateContext.Provider value={{userState: userState, setUserState: setUserState, isLoggedIn: isLoggedIn}}>
        {props.children}
    </UserStateContext.Provider>
  );
};

export const UserStateContext = React.createContext( {
  userState: null,
  setUserState: () => {}
});
