import React from "react";

const JobDetail = ({ job }) => {
  const {
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
  } = job;

  const createDescription = () => ({ __html: description });
  const createHowToApply = () => ({ __html: how_to_apply });

  return (
    <div>
      <h2>Job Title: {title}</h2>
      <a href={url} target="_blank" rel="noreferrer">
        Original Link
      </a>
      ,<p>Created At: {created_at}</p>
      <p>Type: {type}</p>
      <p>Company: {company}</p>
      <a href={company_url}>{company_url}</a>
      <p>Location: {location}</p>
      <div dangerouslySetInnerHTML={createDescription()} />
      <div dangerouslySetInnerHTML={createHowToApply()} />
      <img src={company_logo} alt={company} />
    </div>
  );
};

export default JobDetail;
