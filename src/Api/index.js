import axios from "axios";

const BASE_URL =
  "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=";

export const getJobs = async (description) => {
  const { data } = await axios.get(`${BASE_URL}${description}`);
  return data;
};
