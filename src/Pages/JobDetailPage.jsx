import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "../context/GlobalContext";
import { getOneJob } from "../utilis/helper";

// import WithHeader from "../Components/WithHeader";

const JobDetailPage = () => {
  const { jobs, setJobs} = useContext(UserContext);

  let { jobtitle, id } = useParams();
  const history = useHistory();
  const [
    {
      url,
      created_at,
      type,
      company,
      company_url,
      location,
      title,
      description,
      how_to_apply,
      company_logo,
    },
  ] = getOneJob(jobtitle, id, jobs);

  return (
    <div>
      {jobtitle}: {id}
      <button onClick={history.goBack}>Go back</button>
    </div>
  );
};

export default JobDetailPage;
