import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { getJobs } from "../Api";
import WithHeader from "../Components/WithHeader";
import { UserContext } from "../context/GlobalContext";

const FrontPage = () => {
  const descRef = useRef();
  const { jobs, setJobs, isLoading, setIsLoading } = useContext(UserContext);

  const history = useHistory();

  const generateKeywords = (val) => {
    const regex = /\s+/;
    return val.trim().split(regex).join("+");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const originalKeywords = descRef.current.value;
    const generatedKeywords = generateKeywords(originalKeywords);

    if (Object.keys(jobs).includes(generatedKeywords)) {
      history.push(`/jobs/${generatedKeywords}`);
      return;
    }

    const newJobs = await getJobs(generatedKeywords);
    setJobs({ ...jobs, [generatedKeywords]: newJobs });
    setIsLoading(false);
    history.push(`/jobs/${generatedKeywords}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="descption">Use SPACE to input multiple keywords</label>
        <br />
        <input id="descption" ref={descRef} placeholder="Job description..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export default WithHeader(FrontPage);
