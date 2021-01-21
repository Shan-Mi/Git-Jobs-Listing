// get specific job from jobs, which is stored in context
export const getOneJob = (jobtitle, id, jobs) =>
  jobs[jobtitle].filter((job) => job.id === id);

// TODO: store search result in localstorage
