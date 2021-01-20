import axios from "axios";

const BASE_URL = "https://jobs.github.com/positions.json?description=";

export const getJobs = ({ description }) => axios.get(`${BASE_URL}description`);
