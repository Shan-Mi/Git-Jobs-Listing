import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const NoJobFound = () => {
  const history = useHistory();

  return (
    <>
      <p>No job found</p>
      <button onClick={() => history.push("/")}>Go back to search page</button>
    </>
  );
};

export default NoJobFound;
