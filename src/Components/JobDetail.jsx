import React from "react";
import styled from "styled-components";

const DetailWrapper = styled.main`
  margin: 3rem;
`;

const FlexWrapper = styled.div`
  position: relative;

  img {
    width: 10rem;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

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

  const createContent = (content) => ({ __html: content });

  return (
    <DetailWrapper id="job-detail">
      <FlexWrapper>
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
        <img src={company_logo} alt={company} />
      </FlexWrapper>

      <section
        className="description"
        dangerouslySetInnerHTML={createContent(description)}
      />
      <section
        className="how-to-apply"
        dangerouslySetInnerHTML={createContent(how_to_apply)}
      />
    </DetailWrapper>
  );
};

export default JobDetail;
