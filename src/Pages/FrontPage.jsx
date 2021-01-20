import React, { useContext, useRef } from "react";

const FrontPage = () => {
  const descRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
  };
  return (
    <div>
      <h1>Welcome to GitHub Job Listing</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Description" />
        <input ref={descRef} placeholder="Write searching keywords" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default FrontPage;
