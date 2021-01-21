import React from "react";
import { Link } from "react-router-dom";

const JobListItem = ({ url, job }) => {
  return (
    <div>
      <Link to={`${url}/${job.id}`} key={job.id}>
        {job.title}
      </Link>
    </div>
  );
};

export default JobListItem;
