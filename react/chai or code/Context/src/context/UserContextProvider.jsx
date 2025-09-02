import React from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  return(
        <UserContext.Provider value={User}>
        {children}
        </UserContext.Provider>
    )
};

export default UserContextProvider;
