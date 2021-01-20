import React, { useContext, useRef } from "react";
import { getJobs } from "../Api";
import { UserContext } from "../context/GlobalContext";

const FrontPage = () => {
  const descRef = useRef();
  const { jobs, setJobs } = useContext(UserContext);

  const generateKeywords = (val) => {
    const regex = /\s+/;
    return val.trim().split(regex).join("+");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const originalKeywords = descRef.current.value;
    const generatedKeywords = generateKeywords(originalKeywords);

    if (Object.keys(jobs).includes(generatedKeywords)) {
      return jobs[generatedKeywords];
    }

    const newJobs = await getJobs(generatedKeywords);
    setJobs({ ...jobs, [generatedKeywords]: newJobs });
  };

  return (
    <div>
      <h1>Welcome to GitHub Job Listing</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="descption">Use SPACE to input multiple keywords</label>
        <br />
        <input id="descption" ref={descRef} placeholder="Job description..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export default FrontPage;
