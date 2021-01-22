import axios from "axios";
import { NO_JOBS_FOUND } from "../Constants/variables";

export const BASE_URL =
  "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?";

export const fetchData = async (queryField, queryContent) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${queryField}=${queryContent}`
    );
    return data.length === 0 ? NO_JOBS_FOUND : data;
  } catch (err) {
    console.error(err);
  }
};
