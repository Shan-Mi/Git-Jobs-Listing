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
    <div id="job-detail">
      <h2>Job Title: {title}</h2>
      <a href={url} target="_blank" rel="noreferrer">
        Original Link
      </a>
      <p>Created At: {created_at}</p>
      <strong>Type: {type}</strong>
      <p>Company: {company}</p>
      <a href={company_url} className="company-url">
        {company_url}
      </a>
      <p className="location">Location: {location}</p>
      <div
        className="description"
        dangerouslySetInnerHTML={createDescription()}
      />
      <div
        className="how-to-apply"
        dangerouslySetInnerHTML={createHowToApply()}
      />
      <img src={company_logo} alt={company} />
    </div>
  );
};

export default JobDetail;
