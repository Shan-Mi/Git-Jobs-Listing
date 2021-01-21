import React, { useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import JobList from "../Components/JobList";
import { UserContext } from "../context/GlobalContext";
import styled from "styled-components";
import { BtnSmall } from "../Styles/ButtonWrapper";

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 1rem 2rem;
  position: sticky;
  top: 0;
  background-color: #93bdec;
  padding-bottom: 1rem;

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
  const { jobs } = useContext(UserContext);
  const { jobtitle } = props.match.params;
  const { url } = useRouteMatch();
  const history = useHistory();
  const currentJobs = jobs[jobtitle];

  return (
    <>
      <TitleWrapper>
        <h1>Job title as "{jobtitle}":</h1>
      </TitleWrapper>
      <GobackBtn onClick={history.goBack}>Go back</GobackBtn>
      <JobList currentJobs={currentJobs} url={url} />
    </>
  );
};

export default JobsPage;
