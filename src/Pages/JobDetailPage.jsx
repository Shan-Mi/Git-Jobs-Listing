import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import JobDetail from "../Components/JobDetail";
import { UserContext } from "../context/GlobalContext";
import { getOneJob } from "../utilis/helper";
import styled from "styled-components";
import { BtnSmall } from "../Styles/ButtonWrapper";
import { fetchData } from "../Api";

const Title = styled.h1`
  text-transform: uppercase;
  padding: 0;
  margin-right: 1rem;
`;

const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 1rem 2rem;
  position: sticky;
  top: 0;
  background-color: #93bdec;
  z-index: 10;
  padding-bottom: 1rem;
`;

const JobDetailPage = () => {
  const { jobs } = useContext(UserContext);
  // both way work
  // const { jobtitle, id } = useParams();
  const history = useHistory();
  const [, , jobtitle, id] = history.location.pathname.split("/");
  const [job, setJob] = useState({});
  const [btnContent, setBtnContent] = useState("Go Back");

  const handleClick = () => {
    if (btnContent === "Go Back") {
      return history.goBack;
    }
    return history.push("/");
  };

  // Now we can share link, app will not crash.
  useEffect(() => {
    if (Object.keys(jobs).includes(jobtitle)) {
      const [newJob] = getOneJob(jobtitle, id, jobs);
      return setJob(newJob);
    }
    const fetchJob = async () => {
      const newJob = await fetchData("id", id);
      setBtnContent("Go to Frontpage");
      setJob(newJob);
    };
    fetchJob();
  }, [id, jobs, jobtitle]);

  return (
    <>
      <TitleWrapper>
        <Title>Job Type: {jobtitle}</Title>
        <BtnSmall onClick={handleClick}>{btnContent}</BtnSmall>
      </TitleWrapper>
      <JobDetail job={job} />
    </>
  );
};

export default JobDetailPage;
