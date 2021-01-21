import React from 'react'

const JobDetail = ({job}) => {
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
  } = job
  
  return (
    <div>
    {url},
    {created_at},
    {type},
    {company},
    {company_url},
    {location},
    {title},
    {description},
    {how_to_apply},
    {company_logo},
    </div>
  )
}

export default JobDetail
