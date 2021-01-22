import React, { useContext, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { getJobs } from "../Api";
import WithHeader from "../Components/WithHeader";
import { UserContext } from "../context/GlobalContext";
import EatLoading from "react-loadingg/lib/EatLoading";
import { NO_JOBS_FOUND } from "../Constants/variables";
import { generateKeywords } from "../utilis/helper";
import SearchingForm from "../Components/SearchingForm";

const FrontPage = () => {
  const descRef = useRef();
  const { jobs, setJobs } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
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
        history.push("/nojobfound");
        return;
      }
      setJobs({ ...jobs, [generatedKeywords]: newJobs });
      setIsLoading(false);
      history.push(`/jobs/${generatedKeywords}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {!isLoading && (
        <SearchingForm handleSubmit={handleSubmit} descRef={descRef} />
      )}
      {isLoading && <EatLoading />}
    </div>
  );
};

export default WithHeader(FrontPage);
