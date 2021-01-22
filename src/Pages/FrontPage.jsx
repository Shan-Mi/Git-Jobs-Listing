import React, { useContext, useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchData } from "../Api";
import WithHeader from "../Components/WithHeader";
import { UserContext } from "../context/GlobalContext";
import EatLoading from "react-loadingg/lib/EatLoading";
import { NO_JOBS_FOUND } from "../Constants/variables";
import { generateKeywords } from "../utilis/helper";
import SearchingForm from "../Components/SearchingForm";
import { BtnSmall } from "../Styles/ButtonWrapper";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.5rem;
`;

const FrontPage = () => {
  const descRef = useRef();
  const { jobs, setJobs } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

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

      const newJobs = await fetchData("description", generatedKeywords);
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

  const removeKey = () => {
    localStorage.removeItem("jobs");
  };

  return (
    <FlexWrapper>
      <BtnSmall onClick={removeKey}>Delete 'jobs' from localStorage</BtnSmall>
      {!isLoading && (
        <SearchingForm handleSubmit={handleSubmit} descRef={descRef} />
      )}
      {isLoading && <EatLoading />}
    </FlexWrapper>
  );
};

export default WithHeader(FrontPage);
