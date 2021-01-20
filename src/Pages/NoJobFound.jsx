import React from "react";
import WithHeader from "../Components/WithHeader";

const NoJobFound = () => {
  return <p>No jobs found</p>;
};

export default WithHeader(NoJobFound);
