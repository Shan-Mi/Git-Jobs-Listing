import React, { createContext, useState } from "react";

export const UserContext = createContext({});

const GlobalContext = ({ children }) => {
  const initialState = localStorage.hasOwnProperty('jobs') ? JSON.parse(localStorage.getItem('jobs')) : {}
  const [jobs, setJobs] = useState(initialState);
  

  return (
    <UserContext.Provider value={{ jobs, setJobs }}>
      {children}
    </UserContext.Provider>
  );
};

export default GlobalContext;
