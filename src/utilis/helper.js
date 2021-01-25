// get specific job from jobs, which is stored in context
export const getOneJob = (jobtitle, id, jobs) =>
  jobs[jobtitle].filter((job) => job.id === id);

export const generateKeywords = (val) => {
  const regex = /\s+/;
  return val.trim().split(regex).sort().join("+");
};
