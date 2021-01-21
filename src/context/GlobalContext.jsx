import React, { createContext, useState } from "react";

export const UserContext = createContext({});

const GlobalContext = ({ children }) => {
  const [jobs, setJobs] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <UserContext.Provider value={{ jobs, setJobs, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default GlobalContext;
