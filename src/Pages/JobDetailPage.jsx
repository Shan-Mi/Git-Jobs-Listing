import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import JobDetail from "../Components/JobDetail";
import { UserContext } from "../context/GlobalContext";
import { getOneJob } from "../utilis/helper";

// import WithHeader from "../Components/WithHeader";

const JobDetailPage = () => {
  const { jobs } = useContext(UserContext);
  const { jobtitle, id } = useParams();
  const history = useHistory();
  const [job] = getOneJob(jobtitle, id, jobs);

  return (
    <div>
      <h1>Job Type: {jobtitle}</h1>
      <button onClick={history.goBack}>Go back</button>
      <JobDetail job={job} />
      <button onClick={history.goBack}>Go back</button>
    </div>
  );
};

export default JobDetailPage;
