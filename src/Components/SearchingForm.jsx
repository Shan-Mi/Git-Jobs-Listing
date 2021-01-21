import React from "react";

const SearchingForm = ({ handleSubmit, descRef }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="descption">Use SPACE to input multiple keywords</label>
    <br />
    <input id="descption" ref={descRef} placeholder="Job description..." />
    <button id="search">Search</button>
  </form>
);

export default SearchingForm;
