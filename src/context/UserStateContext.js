import React, { useState } from "react";

export const UserStateProvider = (props) => {
  const [userState, setUserState] = useState(
    {
      "follows": [ 0, 1, 2 ],
      "likes": [ 0, 1, 2 ],
      "share_holder_info": {
        "country": "England",
        "dob": "01-01-1970",
        "email": "winston@smith.com",
        "first_name": "Winston",
        "last_name": "Smith",
      }
    }
  );
  const isLoggedIn = () => userState!==null;

  return (
    <UserStateContext.Provider value={{userState: userState, setUserState: setUserState, isLoggedIn}}>
        {props.children}
    </UserStateContext.Provider>
  );
};

export const UserStateContext = React.createContext( {
  userState: null,
  setUserState: () => {}
});
