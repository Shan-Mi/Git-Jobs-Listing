import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import JobList from "../Components/JobList";

// import WithHeader from "../Components/WithHeader";
import { UserContext } from "../context/GlobalContext";

const JobsPage = (props) => {
  const { jobs, setJobs} = useContext(UserContext);
  const { jobtitle } = props.match.params;

  let { path, url } = useRouteMatch();

  const currentJobs = jobs[jobtitle];


  return currentJobs.map((job) => (
    <div key={job.id}>
      <JobList url={url} job={job} />
    </div>
  ));
};

export default JobsPage;
