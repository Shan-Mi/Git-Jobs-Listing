import React, { createContext, useState } from "react";

export const UserContext = createContext({});

const GlobalContext = ({ children }) => {
  const [jobs, setJobs] = useState({});

  return (
    <UserContext.Provider value={{ jobs, setJobs }}>
      {children}
    </UserContext.Provider>
  );
};

export default GlobalContext;
