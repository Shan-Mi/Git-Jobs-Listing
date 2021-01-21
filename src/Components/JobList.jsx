import React from "react";
import JobListItem from "./JobListItem";

const JobList = ({ currentJobs, url }) =>
  currentJobs.map((job) => (
    <div key={job.id}>
      <JobListItem url={url} job={job} />
    </div>
  ));

export default JobList;
