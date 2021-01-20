import React from "react";
import EatLoading from "react-loadingg/lib/EatLoading";

const getDisplayName = (Wrappedcomponent) => {
  return Wrappedcomponent.displayName || Wrappedcomponent.name || "component";
};

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  WrappedComponent.displayName = `WithSpinner(${getDisplayName(
    WrappedComponent
  )})`;
  return isLoading ? <EatLoading /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
