import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import JobDetail from "../Components/JobDetail";
import { UserContext } from "../context/GlobalContext";
import { getOneJob } from "../utilis/helper";
import styled from "styled-components";
import { BtnSmall } from "../Styles/ButtonWrapper";

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
  const { jobtitle, id } = useParams();
  const history = useHistory();
  // both way work
  // const [, , jobtitle, id] = history.location.pathname.split("/");
  const [job] = getOneJob(jobtitle, id, jobs);

  return (
    <>
      <TitleWrapper>
        <Title>Job Type: {jobtitle}</Title>
        <BtnSmall onClick={history.goBack}>Go back</BtnSmall>
      </TitleWrapper>
      <JobDetail job={job} />
    </>
  );
};

export default JobDetailPage;
