import axios from "axios";
import { NO_JOBS_FOUND } from "../Constants/variables";

const BASE_URL =
  "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=";

export const getJobs = async (description) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${description}`);
    return data.length === 0 ? NO_JOBS_FOUND : data;
  } catch (err) {
    console.error(err);
  }
};
