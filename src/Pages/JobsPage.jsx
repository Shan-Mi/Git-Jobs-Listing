import React, { useContext } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import JobList from "../Components/JobList";

// import WithHeader from "../Components/WithHeader";
import { UserContext } from "../context/GlobalContext";

const JobsPage = (props) => {
  const { jobs } = useContext(UserContext);
  const { jobtitle } = props.match.params;
  const { url } = useRouteMatch();
  const history = useHistory();
  const currentJobs = jobs[jobtitle];

  return (
    <>
      <JobList currentJobs={currentJobs} url={url} />
      <button onClick={history.goBack}>Go back</button>
    </>
  );
};

export default JobsPage;
