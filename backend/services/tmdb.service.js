import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
  // Logge den API-Key, um sicherzustellen, dass er korrekt geladen wird
  console.log("TMDB API Key:", ENV_VARS.TMDB_API_KEY);

  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,
    },
  };

  const response = await axios.get(url, options);

  if (response.status !== 200) {
    throw new Error("Failed to fetch data from TMDB" + response.statusText);
  }

  return response.data;
};
