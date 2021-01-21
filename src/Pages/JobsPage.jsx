import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";

// import WithHeader from "../Components/WithHeader";
import { UserContext } from "../context/GlobalContext";

const JobsPage = (props) => {
  const { jobs, setJobs, isLoading, setIsLoading } = useContext(UserContext);
  const { jobtitle } = props.match.params;

  let { path, url } = useRouteMatch();

  const currentJobs = jobs[jobtitle];
  return currentJobs.map((job) => (
    <Link to={`${url}/${job.id}`} key={job.id}>
      {job.title}
    </Link>
  ));
};

export default JobsPage;
