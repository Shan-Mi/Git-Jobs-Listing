import React, { useContext, useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import JobList from "../Components/JobList";
import { UserContext } from "../context/GlobalContext";
import styled from "styled-components";
import { BtnSmall } from "../Styles/ButtonWrapper";
import { fetchData } from "../Api";
import EatLoading from "react-loadingg/lib/EatLoading";
import { NO_JOBS_FOUND } from "../Constants/variables";

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 1rem 2rem;
  position: sticky;
  top: 0;
  background-color: #93bdec;
  padding-bottom: 1rem;
  z-index: 10;

  h1 {
    text-transform: uppercase;
    padding: 0;
    margin-right: 1rem;
  }
`;

const GobackBtn = styled(BtnSmall)`
  top: 50%;
  position: fixed;
`;

const JobsPage = (props) => {
  const { jobs, setJobs } = useContext(UserContext);
  const history = useHistory();
  const [, , jobtitle] = history.location.pathname.split("/");
  const { url } = useRouteMatch();
  const [isLoading, setIsLoading] = useState(false);
  const [currentJobs, setCurrentJobs] = useState([]);

  useEffect(() => {
    if (Object.keys(jobs).includes(jobtitle)) {
      return setCurrentJobs(jobs[jobtitle]);
    }

    setIsLoading(true);
    const fetchJobs = async () => {
      try {
        const newJobs = await fetchData("description", jobtitle);
        setCurrentJobs(newJobs);
        if (newJobs === NO_JOBS_FOUND) {
          history.push("/nojobfound");
          return;
        }
        setJobs({ [jobtitle]: currentJobs });
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJobs();
  }, [currentJobs, jobs, jobtitle, setJobs, history]);

  return (
    <>
      <TitleWrapper>
        <h1>
          {isLoading
            ? "Counting..."
            : `${currentJobs.length} jobs as "${jobtitle}"
          have been found:`}
        </h1>
      </TitleWrapper>
      <GobackBtn onClick={history.goBack}>Go back</GobackBtn>
      {isLoading && <EatLoading />}
      {!isLoading && <JobList currentJobs={currentJobs} url={url} />}
    </>
  );
};

export default JobsPage;
