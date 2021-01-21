import React from "react";
import Header from "./Header";
import styled from "styled-components";


const getDisplayName = (Wrappedcomponent) => {
  return Wrappedcomponent.displayName || Wrappedcomponent.name || "component";
};

const WithHeader = (WrappedComponent) => () => {
  WrappedComponent.displayName = `WithHeader(${getDisplayName(
    WrappedComponent
  )})`;

  return (
    <>
      <Header />
      <WrappedComponent />
    </>
  );
};

export default WithHeader;
