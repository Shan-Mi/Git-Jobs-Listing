import React, { useContext, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { getJobs } from "../Api";
import WithHeader from "../Components/WithHeader";
import { UserContext } from "../context/GlobalContext";
import EatLoading from "react-loadingg/lib/EatLoading";
import { NO_JOBS_FOUND } from "../Constants/variables";

const FrontPage = () => {
  const descRef = useRef();
  const { jobs, setJobs } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const generateKeywords = (val) => {
    const regex = /\s+/;
    return val.trim().split(regex).join("+");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const originalKeywords = descRef.current.value;
    const generatedKeywords = generateKeywords(originalKeywords);

    if (Object.keys(jobs).includes(generatedKeywords)) {
      history.push(`/jobs/${generatedKeywords}`);
      return;
    }

    const newJobs = await getJobs(generatedKeywords);
    if (newJobs === NO_JOBS_FOUND) {
      console.log("no results, should be...");
      history.push("/nojobfound");
      return;
    }
    setJobs({ ...jobs, [generatedKeywords]: newJobs });
    setIsLoading(false);
    history.push(`/jobs/${generatedKeywords}`);
  };

  const SearchingForm = () => (
    <form onSubmit={handleSubmit}>
      <label htmlFor="descption">Use SPACE to input multiple keywords</label>
      <br />
      <input id="descption" ref={descRef} placeholder="Job description..." />
      <button>Search</button>
    </form>
  );

  return (
    <div>
      {!isLoading && <SearchingForm />}
      {isLoading && <EatLoading />}
    </div>
  );
};

export default WithHeader(FrontPage);
