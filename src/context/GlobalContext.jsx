import React, { createContext, useState } from "react";

export const UserContext = createContext({});

const GlobalContext = ({ children }) => {
  const [job, setJob] = useState({});

  return (
    <UserContext.Provider value={{ job, setJob }}>
      {children}
    </UserContext.Provider>
  );
};

export default GlobalContext;
