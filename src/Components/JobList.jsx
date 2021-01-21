import React from "react";
import JobListItem from "./JobListItem";
import styled from "styled-components";

const ListWrapper = styled.div`
  margin: 0.8rem 3.8rem;
`;

const JobList = ({ currentJobs, url }) =>
  currentJobs.map((job, index) => (
    <ListWrapper key={job.id}>
      <JobListItem url={url} job={job} index={index} />
    </ListWrapper>
  ));

export default JobList;
